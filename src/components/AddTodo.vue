<template>
    <div>
       <form @submit="submit($event)">
            <div class="form-group">
                <label for="todos">Todos</label>
                <input type="text" class="form-control" id="todos" aria-describedby="todosHelp" placeholder="Enter Todos" v-model="title">
            </div>
          <button class="btn btn-success mt-2 mb-3"> Add</button>
      </form>
    </div>
</template>

<script>
import {mapActions } from 'vuex'

    export default {
        name: "AddTodo",
        data() {
            return {
                title: ''
            } 
        },

        methods: {
            ...mapActions(['addNewTodo']),

            submit(e) {
                e.preventDefault();
                this.addNewTodo(this.title);
            }
        }
    }
</script>

<style scoped>

</style>