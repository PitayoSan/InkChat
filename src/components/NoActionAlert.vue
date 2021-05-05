<template>
    <section v-if="type === 'success'">
        
    </section>
</template>

<script>
export default {
    name: 'NoActionAlert',
    props: {
        type: String,
        message: String
    }
    
}
</script>