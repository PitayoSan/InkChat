<template>
    <section v-if="isOther" class="flex-container padding-std">
        <div class="image is-64x64 flex-container" v-if="isGroup">
            <img class="is-rounded" :src="data.userMetadata.pp" onerror="this.src='https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Falt.png?alt=media&token=7e0feced-f0b9-45c4-92f4-8ec9df70168c'"/>
        </div>
        <div class="padding-std bubble" style="background-color: lightblue; margin-left: 15px;">
            <img ref="bubbleImg" class="bubble" :src="data.message" style="max-width: 300px; max-height: 300px;"/>
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
            <img ref="bubbleImg" class="bubble" :src="data.message" style="max-width: 300px; max-height: 300px;"/>
        </div>
        <!-- <div class="image is-64x64 flex-container">
            <img class="is-rounded" src="https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/users%2Ftest%2Fprofile.jpg?alt=media&token=014349b0-9f06-4e8b-8677-8f3660945e60"/>
        </div> -->
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
            let ms = this.data.timetoken/1e4;
            let date = new Date(ms);
            let hours = date.getHours();
            let minutes = "0" + date.getMinutes();
            let formatted = `${hours}:${minutes.substr(-2)}`
            return formatted;
        },
        isOther() {
            // console.log("my uid: ", this.userProfile.uid)
            // console.log("other uid: ", this.data.userMetadata.uid)
            return this.data.userMetadata.uid !== this.userProfile.uid;
        }
    }
}
</script>

<style scoped>
/* section {
    background-color: pink;
} */
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

