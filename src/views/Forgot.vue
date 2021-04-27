<template>
    <main class="columns is-justify-content-center almost-v-centered">
        <section class="column is-12-mobile is-7-tablet is-6-desktop is-3-fullhd has-text-centered justify-content-center border">
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
.constraint {
    max-width: 375px;
}
</style>