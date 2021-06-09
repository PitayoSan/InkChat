<template>
    <section>
        <div @click="setChat(q)" class="box flex-container cont app-border thin" v-for="q in theList" :key="q.name" style="margin: 0;">
            <div class="image is-64x64 v-align">
                <img class="is-rounded" :src="q.icon" onerror="this.src='https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Falt.png?alt=media&token=7e0feced-f0b9-45c4-92f4-8ec9df70168c'">
            </div>
            <div class="flex-expand-simple name v-align">
                {{q.name}}
            </div>
            <div v-if="q.isGroup" class="v-align" style="color: lightgray;">
                <b-icon pack="fas" icon="users" size="is-large"></b-icon>
            </div>
        </div>
    </section>
</template>

<script>
import friends from '../../axios/src/Friends';
import groups from '../../axios/src/Groups';
import { mapState } from 'vuex';
export default {
    name: 'ChatList',
    props: {
        friends: Object,
        groups: Object
    },
    data() {
        return {
            myFriends: null,
            theGroups: null,
            sample: [
                {
                    name: 'asddfasdf',
                    icon: ''
                },
                {
                    name: 'asddfasdf',
                    icon: ''
                },
                {
                    name: 'asddfasdf',
                    icon: ''
                },
                {
                    name: 'asddfasdf',
                    icon: ''
                }
            ]
        }
    },
    methods: {
        async setFriends() {
            this.myFriends = await friends.getFriends(this.userProfile.uid).then(x => x.friends);
            this.theGroups = await groups.getGroups();
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
            let groups = [];
            if(this.myFriends) {
                theFriends = Object.keys(this.myFriends).map(key => (
                    {
                        name: this.myFriends[key].username, // e.g. Charlie
                        icon: this.myFriends[key].pp,
                        chatId: key, // uid in case of friend
                        channel: this.myFriends[key].channel // channel name for friendship
                    }
                ));
            }
            if(this.theGroups) {
                groups = this.theGroups.map(grp => (
                    {
                        name: grp, // e.g. ThanosCar
                        icon: '',
                        isGroup: true,
                        chatId: grp, // same as name in case of group
                        channel: grp // name??
                    }
                ));
            }
            return theFriends.concat(groups)//.concat(this.sample);
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
