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
import { auth } from '../firebase';

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
            other_msgs: this.$pnGetMessage(`ch_${auth.currentUser.uid}`, this.received),
            my_msgs: this.$pnGetMessage(`ch_${this.chatSettings.with.uid}`, this.received)
            // .filter(m => {
            //     return m.userMetadata.uid = this.chatSettings.with.uid;
            // })
            // msgs: this.$pnGetMessage(`ch_${this.chatSettings.with}`, this.received)
                // .filter(msg => msg.userMetadata.uid === auth.currentUser.uid)
        }
    },
    methods: {
        received(msg) {
            console.log("received msg: ", msg)
        },
        the_latest() {
            // let other = this.other_msgs.filter(m => m.userMetadata.uid === auth.currentUser.uid)
            // let my = this.my_msgs.filter(m => m.userMetadata.uid === this.chatSettings.with.uid)
            
        }
    },
    computed: {
        ...mapState(['pubNubUUID']),
        latest() {
            let combined = this.other_msgs.concat(this.my_msgs);
            console.log(combined)
            return combined.sort((a,b) => +a.timetoken - +b.timetoken);
        }
    },
    mounted() {
        console.log("with: ", this.chatSettings.with)
        // let channel = this.chatSettings.type === 'private' ? `ch_${auth.currentUser.uid}` : `ch_${this.chatSettings.with}`;
        // console.log("the channel will be: ", channel);
        // console.log("the other user will be: ", this.chatSettings.with)
        this.$pnSubscribe({channels: [`ch_${auth.currentUser.uid}`, `ch_${this.chatSettings.with.uid}`],  withPresence: true });
    }
}
</script>

<style scoped>
#messagesWindow {
    background-color: #ede7e4;
}
</style>