<template>
    <div class="box-button box thin">
        <div class="columns">
            <div class="column">
                <div class="image is-64x64">
                    <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                </div>
            </div>
            <div class="column v-align">
                <p>{{text}}</p>
            </div>
        </div>             
    </div>
</template>
<style scoped>
.box-button {
    transition: 0.15s;
}

.box-button:hover {
    background-color:skyblue;
    cursor: pointer;
}

.box-button:active {
    background-color:steelblue;
}

.v-align {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.thin {
    padding: 0.5rem;
}
</style>
<script>
export default {
    name: 'BoxButton',
    props: {
        text: String
    }
}
</script>