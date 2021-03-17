<template>
    <main>
        <Sidebar ref="sbar"/>
        <nav class="columns app-title">
            <div class="column is-one-fifth"></div>
            <div class="column has-text-centered v-align">
                <h1 class="title" style="color: #ff4d8e;">InkChat</h1>
            </div>
            <div class="column is-one-fifth">
                <BoxButton @click.native="trigger" text="Charli" imgsrc="misato.jpg" :border="false"/>
            </div>
        </nav>
        <section class="columns">
            <div class="column is-one-fifth">
                <BoxButton text="Grupos" :border="true"/>
                <br>
                <BoxButton text="Amigos" :border="true"/>
            </div>
            <div class="column has-text-centered">
                <Canvas width="800" height="500" />
            </div>
            <div class="column is-one-fifth"></div>
        </section>
    </main>
    
</template>

<script>
import Canvas from '../components/Canvas';
import BoxButton from '../components/BoxButton';
import Sidebar from '../components/Sidebar';

export default {
    name: 'Home',
    components: {
        Canvas,
        BoxButton,
        Sidebar
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        trigger() {
            this.$refs.sbar.openTrue();
        }
    }
}
</script>
<style scoped>
.app-title {
    padding-top: 2em;
    padding-bottom: 2em;
}
.head {
    display: inline-block;
}
.profile {
    max-width: 250px;
    background-color: tomato;
}
</style>