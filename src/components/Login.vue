<template>
    <div>
        <v-card>
            <v-toolbar color="primary" dark>
                <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
           
            <v-card-text>
                <v-form
                    autocomplete="off"
                    v-model="valid"
                    ref="loginForm"
                    lazy-validation
                    v-on:submit.prevent="onSubmit">
                
                        <v-text-field
                            name="email"
                            v-model="user.email"
                            label="Email"
                            prepend-icon="account_circle"
                            :rules="emailRules"
                            type="email"
                            validate-on-blur
                            required
                            ></v-text-field>
                        <v-text-field
                            name="password"
                            label="Password"
                            v-model="user.password"
                            :rules="[v => !!v || 'Password is required']"
                            prepend-icon="lock"
                            :append-icon="ep ? 'visibility' : 'visibility_off'"
                            @click:append = "ep = !ep"
                            @keyup.enter="submit"
                            :type="ep ? 'password' : 'text'"
                            
                            required
                        ></v-text-field>
                        <div v-if="error" style="color:red;">
                            <v-icon color="red">error_outline</v-icon> <span > user or password error</span>
                        </div>
                    
                </v-form>
         </v-card-text>
         <v-card-actions>
             <v-spacer></v-spacer>
             <v-btn text  @click="close">cancel</v-btn>
             <v-btn text :disabled="!valid" @click="submit">login</v-btn>
         </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import api from '@/api'
    import { mapActions } from 'vuex'

    export default {
        props: {
            close: Function
        },
        data: () => ({
            ep: true,
            valid:true,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ], 
            user: {
                email: '',
                passsword: ''
            },
            error: false
        }),
        methods: {
            ...mapActions({
                setUser: 'login'
            }),
            submit() {
                this.error = false
                if (this.$refs.loginForm.validate()) {
                    api.signin(this.user)
                        .then(result =>{
                            this.setUser(result.data)
                            
                            console.log(result.data)
                            this.close()
                            })
                        .catch( error =>{
                            this.error = true
                            console.log('error', error.response)
                            })
                }
            }
        }
    }
</script>

<style>

</style>
