<template>
    <v-card>
        <v-toolbar color="primary" dark>
            <v-toolbar-title>Register</v-toolbar-title>            
        </v-toolbar>
        <v-card-text>
            <v-form
                autocomplete="off"
                v-model="valid"
                ref="form"
                lazy-validation
                v-on:submit.prevent="onSubmit">
                <v-text-field
                    name="Name"
                    v-model="user.name"
                    label="User name"
                    prepend-icon="account_circle"
                    :rules="[v => !!v || 'Name is required']"
                    type="text"
                    validate-on-blur
                    required
                    ></v-text-field>
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
                    <v-icon color="red">error_outline</v-icon> <span >{{ errorText }}</span>
                </div>
            </v-form>
        </v-card-text>
        <v-card-actions>
             <v-spacer></v-spacer>
             <v-btn text  @click="close">cancel</v-btn>
             <v-btn text :disabled="!valid" @click="submit">Save</v-btn>
         </v-card-actions>
    </v-card>
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
            valid: true,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ], 
            user: {
                name: '',
                email: '',
                passsword: ''
            },
            error: false,
            errorText: ''
        }),
        methods: {
            ...mapActions({
                setUser: 'login'
            }),
            submit() {
                this.error = false
                if (this.$refs.form.validate()) {
                    const _user = {
                        collection: {
                            action: 'insert'
                        },
                        value: { ...this.user }
                    }
                    api.register(_user)
                        .then( result =>{
                            this.setUser(result.data)
                            this.close()
                            console.log(result)})
                        .catch(error =>{ 
                            this.error = true
                            this.errorText = error.response.data
                            console.log(error.response)
                        })
                }
            }
        }
    }
</script>

<style>

</style>
