<template>
    <div class="outer">
        <div style="height: 100%; width: 30%;">
            <div class="container">
                <img :src="defaultIcon"/>
            </div>
        </div >
        <div>
            {{fname}}
        </div>
        <div style="width: 64px; display:flex; justify-content: space-between;">
            <b-button @click="acceptFR" size="is-small" icon-left="user-check" type="is-success"></b-button>
            <b-button @click="declineFR" size="is-small" icon-left="user-times" type="is-danger"></b-button>
        </div>
    </div>
</template>

<script>
import friendsApi from '../../axios/src/Friends';

export default {
    name: 'FriendRequest',
    props: {
        uuid: String,
        fname: String,
        fuid: String,
        src: String,
    },
    computed: {
        defaultIcon () {
            if(this.src === '') return "https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Falt.png?alt=media&token=7e0feced-f0b9-45c4-92f4-8ec9df70168c";
            return this.src;
        }
    },
    methods: {
        acceptFR() {
            console.log(this.uuid)
            console.log(this.fuid)
            friendsApi.acceptFR(this.fuid, this.uuid).then(() => {
                this.$buefy.dialog.alert("Friend request successfully accepted!! UwU");
            })
            .catch(() => {
                this.$buefy.dialog.alert("Invalid user or friend request owo");
            });
        },
        declineFR() {
            friendsApi.deleteFriend(this.uuid, this.fuid).then(() => {
                this.$buefy.dialog.alert("Friend request successfully declined unu");
            })
            .catch(() => {
                this.$buefy.dialog.alert("Invalid user or friend request owo");
            });
        }
    }
}
</script>

<style scoped>

    .outer{
        border: 2px solid #dedede;
        width: 90%;
        height: 80px;
        border-radius: 2px;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
    }

    .container {
    position: relative;
    width: 100%; /* The size you want */
    }
    .container:after {
    content: "";
    display: block;
    padding-bottom: 100%; /* The padding depends on the width, not on the height, so with a padding-bottom of 100% you will get a square */
    }

    .container img {
    position: absolute; /* Take your picture out of the flow */
    border-radius: 50%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; /* Make the picture taking the size of it's parent */
    width: 100%; /* This if for the object-fit */
    height: 100%; /* This if for the object-fit */
    object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
    object-position: center;
    }

</style>