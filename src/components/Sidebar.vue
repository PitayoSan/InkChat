<template>
    <div class="sidebar-page">
        <section class="sidebar-layout">
             <b-sidebar
                position="fixed"
                :fullheight = true
                :overlay = true
                :right = true
                type="is-light"
                v-model="open"
            >
                <div class="p-1 flex-center top-element">
                    <div class="container">
                        <img :src=userProfile.pp
                            v-bind:onerror="this.backoffpp"
                        >
                    </div>
                    <div>
                        <b-icon icon="user"></b-icon>
                        {{userProfile.username}}
                    </div>
                    <b-field class="file">
                        <b-upload v-model="newPP" expanded>
                            <a class="button is-primary is-fullwidth">
                            <b-icon icon="upload"></b-icon>
                            <span>{{ newPP.name || "Click to upload"}}</span>
                            </a>
                        </b-upload>
                    </b-field>
                    <b-button @click="changePP" tag="a" type="is-text" style="margin-top: 12px;">
                        Change profile pic
                    </b-button>
                    <p class="errors" v-for="(error, i) in errors.newPP" :key="'newPP_'+i">{{error}}</p>
                    <b-button tag="a" type="is-text"
                        href="/pwd-change" style="margin-top: 12px;">
                        Change password
                    </b-button>
                    <b-button @click="logout" type="is-text">
                        Logout
                    </b-button>   
                </div>
                <hr style="border: 0.5px solid #dedede; margin-right: 20px; margin-left: 20px;">
                <div v-if="friendRequests.length > 0" class="flex-grow-scroll flex-expand-simple">
                    <div class="p-1 flex-center" v-for="friend of friendRequests" :key="friend">
                        <b>Pending friend requests</b>
                        <br><br>
                        <FriendRequest :uuid="userProfile.uid" :fname="friend.username" :fuid="friend.uid" :src="friend.pp"/>
                    </div>
                </div>
                <div v-else class="flex-expand-simple">
                    <b class="p-1 flex-center">No pending friend requests</b>
                </div>
                <div class="bottom">
                    <b-input v-model="newFR" placeholder="Username" size="is-small" required></b-input>
                    <b-button @click="searchUser" tag="a"
                        size="is-large"
                        type="is-info is-light">
                        Send friend request
                    </b-button>
                </div>
            </b-sidebar>
        </section>
    </div>
</template>

<script>
import FriendRequest from './FriendRequest.vue';
import { mapState } from 'vuex';
import friendsApi from '../../axios/src/Friends';
import usersApi from '../../axios/src/Users';

export default {
  name: 'Sidebar',
  components: {
      FriendRequest
  },
  data() {
    return {
      open: false,
      backoffpp: "this.src='https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Falt.png?alt=media&token=7e0feced-f0b9-45c4-92f4-8ec9df70168c'",
      newFR: null,
      newPP: {},
      profilePic: null,
      errors: this.initErrors()
    }
  },
  computed: {
      ...mapState(['userProfile']),
        friendRequests: function () {
            let processedRequests = [];
            for (const [key, friend] of Object.entries(this.userProfile.friends)) {
                if (!friend["is_friends"]) {
                    processedRequests.push({
                        "username": friend["username"],
                        "uid": key,
                        "pp": friend["pp"]
                    })
                }
            }
            return processedRequests;
        },
  },
  methods: {
      openTrue() {
          this.open = true;
      },
      logout() {
          this.$store.dispatch('logout');
      },
      searchUser() {
          friendsApi.sendFR(this.userProfile.uid, this.newFR).then(() => {
              this.$buefy.dialog.alert("Friend request successfully sent! uwu");
          })
          .catch(() => {
              this.$buefy.dialog.alert("Invalid user or friend request owo");
          });
      },
      async validateForm() {
            this.errors = this.initErrors();

            if(this.newPP instanceof File) {
                if(!this.newPP.type.startsWith('image')) {
                    this.errors.newPP.push('File type must be image')
                } else {
                    let b64 = await this.getBase64Image(this.newPP);
                    this.profilePic = b64;
                }
            }

            if(this.hasErrors())
                throw {type: 'formErrors'}
            
            return true;
      },
      changePP() {
          if (this.newPP instanceof File) {
            this.validateForm()
            .then(() => usersApi.updateUserPP(this.userProfile.uid, this.profilePic))
            .then(() => {
                this.$buefy.dialog.alert({
                    message: "Profile pic successfully updated uwu",
                    onConfirm: () => location.reload()
                });
            })
            .catch(() => {
                this.$buefy.dialog.alert("Profile pic couldn't be updated owo");
            })
            return;
          }
          this.$buefy.dialog.alert("First choose a file òwó");
      },
      getBase64Image(file) {
          return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = error => reject(error);
          }); 
      },
      hasErrors() {
          for(let errType of Object.keys(this.errors)) {
              if(this.errors[errType].length)
                  return true;
          }
          return false;
      },
      initErrors() {
          return {
              username: [],
              email: [],
              password: [],
              pp: []
          }
      }
  }
}
</script>

<style lang="scss" scoped>
    .container {
    position: relative;
    margin-bottom: 10px;
    width: 37%; /* The size you want */
    }
    .container:after {
    content: "";
    display: block;
    padding-bottom: 100%; /* The padding depends on the width, not on the height, so with a padding-bottom of 100% you will get a square */
    }

    .container img {
    position: absolute; /* Take your picture out of the flow */
    border-radius: 50%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; /* Make the picture taking the size of it's parent */
    width: 100%; /* This if for the object-fit */
    height: 100%; /* This if for the object-fit */
    object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
    object-position: center;
    }

    .top-element{
        margin-top: 20px;
    }

    .flex-center{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-items: center;
        align-items: center;
    }

    .flex-center div{
        margin-bottom: 10px;
    }

    .bottom{
        bottom: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .options {
        font-size: small;
    }
    .errors {
        color: red;
        font-size: small;
    }

</style>