<template>
  <v-app>
    <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase">
            <span>MongoDB</span>
            <span class="font-weight-light hidden-sm-and-down">SIMPLE APP CONNECTION</span>
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
        <div class="hidden-md-and-down">
             <svg class="icon-github" fill="#000" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 62 60"><path d="M31 0a30.7 30.7 0 0 0-9.8 59.9c1.55.3 2.116-.6 2.116-1.4s-.026-2.7-.042-5.3c-8.622 1.9-10.44-4.1-10.44-4.1-1.414-3.5-3.448-4.5-3.448-4.5-2.815-1.9.213-1.9.213-1.9a6.74 6.74 0 0 1 4.746 3.2c2.766 4.7 7.254 3.3 9.023 2.6a6.3 6.3 0 0 1 1.966-4.1c-6.88-.8-14.12-3.5-14.12-15.2a11.964 11.964 0 0 1 3.193-8.3 10.9 10.9 0 0 1 .3-8.1s2.6-.9 8.525 3.1a30.617 30.617 0 0 1 15.522 0c5.92-4 8.517-3.1 8.517-3.1a10.886 10.886 0 0 1 .308 8.1 11.946 11.946 0 0 1 3.186 8.3c0 11.8-7.248 14.4-14.155 15.1a7.52 7.52 0 0 1 2.1 5.7c0 4.1-.04 7.5-.04 8.5 0 .8.56 1.7 2.13 1.4A30.708 30.708 0 0 0 31 0"></path></svg>            
            <a target="_blank" href="https://github.com/webknet/demo-simpleserver">
                <span> View on GitHub</span>
            </a>
        </div>
       
        <template v-slot:extension>
            <v-tabs v-if="$store.state.user" v-model="tab" centered background-color="primary" dark fixed-tabs>
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab href="#todo">
                    todo
                </v-tab>
                <v-tab href="#airbnb">
                    airbnb queries
                </v-tab>
            </v-tabs>
        </template>
        
    </v-app-bar>

    <v-content>
      <home :tab="tab"/>
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
            registerDialog: false,
            tab: null
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
<style>
    a {
        color: inherit;
        text-decoration: none;
    }
    icon-github {
        margin-left: -20px;
    }
</style>
