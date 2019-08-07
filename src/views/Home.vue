<template>
    <div>
        <todo v-if="user"/>
   </div>
  
</template>

<script>
    import todo from '@/components/Todo'
    import { mapState } from 'vuex'
    export default {
        components: {
            todo,
            
        },
        computed: {
            ...mapState({
                user: 'user'
            })
        },
    };
</script>
