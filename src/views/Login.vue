<template>
    <main class="columns is-justify-content-center almost-v-centered">
        <section class="column is-12-mobile is-5-tablet is-5-desktop is-3-fullhd border">
            <div class="has-text-centered">
                <h1 class="title">InkChat</h1>
            </div>
            <br><br><br>
            <b-field label="Email">
                <b-input v-model="form.email" type="email"></b-input>
            </b-field>
            <b-field label="Password">
                <b-input v-model="form.password" type="password"></b-input>
            </b-field>
            <div class="has-text-centered">
                <router-link to="/forgot">Forgot password?</router-link>
            </div>
            <br><br><br>
            <b-button expanded @click="onSubmit">Login</b-button>
            <br><br>
            <div class="has-text-centered">
                <router-link to="/register">Create Account</router-link>
            </div>
        </section>
    </main>
</template>

<script>
import {auth} from '../firebase';
import router from '../router';

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

            //auth.setPersistence(sessionPersistence)
            auth.signInWithEmailAndPassword(this.form.email, this.form.password)
            .then(() => router.push('/home'))
            // .catch(err => {
            //     console.log("error pushing route D:")
            //     console.log(err);

            // })
		}
	}
}
</script>

