<template>
    <main class="full-height-main">
        <section class="almost-v-centered has-text-centered tight">
            <h1 class="title">Forgot your password?</h1>
            <p>
                Don't worry! Just give us your email address
                associated with InkChat and we'll send you
                a recovery link. 
            </p>
            <br><br>
            <b-field>
                <b-input type="email"></b-input>
            </b-field>
            <br>
            <b-button>Recover Password</b-button>
        </section>
    </main>
</template>

<script>
export default {
    name: 'Forgot'
}
</script>

<style scoped>
.tight {
    max-width: 20vw;
}
</style>