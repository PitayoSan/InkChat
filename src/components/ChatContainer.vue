<template>
    <main>
        <Canvas ref="aCanvas" width="500" height="500" :theName="theName"/>
        <img id="mess" src=""/>
        <b-field>
            <b-button @click="sendMessage">Send</b-button>
        </b-field>
    </main>
</template>

<script>
import { mapState } from 'vuex';
import Canvas from '../components/Canvas';

export default {
    name: 'ChatContainer',
    components: {
        Canvas
    },
    data() {
        return {
            ch1: this.$pnGetMessage('ch1', this.messageRecevied),// second parameter (callback) is optional
            theName: null
        }
    },
    methods: {
        messageRecevied(msg) {
            document.getElementById('mess').src = msg.message
        },
        sendMessage() {
            console.log('sending message...')
            let msg = this.$refs['aCanvas'].getImageData();
            console.log(msg);
            this.$pnPublish({channel: 'ch1', message: msg})
        }
    },
    created() {
        this.theName = Math.random().toString()
    },
    computed: {
        ...mapState(['pubNubUUID'])
    },
    mounted() {
        this.$pnSubscribe({channels: ['ch1'],  withPresence: true});
    }
}
</script>