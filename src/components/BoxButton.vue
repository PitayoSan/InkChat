<template>
    <div class="box-button thin flex-container" 
        :class="{'box': border}">
        <div class="image is-64x64">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
        </div>
        <div class="v-align has-text-left flex-expand-simple text">
            <p>{{text}}</p>
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
.text {
    padding-left: 20px;
}
.thin {
    padding: 0.5rem;
}
</style>
<script>
export default {
    name: 'BoxButton',
    props: {
        text: String,
        border: Boolean
    }
}
</script>