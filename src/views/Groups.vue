<template>
    <div class="columns is-multiline">
        <div class="column is-12" v-for="group of userGroups" :key="group.usernames">
            <div class="card">
                <div class="card-content">
                    <div class="media flex-container">
                        <div class="media-left v-align">
                            <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content v-align">
                            <p class="title is-4">{{group.name}}</p>
                            <p class="description is-4">{{group.description}}</p>
                        </div>
                    </div>

                        <div class="columns">
                            <div class="column is-6">
                                <b-button expanded type="is-info is-light" @click="toGroupChat(group.name)">Chatear</b-button>    
                            </div>
                            <div class="column is-6">
                                <b-button expanded type="is-danger is-light" @click="exitGroup(group.name)">Abandonar</b-button>
                            </div>
                            
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import groupsApi from '../../axios/src/Groups';
import { mapState } from 'vuex';

export default {
    name: "Groups",
    data() {
        return { 
            userGroups: [
                {
                    name: "Hentai Simulator 7",
                    description: "Proyecto de Ken",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                },
                {
                    name: "ISC en Lonjas",
                    description: "Grupo principal de ISC",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                },
                {
                    name: "La Banda Gangrena",
                    description: "Grupo de compra y venta",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                },
                {
                    name: "Tianguis Tec",
                    description: "Aquí se vende todo (tal vez)",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                }
            ]
        }
    },
    
    computed: {
        ...mapState(['userGroups'])
    },

    created: function(){
        this.$store.dispatch('getUserGroups');
    },

    methods: {
        toGroupChat(id){
            this.$router.push(`/home?chatwithgroup=${id}`);
        },
        exitGroup(id){
            groupsApi.exitGroup(id);
        }
    }
    /*
    function(){
        groupsApi.getGroups(this.userProfile.uid)
                    .then(usr => {
                        console.log(usr);
                        //usr = this.setDefaults(component);
                        //this.component = component;
                    })
    }
    */
}
</script>