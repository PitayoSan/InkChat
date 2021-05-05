<template>
    <main class="columns is-justify-content-center">
        <section class="column is-12-mobile is-5-tablet is-5-desktop is-3-fullhd border">
            <div class="has-text-centered">
                <h1 class="title">Register</h1>
            </div>
            <br><br><br>
            <form action="">
                <b-field label="Email">
                    <b-input v-model="email" type="email"></b-input>
                </b-field>
                <b-field label="Username">
                    <b-input v-model="username" type="text"></b-input>
                </b-field>
                <br><br>
                <b-field label="Password">
                    <b-input v-model="password" type="password"></b-input>
                </b-field>
                <b-field label="Confirm Password">
                    <b-input v-model="cPassword" type="password"></b-input>
                </b-field>
                <br><br>
                <b-field label="Profile Pic">
                    <b-field class="file">
                        <b-upload v-model="pp" expanded>
                            <a class="button is-primary is-fullwidth">
                            <b-icon icon="upload"></b-icon>
                            <span>{{ pp.name || "Click to upload"}}</span>
                            </a>
                        </b-upload>
                    </b-field>
                </b-field>
                <br><br>
                <b-button expanded @click="validateForm">Create Account</b-button>
            </form>
            
        </section>
    </main>
</template>

<script>
import usersApi from '../../axios/src/Users';

export default {
    name: 'Register',
    data() {
        return {
            username: null,
            email: null,
            password: null,
            cPassword: null,
            pp: {},
            profilePic: null
        }
    },
    methods: {
        async validateForm() {
            console.log(this.username, this.email, this.password, this.cPassword);
            let b64 = await this.getBase64Image(this.pp);
            this.profilePic = b64;
            this.registerUser();
        },
        registerUser() {
            usersApi.createUser(this.username, this.email, this.password, this.profilePic)
            .then(res=> {
                console.log(res);
            })
            .catch(err => {
                console.log("the error: ", err.message);
            });
        },
        getBase64Image(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            }); 
        }
    }
}
</script>
<style scoped>

</style>