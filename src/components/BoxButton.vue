<template>
    <div class="box-button thin flex-container" 
        :class="{'box': border}">
        <div class="container">
            <img class="is-rounded" :src="require('../assets/images/' + this.imgsrc)"/>
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

.container {
    position: relative;
    margin-bottom: 1px;
    width: 1px; /* The size you want */
    }
    .container:after {
    content: "";
    display: block;
    padding-bottom: 100%; /* The padding depends on the width, not on the height, so with a padding-bottom of 100% you will get a square */
    }

    .container img {
    position: absolute; /* Take your picture out of the flow */
    border-radius: 50%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; /* Make the picture taking the size of it's parent */
    width: 100%; /* This if for the object-fit */
    height: 100%; /* This if for the object-fit */
    object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
    object-position: center;
    }
</style>
<script>
export default {
    name: 'BoxButton',
    props: {
        text: String,
        border: Boolean,
        imgsrc: String
    }
}
</script>