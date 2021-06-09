<template>
    <section class="flex-container direction-col" style="height: 100%;">
        <!-- <section class="box has-text-left is-marginless">Talking with: Charlie</section> -->
        <!-- <p>{{chatSettings}}</p> -->
        <section  id="messagesWindow" class="flex-expand-simple flex-grow-scroll" style="overflow-y:scroll;">
            <ChatBubble v-for="(m, i) of msgs" :key="i" :data="m" :isGroup="chatSettings.isGroup"/>
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
        /*
            {
                name: '', 
                icon: '',
                isGroup: boolean,
                chatId: '',
                channel: ''
            }
        */
    },
    data() {
        return {
            msgs: this.$pnGetMessage(this.chatSettings.channel)
        }
    },
    created() {
        console.log("init: messages area!")
    },
    methods: {
        received(msg) {
            console.log("received msg: ", msg)
        }
    },
    mounted() {
        console.log("mounted again??")
        this.$pnSubscribe({channels: [this.chatSettings.channel],  withPresence: true });
    }
}
</script>

<style scoped>
#messagesWindow {
    background-color: #ede7e4;
}
</style>