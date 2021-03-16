<template>
    <main class="columns" style="padding-top: 10vh;">
        <div class="column is-one-fifth" style="padding-top: 15vh;">
            <BoxButton text="Grupos"/>
            <br><br>
            <BoxButton text="Amigos"/>
        </div>
        <div class="column has-text-centered">
            <Canvas width="800" height="500" />
        </div>
        <div class="column is-one-fifth">
            <BoxButton text="Charlie"/>
        </div>
    </main>
</template>

<script>
import Canvas from '../components/Canvas';
import BoxButton from '../components/BoxButton';

export default {
    name: 'Home',
    components: {
        Canvas,
        BoxButton
    }
}
</script>