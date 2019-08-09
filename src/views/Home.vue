<template>
    <div>        
        <div v-if="user">
            <v-tabs-items style="background-color:transparent" v-model="tab">
                <v-tab-item value="todo">
                    <todo/>
                </v-tab-item>
                <v-tab-item value="airbnb">
                    <airbnb/>
                </v-tab-item>
            </v-tabs-items>
        </div>
        <div  v-else style="text-align: center;padding-top: 60px;">
            <h1 class="font-weight-light">Register a new user or login with:</h1>
            <h3 class="font-weight-light">demo@mail.com</h3>
            <h3 class="font-weight-light">pass: demo</h3>
        </div> 
        
   </div>
  
</template>

<script>
    import todo from '@/components/Todo'
    import airbnb from '@/components/Airbnb'
    import { mapState } from 'vuex'
    export default {
        props: {
            tab: String
        },
        components: {
            todo,
            airbnb
        },      
        computed: {
            ...mapState({
                user: 'user'
            })
        },
    };
</script>
