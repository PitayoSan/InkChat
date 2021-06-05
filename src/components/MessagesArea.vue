<template>
    <section class="flex-container direction-col" style="height: 100%;">
        <!-- <section class="box has-text-left is-marginless">Talking with: Charlie</section> -->
        <section id="messagesWindow" class="flex-expand-simple flex-grow-scroll" style="overflow-y:scroll;">
            <ChatBubble v-for="(m, i) of msgs" :key="i" :data="m" :isGroup="isGroup"/>
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
        isGroup: Boolean
    },
    data() {
        return {
            msgs: this.$pnGetMessage('demo')
        }
    },
    computed: {
        ...mapState(['pubNubUUID'])
    },
    mounted() {
        this.$pnSubscribe({channels: ['demo'],  withPresence: true });
    }
}
</script>

<style scoped>
#messagesWindow {
    background-color: #ede7e4;
}
</style>