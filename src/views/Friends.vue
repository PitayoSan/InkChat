<template>
    <div class="columns is-multiline">
        <div class="column is-4" v-for="friend of friends" :key="friend.username">
            <div class="card">
                <div class="card-content">
                    <div class="media flex-container">
                        <div class="media-left v-align">
                            <figure class="image is-48x48">
                            <img :src="friend.pp" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content v-align">
                            <p class="title is-4">{{friend.username}}</p>
                        </div>
                        </div>
                        <div>
                            <b-button expanded type="is-danger is-light" @click="deleteFriend(friend.uid)">Eliminar</b-button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import friendsApi from '../../axios/src/Friends';
import {mapState} from 'vuex';
import userApi from '../../axios/src/Users';

export default {
    name: "Friends",
    data() {
        return {
            friends: []
            /*friends: [
                {
                    username: "Wis Luilson",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                },
                {
                    username: "ziv va",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                },
                {
                    username: "Larly Chopez",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                },
                {
                    username: "Biguel Marro",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                },
                {
                    username: "Roberto Félix",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                }
            ]*/
        }
    },

    computed: {
        ...mapState(['userProfile'])
    },

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
            })
            .catch(() => {
                this.$buefy.dialog.alert("Invalid user owo");
            });
        }
    }
}
</script>