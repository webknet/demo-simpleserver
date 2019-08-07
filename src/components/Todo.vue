<template>
    <v-container grid-list-xs>
        <v-toolbar color="primary" dark>
            <v-toolbar-title>TODO</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon><v-icon>list</v-icon></v-btn>
            <v-btn icon><v-icon>apps</v-icon></v-btn>
        </v-toolbar>
        <div class="pa-3">
            <h2>{{ today.toDateString() }}</h2>
        </div>
        <v-card class="mt-3">
            <v-card-text>
                <v-text-field
                    v-model="task"
                    outlined
                    label="task"
                    autofocus
                    clearable
                    @keyup.enter="add"
                    append-outer-icon="send"
                    @click:append-outer="add"
                ></v-text-field>
            </v-card-text>            
        </v-card>
        <v-list class="mt-5">
            <v-toolbar  >
                <v-toolbar-title>Your Tasks</v-toolbar-title>
                <v-spacer></v-spacer>
                <span class="title grey--text">{{ tasks.length }} tasks</span>
               <div><span class="caption">&nbsp; {{ done }} completed</span></div>              
            </v-toolbar>
            <v-progress-linear :value="completed" ></v-progress-linear>
            <template v-for="(item, index) in tasks">
                <v-list-item :key="index">
                    <v-list-item-action>
                        <v-checkbox v-model="item.done" @change="update(item)" ></v-checkbox>                            
                    </v-list-item-action>
                    <v-list-item-content>                        
                        <v-list-item-title :class="{ done: item.done }" class="headline">{{item.description}}</v-list-item-title>
                        <v-list-item-subtitle class="font-weight-light">Added on: {{ new Date(item.date).toDateString() }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn icon v-if="item.done" @click="remove(item)" >
                            <v-icon color="red">clear</v-icon>
                        </v-btn>

                    </v-list-item-action>
                </v-list-item>
                <v-divider v-if="index + 1 < tasks.length" :key="index+item"></v-divider>
            </template>            
        </v-list>
        <v-snackbar
            v-model="snackbar"
            color="error"
            multi-line
            right
            >
            <v-layout row wrap>
                <v-flex xs12>
                    <span class="caption font-weight-light">Task removed.</span>
                </v-flex>
                <v-flex xs12>
                    {{ snackbarText }}
                </v-flex>
            </v-layout>           
            <v-btn text dark @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
    import api from '@/api'
    
    export default {
        data: () =>({
            task:'',
            tasks: [],            
            today: new Date(),
            check: true,
            snackbar: false,
            snackbarText: ''
        }),
        computed: {
            completed() {
                return (this.tasks.filter(task => task.done).length / this.tasks.length * 100)
            },
            done() { 
                return this.tasks.filter( task => task.done).length
            }
        },
        methods: {
            add() {
                const _task = {
                    collection: {
                        name: `todo ${ this.$store.state.user._id}`,
                        action: 'insert',
                        query: 'One'
                    },
                    value: {
                        description: this.task,
                        done: false,
                        date: new Date().getTime()
                    }
                }
                api.saveChanges(_task)
                    .then( res => {
                            this.tasks.push(res.data.ops[0])
                            this.task = ''
                            console.log(res)
                        })
                    .catch(error => console.log(error.response))
            },
            update(task) {
                const _task ={
                    collection: {
                        name: `todo ${ this.$store.state.user._id}`,
                        action: 'update',
                        query: 'ById'
                    },
                    value: {
                        filter: task._id,
                        update: { $set: { done: task.done }}
                    }
                }
                api.saveChanges(_task)
                    .then(res => console.log(res))               
                    .catch(error => console.log(error.response))
            },
            remove(task) {
                let _task = this.tasks.find( item => item._id == task._id)
                    
                api.saveChanges({
                    collection: {
                        name: `todo ${ this.$store.state.user._id}`,
                        action: 'delete',
                        query: 'ById'
                    },
                    value: task._id
                }).then( res => {
                    this.tasks.splice(this.tasks.indexOf(_task), 1)
                    
                    this.snackbarText = _task.description
                    this.snackbar = true
                    console.log(res)
                })
            }
        },
        created() {
            api.query({
                collection: {
                    name: `todo ${ this.$store.state.user._id}`,
                    action: 'query',
                    query: 'Many',
                    fields: ''
                }
            })
            .then( res => { 
                    this.tasks = res.data
                    console.log(res.data)
                })
            .catch( error => console.log(error.response))
        }

    }
</script>

<style>
    .done {
        text-decoration: line-through;
    }
</style>
