<template>
    <section style="height: 178px; overflow-x:hidden" class="flex-expand-simple flex-grow-scroll">
        <div v-if="theList.length > 0" style="height: 100%;">
            <div @click="setChat(q)" class="box flex-container cont app-border thin" v-for="q in theList" :key="q.name" style="margin: 0;display: flex;">
                <div class="round-img v-align">
                    <img class="is-rounded" :src="q.icon" onerror="this.src='https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Falt.png?alt=media&token=7e0feced-f0b9-45c4-92f4-8ec9df70168c'">
                </div>
                <div class="name v-align">
                    {{q.name}}
                </div>
                <div class="v-align" style="display: flex;align-items: flex-end;flex-grow: 1">
                    <b-icon @click.native="removeFriend(q.chatId)"  class="clickable" pack="fas" icon="trash" size="is-large"></b-icon>
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
        },
        removeFriend(frienduid) {
            friends.deleteFriend(this.userProfile.uid, frienduid)
            .then(() => {
                this.$buefy.dialog.alert({
                    message: "Fwend removed unu",
                    onConfirm: () => location.reload()
                });
            })
            .catch(() => {
                this.$buefy.dialog.alert("Fwend could not be removed owo");
            });
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

.round-img{
    height: 64px;
    width: 64px;
}

.round-img img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
}
</style>
