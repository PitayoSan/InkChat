<template>
    <section>
        <div v-if="theList.length > 0">
            <div @click="setChat(q)" class="box flex-container cont app-border thin" v-for="q in theList" :key="q.name" style="margin: 0;">
                <div class="image is-64x64 v-align">
                    <img class="is-rounded" :src="q.icon" onerror="this.src='https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Falt.png?alt=media&token=7e0feced-f0b9-45c4-92f4-8ec9df70168c'">
                </div>
                <div class="flex-expand-simple name v-align">
                    {{q.name}}
                </div>
            </div>
        </div>
        <div v-else>
            <b class="p-1 flex-center">You have no fwends unu</b>
        </div>
    </section>
</template>

<script>
import friends from '../../axios/src/Friends';
import { mapState } from 'vuex';
export default {
    name: 'ChatList',
    props: {
        friends: Object,
    },
    data() {
        return {
            myFriends: null
        }
    },
    methods: {
        async setFriends() {
            this.myFriends = await friends.getFriends(this.userProfile.uid).then(x => x.friends);
        },
        setChat(recipient) {
            this.$emit('selected', recipient);
        }
    },
    created() {
        this.setFriends();
    },
    computed: {
        ...mapState(['userProfile']),
        theList() {
            let theFriends = [];
            if(this.myFriends) {
                theFriends = Object.keys(this.myFriends)
                .filter(key => this.myFriends[key].is_friends)
                .map(key => (
                    {
                        name: this.myFriends[key].username, // e.g. Charlie
                        icon: this.myFriends[key].pp,
                        chatId: key, // uid in case of friend
                        channel: this.myFriends[key].channel // channel name for friendship
                    }
                ));
            }
            return theFriends;
        }
    }
}
</script>

<style scoped>
.cont:hover{
    background-color:#ede7e4;
    cursor: pointer;
}
.name{
    margin-left: 20px;
}
.thin {
    padding: 0.5rem;
}
</style>
