<template>
    <section>
        <b-button
            label="Lista de amigos"
            type="is-primary"
            size="is-medium"
            @click="isComponentModalActive = true" />

        <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            full-screen
            :can-cancel="false">
            <modal-form v-bind="friends"></modal-form>
        </b-modal>
    </section>
</template>

<script>
//import Vue from "vue"
//import DatatableFactory from "vuejs-datatable"
/*
var friend_list = new Vue({
        el: '#friends',
        friends: {
            friend1: {
                primerNombre: 'John',
                apellido: 'Doe',
                edad: 30
            },
            friend2: {
                primerNombre: 'Dohn',
                apellido: 'Joe',
                edad: 25
            }
        }
        })
        */

    const ModalForm = {
        props: ['friend', 'options'],
        template: `
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Amigos</p>
                </header>
                
                <section class="modal-card-body">
                    <md-textarea v-model="description">Aquí se muestran hommies</md-textarea>
                </section>

                <footer class="modal-card-foot">
                    <b-button
                        label="Close"
                        @click="$parent.close()" />
                </footer>
            </div>
        `
    }
    /*
    <ul id="friends" class="friends">
                        <li v-for="f in friends">
                            {{ f }}
                        </li>
                    </ul>
    */

    export default {
        name: 'FriendsModal',
        components: {
            ModalForm
        },
        data() {
            return {
                isComponentModalActive: false,
                friends: [
                    {name: "Yugo"},
                    {name: "Emma"}
                ]
            }
        }
    }

    
</script>