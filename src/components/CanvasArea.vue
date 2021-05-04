<template>
    <section id="area" class="padding-std">
        <Canvas ref="ownCanvas" width="300" height="300" theName="myCanvas"/>
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
/* #area {
    background-color: lightblue;
} */
</style>