<template>
    <section class="flex-col" id="chat">
        <MessagesArea/>
        <CanvasArea />
    </section>
</template>

<script>
import CanvasArea from './CanvasArea';
import MessagesArea from './MessagesArea';

export default {
    name: 'Chat',
    components: {
        CanvasArea,
        MessagesArea
    }
}
</script>

<style>
.direction-col {
    flex-direction: column;
}

/* section {
    background-color: green;
} */

#chat {
    height: 100%;
}
</style>