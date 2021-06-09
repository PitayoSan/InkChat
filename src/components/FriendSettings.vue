<template>
    <b-modal :active.sync="active" has-modal-card>
        <section class="modal-card">
            <div class="modal-card-head">
                <p>Friend settings</p>
            </div>
            <div class="modal-card-body" style="overflow-y:auto; max-height: 500px; padding: 0;">
            <div class="box app-border" v-for="friend of friends" :key="friend.username" style="margin: 0;">
                    <!-- <div class="card-content"> -->
                            <div class="flex-container">
                                <div class="round-img v-align">
                                    <figure class="image is-64x64">
                                        <img :src="friend.pp" alt="Placeholder image" class="is-rounded">
                                    </figure>
                                </div>
                                <div class="name v-align flex-expand-simple">
                                    <p class="title is-4">{{friend.username}}</p>
                                </div>
                                <div class="v-align">
                                    <b-button expanded type="is-danger is-light" @click="deleteFriend(friend.uid)">Eliminar</b-button>
                                </div>
                            </div>
                </div>
            </div>
        <!-- </div> -->
        </section>
        
    </b-modal>
</template>

<script>
import friendsApi from '../../axios/src/Friends';
import {mapState} from 'vuex';
import userApi from '../../axios/src/Users';

export default {
    name: "FriendSettings",
    data() {
        return {
            friends: [],
            active: false
        }
    },
    computed: {
        ...mapState(['userProfile']),
    },
    // watch: {
    //     isActive(newActive) {
    //         this.active = newActive;
    //     }
    // },
    async created() {
        let fetchedFriends = await friendsApi.getFriends(this.userProfile.uid).then(x => x.friends);
        this.friends = Object.keys(fetchedFriends).map(f => (
            {
                pp: fetchedFriends[f].pp,
                username: fetchedFriends[f].username,
                uid: f
            }
        ));
    },
    methods: {
        async getUser(id){
            return await userApi.getUser(id);
        },
        deleteFriend(friend){
            friendsApi.deleteFriend(this.userProfile.uid, friend).then(() => {
                this.$buefy.dialog.alert("Friend successfully removed unu");
                this.toggleOpen()
            })
            .catch(() => {
                this.$buefy.dialog.alert("Invalid user owo");
            });
        },
        toggleOpen() {
            this.active = !this.active;
        }
    }
}
</script>

<style scoped>
.round-img{
    height: 64px;
    width: 64px;
}

.thin {
    padding: 0.5rem;
}

.round-img img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.name{
    margin-left: 20px;
}
</style>