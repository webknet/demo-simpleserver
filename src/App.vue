<template>
  <v-app>
    <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase">
            <span>MongoDB</span>
            <span class="font-weight-light">SIMPLE APP CONNECTION</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div v-if="!user">
            <v-btn
                text
                @click="loginDialog = !loginDialog"
            >
                <span class="mr-2">Login</span>
            </v-btn>
            <v-btn
                text
                @click="registerDialog = !registerDialog"
            >
                <span class="mr-2">Register</span>
            </v-btn>
        </div>
        <div v-else>
            Welcome: {{ user.name }}
            <v-btn
                text
               @click="logout"
            >
                <span class="mr-2">logout</span>
            </v-btn>
        </div>
        
    </v-app-bar>

    <v-content>
      <home/>
    </v-content>
    <v-dialog
        v-model="loginDialog"
        persistent 
        max-width="500px"
        transition="dialog-transition"
        >        
        <login :close="closeLoginDialog"/>              
    </v-dialog>
    <v-dialog
        v-model="registerDialog"
        persistent :overlay="false"
        max-width="500px"
        transition="dialog-transition"
        >
        <register :close="closeRegisterDialog" />
    </v-dialog>
  </v-app>
</template>

<script>
    import home from './views/Home';
    import login from '@/components/Login';
    import register from '@/components/Register';
    import { mapState } from 'vuex'

    export default {
        name: 'App',
        components: {
            home,
            login,
            register
        },
        data: () => ({
            loginDialog: false,
            registerDialog: false
        }),
        computed: {
            ...mapState({
                user: 'user'
            })
        },
        methods: {
            closeLoginDialog() {
                this.loginDialog = false
            },
            closeRegisterDialog() {
                this.registerDialog = false
            },
            logout() {
                this.$store.dispatch('login', null)
            }
        }
    };
</script>
