<template>
    <section class="flex-container direction-col" style="height: 100%;">
        <section  id="messagesWindow" class="flex-expand-simple flex-grow-scroll" style="overflow-y:scroll;">
            <!--<ChatBubbleBack v-for="(m, i) of this.group.msg" :key="`cb_${i}`" :data="m" :isGroup="chatSettings.isGroup"/>-->
            <ChatBubble v-for="(m, i) of msgs" :key="i" :data="m" :isGroup="chatSettings.isGroup"/>
        </section>
    </section>
</template>

<script>
import groups from '../../axios/src/Groups';
import ChatBubble from './ChatBubble';
//import ChatBubbleBack from './ChatBubbleBack';

export default {
    name: 'MessagesArea',
    components: {
        ChatBubble,
        //ChatBubbleBack
    },
    props: {
        chatSettings: Object
    },
    data() {
        return {
            msgs: this.$pnGetMessage(this.chatSettings.channel),
            group: null
        }
    },
    async created() {
        console.log("init: messages area!");
        this.group = await groups.getGroup(this.chatSettings.channel);

    },
    methods: {
        received(msg) {
            console.log("received msg: ", msg)
        },
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