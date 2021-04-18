<template>
    <main class="full-height-main">
        <section class="almost-v-centered">
            <div class="has-text-centered">
                <h1 class="title">InkChat</h1>
            </div>
            <br><br><br>
            <b-field label="Email">
                <b-input type="email"></b-input>
            </b-field>
            <b-field label="Password">
                <b-input type="password"></b-input>
            </b-field>
            <div class="has-text-centered">
                <router-link to="/forgot">Forgot password?</router-link>
            </div>
            <br><br><br>
            <b-button expanded tag="router-link" to="/home">Login</b-button>
            <br><br>
            <div class="has-text-centered">
                <router-link to="/register">Create Account</router-link>
            </div>
            

        </section>
    </main>
</template>

<script>
export default {
    name: 'Login',
	data() {
		return {
			form: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		onSubmit(evt) {
			evt.preventDefault();
			this.$store.dispatch('login', {
				email: this.form.email,
				password: this.form.password
			});
		}
	}
}
</script>