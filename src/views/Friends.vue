<template>
    <div class="columns is-multiline">
        <div class="column is-4" v-for="friend of friends" :key="friend.usernames">
            <div class="card">
                <div class="card-content">
                    <div class="media flex-container">
                        <div class="media-left v-align">
                            <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content v-align">
                            <p class="title is-4">{{friend.username}}</p>
                        </div>
                        </div>

                        <div class="columns">
                            <div class="column is-6">
                                <b-button expanded type="is-info is-light">Chatear</b-button>    
                            </div>
                            <div class="column is-6">
                                <b-button expanded type="is-danger is-light">Eliminar</b-button>
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
        ...mapState(['userProfile'])
    },

    created: function(){
        friendsApi.getFriends(this.userProfile.uid)
                    .then(usr => {
                        console.log(usr);
                        //usr = this.setDefaults(component);
                        //this.component = component
                    })
    }
}
</script>