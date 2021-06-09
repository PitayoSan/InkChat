<template>
    <section class="flex-container direction-col" style="height: 100%;">
        <!-- <section class="box has-text-left is-marginless">Talking with: Charlie</section> -->
        <section  id="messagesWindow" class="flex-expand-simple flex-grow-scroll" style="overflow-y:scroll;">
            <ChatBubble v-for="(m, i) of latest" :key="i" :data="m" :isGroup="true"/>
        </section>
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
    computed: {
        ...mapState(['userProfile']),
        // latest() {
        //     let combined = this.other_msgs.concat(this.my_msgs);
        //     console.log(combined)
        //     return combined.sort((a,b) => +a.timetoken - +b.timetoken);
        // }
    },
    created() {
        console.log("messages area says: ", this.userProfile)
    },
    mounted() {
        console.log("with: ", this.chatSettings.with)
        // let channel = this.chatSettings.type === 'private' ? `ch_${auth.currentUser.uid}` : `ch_${this.chatSettings.with}`;
        // console.log("the channel will be: ", channel);
        // console.log("the other user will be: ", this.chatSettings.with)
        this.$pnSubscribe({channels: [this.chatSettings.channel],  withPresence: true });
    }
}
</script>

<style scoped>
#messagesWindow {
    background-color: #ede7e4;
}
</style>