<template>
    <section class="padding-std">
        <Canvas ref="ownCanvas" width="200" height="200" theName="myCanvas"/>
        <b-button @click="sendMessage" type="is-primary" expanded>Send</b-button>
    </section>
</template>

<script>
import Canvas from './Canvas';
import { mapState } from 'vuex';

export default {
    name: 'CanvasArea',
    components: {
        Canvas
    },
    methods: {
        sendMessage() {
            let msg = this.$refs['ownCanvas'].getImageData();
            this.$pnPublish({channel: 'demo', message: msg, meta: {uid: this.userProfile.uid}});
        }
    },
    computed: {
        ...mapState(['userProfile'])
    }
}
</script>

<style scoped>
/* section {
    background-color: lightblue;
} */
</style>