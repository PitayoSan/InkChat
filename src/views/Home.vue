<template>
    <main class="full-height flex-col">
        <Sidebar ref="sbar"/>
        <nav class="columns app-title">
            <div class="column is-one-fifth flex-container has-text-centered is-align-items-center no-bot" id="upper-left-col">
                <h1 class="title" style="color: #ff4d8e; width: 100%;">InkChat</h1>
            </div>
            <div class="column flex-container is-align-items-end flex-container is-align-items-end no-bot" id="upper-mid-col" >
                <!-- <section class="box has-text-left is-marginless" style="width: 100%;"> -->
                    <!-- <IconName :userData="{
                        imgsrc:'https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/users%2Ftest%2Fprofile.jpg?alt=media&token=014349b0-9f06-4e8b-8677-8f3660945e60',
                        username: 'William'

                    }"/> -->
                    <BoxButton
                    text="Vitor" 
                    imgsrc="https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/users%2Ftest%2Fanother.png?alt=media&token=3e70d9aa-aedb-4648-9e2c-1afac8524f71" 
                    :border="true"
                    :round="true"
                    :displayOnly="true"
                    style="width:100%;"
                    />
                <!-- </section> -->
            </div>
            <div class="column is-one-fifth no-bot" id="upper-right-col">
                <BoxButton 
                @click.native="trigger" 
                text="Charli" 
                imgsrc="https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/users%2Ftest%2Fprofile.jpg?alt=media&token=014349b0-9f06-4e8b-8677-8f3660945e60" 
                :border="false"
                :round="true"
                style="width:100%;"
                />
            </div>
        </nav>
        <section class="columns flex-expand-simple">
            <div class="column is-one-fifth" id="bottom-left-col">
                <BoxButton text="Grupos" :border="true" :round="true"
                @click.native = "info"
                imgsrc="https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Fusers-solid.svg?alt=media&token=0b0313a3-5515-40b8-b5a5-99909086a20c"
                />
                <br>
                <BoxButton text="Amigos" :border="true" :round="false"
                @click.native = "toFriends"
                imgsrc="https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Fheart-solid.svg?alt=media&token=e7f54740-6e0b-4406-801f-b93e9ff4e79c"
                />
            </div>
            <div class="column" id="bottom-mid-col" style="padding-top: 0;">
                <MessagesArea />
            </div>
            <div class="column is-one-fifth flex-container is-align-items-end" id="bottom-right-col">
                <CanvasArea />
            </div>
        </section>
    </main>
    
</template>

<script>
import BoxButton from '../components/BoxButton';
import Sidebar from '../components/Sidebar';
import MessagesArea from '../components/MessagesArea';
import CanvasArea from '../components/CanvasArea';
// import IconName from '../components/IconName';

export default {
    name: 'Home',
    components: {
        BoxButton,
        Sidebar,
        MessagesArea,
        CanvasArea,
        // IconName
    },
    data() {
        return {
        }
    },
    methods: {
        trigger() {
            this.$refs.sbar.openTrue();
        },
        toFriends(){
            this.$router.push("/friends");
        },
        info() {
            fetch('http://127.0.0.1:5000').then(res => res.text()).then(data => {
                alert(data);
            })
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