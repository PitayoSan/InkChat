<template>
    <div class="columns is-multiline">
        <div class="column is-4" v-for="friend of Object.keys(userFriends.friends)" :key="friend.usernames">
            <div class="card">
                <div class="card-content">
                    <div class="media flex-container">
                        <div class="media-left v-align">
                            <figure class="image is-48x48">
                            <img :src="userFriends.friends[friend]['pp']" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content v-align">
                            <p class="title is-4">{{userFriends.friends[friend]['username']}}</p>
                        </div>
                        </div>

                        <div class="columns">
                            <div class="column is-6">
                                <b-button expanded type="is-info is-light" @click="toChat(friend)">Chatear</b-button>    
                            </div>
                            <div class="column is-6">
                                <b-button expanded type="is-danger is-light" @click="deleteFriend(friend)">Eliminar</b-button>
                            </div>
                            
                        </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
//import { friendsApi } from '../../axios/src/api';
import friendsApi from '../../axios/src/Friends';
import {mapState} from 'vuex';
import userApi from '../../axios/src/Users';

export default {
    name: "Friends",
    data() {
        return {
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
        ...mapState(['userFriends'])
    },

    created: function(){
        this.$store.dispatch('getUserFriends');
    },

    methods: {
        toChat(id){
            this.$router.push(`/home?chatwith=${id}`);
        },
        async getUser(id){
            return await userApi.getUser(id);
        },
        deleteFriend(id){
            friendsApi.deleteFriend(id);
        }
    }
}
</script>