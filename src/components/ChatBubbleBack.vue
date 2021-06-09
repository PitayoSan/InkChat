<template>
    <section v-if="isOther" class="flex-container padding-std">
        <div class="image is-64x64 flex-container" v-if="isGroup">
            <img class="is-rounded" :src="data.pp" onerror="this.src='https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Falt.png?alt=media&token=7e0feced-f0b9-45c4-92f4-8ec9df70168c'"/>
        </div>
        <div class="padding-std bubble" style="background-color: lightblue; margin-left: 15px;">
            <img ref="bubbleImg" class="bubble" :src="data.data" style="max-width: 300px; max-height: 300px;"/>
        </div>
        <div style="margin-left: 8px;">
            <span>&nbsp;{{timeStamp}}</span>
        </div>
    </section>
    <section v-else class="flex-container chat-mine padding-std" style="justify-content: flex-end;">
        <div style="margin-right: 8px;">
            <span>{{timeStamp}}</span>
        </div>
        <div class="padding-std bubble" style="background-color: pink; margin-right: 15px;">
            <img ref="bubbleImg" class="bubble" :src="data.data" style="max-width: 300px; max-height: 300px;"/>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ChatBubble',
    props: {
        data: Object,
        isGroup: Boolean
    },
    created() {
        console.log("is group?", this.isGroup)
    },
    mounted() {
        this.$refs.bubbleImg.onload = function() {
            var msgsWin = document.getElementById("messagesWindow");
            msgsWin.scrollTop = 100000;
        }
    },
    computed: {
        ...mapState(['userProfile']),
        timeStamp() {
            return this.data.time;
        },
        isOther() {
            return this.data.uid !== this.userProfile.uid;
        }
    }
}
</script>

<style scoped>
.chat-icon {
    padding-right: 10px;
}
.chat-mine {
    justify-content: right;
}
.bubble {
    border-radius: 8px;
}
</style>

