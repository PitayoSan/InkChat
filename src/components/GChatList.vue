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
                <div class="v-align" style="color: lightgray;">
                    <b-icon pack="fas" icon="users" size="is-large"></b-icon>
                </div>
            </div>
        </div>
        <div v-else>
            <b class="p-1 flex-center"> There are no available woups unu</b>
        </div>
    </section>
</template>

<script>
import groups from '../../axios/src/Groups';
import { mapState } from 'vuex';
export default {
    name: 'ChatList',
    props: {
        groups: Object
    },
    data() {
        return {
            theGroups: null
        }
    },
    methods: {
        async setGroups() {
            this.theGroups = await groups.getGroups();
        },
        setChat(recipient) {
            this.$emit('selected', recipient);
        }
    },
    created() {
        this.setGroups();
    },
    computed: {
        ...mapState(['userProfile']),
        theList() {
            let groups = [];
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
            return groups;
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
