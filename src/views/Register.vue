<template>
    <main class="columns is-justify-content-center almost-v-centered">
        <section class="column is-12-mobile is-5-tablet is-5-desktop is-3-fullhd border">
            <div class="has-text-centered">
                <h1 class="title">Register</h1>
            </div>
            <br><br><br>
            <b-field label="Email">
                <b-input type="email"></b-input>
            </b-field>
            <b-field label="Username">
                <b-input type="text"></b-input>
            </b-field>
            <br><br>
            <b-field label="Password">
                <b-input type="password"></b-input>
            </b-field>
            <b-field label="Confirm Password">
                <b-input type="password"></b-input>
            </b-field>
            <br><br>
            <b-button expanded tag="router-link" to="/">Create Account</b-button>
        </section>
    </main>
</template>

<script>
export default {
    name: 'Register'
}
</script>