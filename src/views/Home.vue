<template>
    <main>
        <Sidebar ref="sbar"/>
        <nav class="columns app-title">
            <div class="column is-one-fifth"></div>
            <div class="column has-text-centered v-align">
                <h1 class="title" style="color: #ff4d8e;">InkChat</h1>
            </div>
            <div class="column is-one-fifth">
                <BoxButton 
                @click.native="trigger" 
                text="Charli" 
                imgsrc="https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/users%2Ftest%2Fprofile.jpg?alt=media&token=014349b0-9f06-4e8b-8677-8f3660945e60" 
                :border="false"
                :round="true"/>
            </div>
        </nav>
        <section class="columns">
            <div class="column is-one-fifth">
                <BoxButton text="Grupos" :border="true" :round="true"
                imgsrc="https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Fusers-solid.svg?alt=media&token=0b0313a3-5515-40b8-b5a5-99909086a20c"
                />
                <br>
                <BoxButton text="Amigos" :border="true" :round="false"
                @click.native = "isComponentModalActive = true"
                imgsrc="https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Fheart-solid.svg?alt=media&token=e7f54740-6e0b-4406-801f-b93e9ff4e79c"
                />
            </div>
            <div class="column has-text-centered">
                <Canvas width="800" height="500" />
            </div>
            <div class="column is-one-fifth"></div>
        </section>
        <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            full-screen
            :can-cancel="false">
            <modal-form v-bind="friends"></modal-form>
        </b-modal>
    </main>
    
</template>

<script>
import Canvas from '../components/Canvas';
import BoxButton from '../components/BoxButton';
import Sidebar from '../components/Sidebar';

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

export default {
    name: 'Home',
    components: {
        Canvas,
        BoxButton,
        Sidebar,
        ModalForm
    },
    data() {
        return {
            open: false,
            isComponentModalActive: false,
            friends: [
                {name: "Yugo"},
                {name: "Emma"}
            ]
        }
    },
    methods: {
        trigger() {
            this.$refs.sbar.openTrue();
        }
    }
}
</script>
<style scoped>
.app-title {
    padding-top: 2em;
    padding-bottom: 2em;
}
.head {
    display: inline-block;
}
.profile {
    max-width: 250px;
    background-color: tomato;
}
</style>