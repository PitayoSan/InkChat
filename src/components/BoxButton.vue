<template>
    <div class="thin flex-container" 
        :class="{'app-border': border, 'box-button': !displayOnly}">
        <div class="image is-64x64 v-align">
            <img :class="{'is-rounded' : round}" :src="imgsrc"/>
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
        border: Boolean,
        round: Boolean,
        imgsrc: String,
        displayOnly: Boolean
    }
}
</script>