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
                        <img src='../assets/images/misato.jpg'>
                    </div>
                    <div>
                        <b-icon icon="user"></b-icon>
                        {{username}}
                    </div>
                    <b-button tag="a"
                        href="/pwd-change">
                        Change password
                    </b-button>    
                </div>
                <hr style="border: 0.5px solid; margin-right: 20px; margin-left: 20px;">
                <div class="p-1 flex-center">
                    <b>Pending friend requests</b>
                    <FriendRequest fname="🅱iguel" imgsrc='octoling.jpg'/>
                    <FriendRequest fname="Wis" imgsrc='inkling.jpg'/>
                    <FriendRequest fname="Rodrigo" imgsrc='kingpin.jpg'/>
                    <FriendRequest fname="Vítor" imgsrc='palutena.png'/>
                </div>
                <div class="bottom">
                    <b-input placeholder="Username" size="is-small"></b-input>
                    <b-button tag="a"
                        size="is-large"
                        type="is-info is-light"
                        href="/search-usr">
                        Send friend request
                    </b-button>
                </div>
            </b-sidebar>
        </section>
    </div>
</template>

<script>
import FriendRequest from './FriendRequest.vue';

export default {
  name: 'Sidebar',
  components: {
      FriendRequest
  },
  data() {
    return {
      open: false,
      username: 'Charli'
    }
  },
  methods: {
      openTrue() {
          this.open = true;
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
        position: absolute;
        bottom: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

</style>