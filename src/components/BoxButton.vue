<template>
    <div class="thin flex-container" 
        :class="{'app-border': border, 'box-button': !displayOnly}">
        <div class="round-img v-align" v-if="!textOnly">
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

.round-img{
    height: 64px;
    width: 64px;
}

.round-img img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.box-button:hover {
    background-color:#ede7e4;
    cursor: pointer;
}

.box-button:active {
    background-color:#faf5f2;
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