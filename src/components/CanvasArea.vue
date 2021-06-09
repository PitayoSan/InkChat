<template>
    <section id="area" class="padding-std">
        <Canvas ref="ownCanvas" width="300" height="300" theName="myCanvas"/>
        <b-button @click="sendMessage" type="is-primary" expanded>Send</b-button>
    </section>
</template>

<script>
import Canvas from './Canvas';
import { mapState } from 'vuex';
import groupsApi from '../../axios/src/Groups';

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
            let msg = {}
            msg['msg'] = this.$refs['ownCanvas'].getImageData();
            this.$pnPublish({channel: this.chatSettings.channel, message: msg.msg, meta: {uid: this.userProfile.uid, pp: this.userProfile.pp}});
            msg['name'] = this.chatSettings.channel;
            msg['uid'] = this.userProfile.uid;
            msg['username'] = this.userProfile.username;
            let date = new Date();
            let minutes = date.getMinutes();
            if (minutes < 10) {
                msg['time'] = date.getHours() + ':0' + minutes;
            } else {
                msg['time'] = date.getHours() + ':' + minutes;
            }
            this.backupMessage(msg);
            this.$refs['ownCanvas'].clearCanvas()
        },
        backupMessage(msg) {
            groupsApi.sendMessage(msg.name, msg.msg, msg.uid, msg.username, msg.time)
            .catch(() => {
                console.log("Message could not be saved to database unu");
            });
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