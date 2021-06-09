<template>
    <section id="area" class="padding-std">
        <Canvas ref="ownCanvas" width="300" height="300" theName="myCanvas"/>
        <b-button @click="sendMessage" type="is-primary" expanded>Send</b-button>
    </section>
</template>

<script>
import Canvas from './Canvas';
import { mapState } from 'vuex';
// import { auth } from '../firebase';

export default {
    name: 'CanvasArea',
    components: {
        Canvas
    },
    props: {
        chatSettings: Object
    },
    methods: {
        sendMessage() {
            let msg = this.$refs['ownCanvas'].getImageData();
            this.$pnPublish({channel: `ch_${this.chatSettings.with.uid}`, message: msg, meta: {uid: this.userProfile.uid, pp: this.userProfile.pp}});
            // this.$pnPublish({channel: `ch_${auth.currentUser.uid}`, message: msg, meta: {uid: this.userProfile.uid, pp: this.userProfile.pp}});
            this.$refs['ownCanvas'].clearCanvas()
        }
    },
    computed: {
        ...mapState(['userProfile'])
    }
}
</script>

<style scoped>
/* #area {
    background-color: lightblue;
} */
</style>