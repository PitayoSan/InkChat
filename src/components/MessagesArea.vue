<template>
    <section class="flex-container direction-col" style="height: 100%;">
        <!-- <section class="box has-text-left is-marginless">Talking with: Charlie</section> -->
        <section  id="messagesWindow" class="flex-expand-simple flex-grow-scroll" style="overflow-y:scroll;">
            <ChatBubble v-for="(m, i) of msgs" :key="i" :data="m" :isGroup="true"/>
        </section>
    </section>
</template>

<script>
import ChatBubble from './ChatBubble';

export default {
    name: 'MessagesArea',
    components: {
        ChatBubble
    },
    props: {
        chatSettings: Object
    },
    data() {
        return {
            msgs: this.$pnGetMessage(this.chatSettings.channel, this.received)
        }
    },
    methods: {
        received(msg) {
            console.log("received msg: ", msg)
        }
    },
    mounted() {
        this.$pnSubscribe({channels: [this.chatSettings.channel],  withPresence: true });
    }
}
</script>

<style scoped>
#messagesWindow {
    background-color: #ede7e4;
}
</style>