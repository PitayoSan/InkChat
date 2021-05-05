<template>
    <div class="thin flex-container" 
        :class="{'app-border': border, 'box-button': !displayOnly}">
        <div class="image is-64x64 v-align" v-if="!textOnly">
            <img :class="{'is-rounded' : round}" :src="imgsrc" onerror="this.src='https://firebasestorage.googleapis.com/v0/b/inkchat-58958.appspot.com/o/icons%2Falt.png?alt=media&token=7e0feced-f0b9-45c4-92f4-8ec9df70168c'"/>
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
        displayOnly: Boolean,
        textOnly: Boolean
    }
}
</script>