<template>
    <div>
       <h4 v-bind:style="{display: 'inline-block'}"> Filter Todos: </h4> 
        <select @change="onChangeFilter($event)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="5">5</option>
            
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        name: "FilterTodos",
        methods: {
            ...mapActions(['filterTodos']),
            onChangeFilter(e) {
                e.preventDefault();
                let limit = parseInt(e.target.value);
                
                this.filterTodos(limit);
            }
        }
    }
</script>

<style scoped>

</style>