<template>
    <main class="columns is-justify-content-center" style="padding-top: 4%;">
        <section class="column is-12-mobile is-5-tablet is-5-desktop is-3-fullhd border">
            <div class="has-text-centered">
                <h1 class="title">Register</h1>
            </div>
            <br><br><br>
            <form action="">
                <b-field label="Email">
                    <b-input v-model="email" type="text"></b-input>
                </b-field>
                <p class="errors" v-for="(error, i) in errors.email" :key="'email_'+i">{{error}}</p>
                <b-field label="Username">
                    <b-input v-model="username" type="text"></b-input>
                </b-field>
                <p class="errors" v-for="(error, i) in errors.username" :key="'username_'+i">{{error}}</p>
                <br><br>
                <b-field label="Password">
                    <b-input v-model="password" type="password"></b-input>
                </b-field>
                <b-field label="Confirm Password">
                    <b-input v-model="cPassword" type="password"></b-input>
                </b-field>
                <p class="errors" v-for="(error, i) in errors.password" :key="'password_'+i">{{error}}</p>
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
                <p class="errors" v-for="(error, i) in errors.pp" :key="'pp_'+i">{{error}}</p>
                <br><br>
                <b-button expanded @click="registerUser">Create Account</b-button>
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
            profilePic: null,
            errors: this.initErrors()
        }
    },
    methods: {
        async validateForm() {
            this.errors = this.initErrors();

            if(!this.email) {
                this.errors.email.push('Please enter an email address.');
            }

            if(!this.username) {
                this.errors.username.push('Please enter a valid username.')
            }

            if(!this.password) {
                this.errors.password.push('Please enter a password');
            } else {
                if(this.password.length < 6) {
                    this.errors.password.push('Password must be at least 6 characters.');
                }

                if(this.password !== this.cPassword) {
                    this.errors.password.push('Passwords do not match')
                }
            }

            if(this.pp instanceof File) {
                if(!this.pp.type.startsWith('image')) {
                    this.errors.pp.push('File type must be image')
                } else {
                    let b64 = await this.getBase64Image(this.pp);
                    this.profilePic = b64;
                }
            }

            if(this.hasErrors())
                throw {type: 'formErrors'}
            
            return true;
        },
        registerUser() {
            

            this.validateForm()
            .then(() => usersApi.createUser(this.username, this.email, this.password, this.profilePic))
            .then(() => {
                this.$buefy.dialog.alert("User created successfully!");
                this.$router.push('/');
            })
            .catch(error => {
                if(error.data) {
                    this.$buefy.dialog.alert({
                        title: 'Error',
                        message: error.data,
                        type: 'is-danger',
                        hasIcon: true,
                        icon: 'times-circle',
                    })
                } else if(!(error.type && error.type == 'formErrors')){
                    this.$buefy.dialog.alert({
                        title: 'Error',
                        message: 'Something happened',
                        type: 'is-danger',
                        hasIcon: true,
                        icon: 'times-circle',
                    })
                }
            })
        },
        getBase64Image(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            }); 
        },
        initErrors() {
            return {
                username: [],
                email: [],
                password: [],
                pp: []
            }
        },
        hasErrors() {
            for(let errType of Object.keys(this.errors)) {
                if(this.errors[errType].length)
                    return true;
            }
            return false;
        },
        test() {
            console.log(this.hasErrors())            
            // console.log(Object.keys(this.errors))
        }
    }
}
</script>
<style scoped>
.errors {
    color: red;
    font-size: small;
}
</style>