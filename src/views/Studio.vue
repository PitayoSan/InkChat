<template>
    <main class="columns has-text-centered is-align-items-center" style="height: 100vh;">
        <section class="column">
            <Canvas ref="left" width="200" height="200" theName="left one"/>
            <br>
            <b-button @click="send('left', 'right')">Send</b-button>
        </section>
        <section class="column">
            <Canvas ref="right" width="200" height="200" theName="right one"/>
            <br>
            <b-button @click="send('right', 'left')">Send</b-button>
        </section>
    </main>
</template>

<script>
import Canvas from '../components/Canvas';

export default {
    name: 'Studio',
    components: {
        Canvas
    },
    methods: {
        send(sends) {
            let sender = this.$refs[sends];
            // let receiver = this.$refs[receives];
            sender.getImageData();
            // console.log(imageData);
            // receiver.putImageData(imageData);

        }
    }
}
</script>
