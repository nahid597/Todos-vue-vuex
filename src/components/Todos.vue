<template>
    <div>
        <h1>All Todos</h1>
            <div class="row">
                <div class="col-6 col-sm-6 col-md-3 col-lg-3 todos" v-for="(todo) in alltodos" :key="todo.id">
                    <div class="text-light">{{todo.title}}</div>
                    <button class="btn btn-sm btn-danger delete-todo" @click="onClickeDetele($event, todo.id)"> Delete</button>
                </div>
            </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "Todos",
        computed: {
            ...mapGetters(['alltodos'])
        },
        methods: {
            ...mapActions([
                'fetechTodos',
                'deleteTodo'
            ]),


            onClickeDetele(e, id) {
                e.preventDefault();
                this.deleteTodo(id);
            }
        },
        created() {
            this.fetechTodos();
        }
    }
</script>

<style scoped>
    .todos {
        height: 100px;
        background-color: cadetblue;
        text-align: center;
        margin: 5px;
        position: relative;
    }

    .delete-todo {
        position: absolute;
        bottom: 2px;
        right: 5px;
    }
</style>