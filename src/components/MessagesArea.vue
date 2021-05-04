<template>
    <section id="messagesWindow" class="flex-expand-simple flex-grow-scroll">
        <ChatBubble v-for="(m, i) of msgs" :key="i" :data="m"/>
    </section>
</template>

<script>
import ChatBubble from './ChatBubble';
import { mapState } from 'vuex';

export default {
    name: 'MessagesArea',
    components: {
        ChatBubble
    },
    data() {
        return {
            msgs: this.$pnGetMessage('demo', this.messageReceived)
        }
    },
    computed: {
        ...mapState(['pubNubUUID'])
    },
    methods: {
        messageReceived() {
            // let msgsWin = this.$el.querySelector("messagesWindow")
            // console.log("before scrolltop: ", msgsWin.scrollTop);
            // console.log("before height: ", msgsWin.scrollHeight)
            // console.log(typeof(msgsWin.scrollHeight))
            // msgsWin.scrollTop = msgsWin.scrollHeight;
            // console.log("after scrolltop: ", msgsWin.scrollTop);
            // console.log("after height: ", msgsWin.scrollHeight);
            // console.log("##############")
        }
    },
    mounted() {
        this.$pnSubscribe({channels: ['demo'],  withPresence: true });
    }
}
</script>

<style scoped>
section {
    background-color: #ede7e4;
}
</style>