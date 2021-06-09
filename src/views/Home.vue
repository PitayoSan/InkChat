<template>
    <main class="full-height flex-col">
        <FriendSettings ref="friendModal" />
        <Sidebar ref="sbar"/>
        <nav class="columns app-title">
            <div class="column is-one-fifth flex-container has-text-centered is-align-items-center no-bot" id="upper-left-col">
                <h1 class="title" style="color: #ff4d8e; width: 100%;">inkchat</h1>
            </div>
            <div class="column flex-container is-align-items-end flex-container is-align-items-end no-bot" id="upper-mid-col" >
                <BoxButton
                :text="currentRecipient.name" 
                :imgsrc="currentRecipient.icon" 
                :border="true"
                :round="true"
                :displayOnly="true"
                style="width:100%;"
                v-if="currentRecipient"
                />
                <BoxButton
                text="Welcome to InkChat! Choose a friend or group to start chatting!"
                :border="true"
                :round="true"
                :displayOnly="true"
                style="width:100%;"
                :imgsrc="''"
                v-else
                />
            </div>
            <div class="column is-one-fifth no-bot" id="upper-right-col">
                <BoxButton 
                @click.native="trigger" 
                :text="userProfile.username" 
                :imgsrc="userProfile.pp" 
                :border="false"
                :round="true"
                style="width:100%;"
                />
            </div>
        </nav>
        <section class="columns flex-expand-simple">
            <div class="column is-one-fifth" id="bottom-left-col" style="padding-left: 25px; display:flex; flex-direction: column;">
                <div style="flex: 0 0 auto; min-width: 0;">
                    <div class="flex-container" style="padding-bottom: 10px;">
                        <div class="flex-expand-simple v-align">
                            <b>Friends</b>
                        </div>
                    </div>
                    <FChatList ref="fChatList" @selected="setChat"/>
                </div>
                <div style="flex: 0 5 auto; min-width:0;">
                    <div class="flex-container" style="padding-bottom: 10px;">
                        <div class="flex-expand-simple v-align">
                            <b>Groups</b>
                        </div>
                    </div>
                    <GChatList ref="gChatList" @selected="setChat"/>
                </div>
                <div class="flex-expand-simple"></div>
                <div>
                    <b-input v-model="newGroup" placeholder="Group name" size="is-small" required></b-input>
                    <b-button @click="createGroup" tag="a" expanded
                        size="is-large"
                        type="is-info is-light">
                        Create group
                    </b-button>
                </div>
            </div>
            <div class="column" id="bottom-mid-col" style="padding-top: 0;">
                <MessagesArea v-if="currentRecipient" :chatSettings="currentRecipient" :key="currentRecipient.chatId"/>
                <section v-else class="flex-container direction-col has-text-centered" style="height: 100%; background-color: #ede7e4; justify-content: center; align-items:center;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Fwatermark_gray.png?alt=media&token=7d286ecd-c041-44d6-b4a9-07f55975c5af"
                        style="width: 500px; height: auto;"
                    >
                </section>
                
            </div>
            <div class="column is-one-fifth flex-container is-align-items-end" id="bottom-right-col">
                <CanvasArea v-if="currentRecipient" :chatSettings="currentRecipient" :key="currentRecipient.chatId"/>
            </div>
        </section>
    </main>
    
</template>

<script>
import BoxButton from '../components/BoxButton';
import Sidebar from '../components/Sidebar';
import MessagesArea from '../components/MessagesArea';
import CanvasArea from '../components/CanvasArea';
import { mapState } from 'vuex';
import FChatList from '../components/FChatList';
import GChatList from '../components/GChatList';
import groups from '../../axios/src/Groups';
import FriendSettings from '../components/FriendSettings';

export default {
    name: 'Home',
    components: {
        BoxButton,
        Sidebar,
        MessagesArea,
        CanvasArea,
        FChatList,
        GChatList,
        FriendSettings
    },
    data() {
        return {
            currentRecipient: null,
            friendsModalOpen: false,
            newGroup: null
        }
    },
    computed: {
        ...mapState(['userProfile'])
    },
    methods: {
        trigger() {
            this.$refs.sbar.openTrue();
        },
        toFriends(){
            this.$router.push("/friends");
        },
        toGroups(){
            this.$router.push("/groups");
        },
        setChat(recipient) {
            console.log("recipient is: ", recipient)
            this.currentRecipient = recipient;
        },
        toggleModalFriends() {
            this.$refs.friendModal.toggleOpen()
        },
        createGroup() {
            groups.createGroup(this.newGroup)
            .then(() => {
                this.$buefy.dialog.alert({
                    message: "Woup successfully cweated uwu",
                    onConfirm: () => location.reload()
                });
            })
            .catch(() => {
                this.$buefy.dialog.alert("Woup could not be created owo");
            });
        }
    }
}
</script>
<style scoped>
.app-title {
    padding-top: 1em;
}
.head {
    display: inline-block;
}
.profile {
    max-width: 250px;
    background-color: tomato;
}
.no-bot {
    padding-bottom: 0;
}

/* #upper-left-col {
    background-color: blue;
}

#upper-mid-col {
    background-color:lightblue;
}

#upper-right-col {
    background-color: green;
} */

/* #bottom-left-col {
    background-color: red;
}

#bottom-mid-col {
    background-color:pink;
}

#bottom-right-col {
    background-color: yellow;
} */

</style>