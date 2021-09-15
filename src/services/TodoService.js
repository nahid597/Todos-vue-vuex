import axios from 'axios';

const fetechTodos = async(url) => {
    const response = await axios.get(url);
    return response;
};

const addNewTodo = async(url,payload) => {
    const response = await axios.post(url, payload);
    return response;

};

const deleteTodo = async(url) => {
    const response = await axios.delete(url);
    return response;

};

const filterTodos = async(url) => {
    const response = await axios.get(url);
    return response;
};

export {fetechTodos, addNewTodo, deleteTodo, filterTodos}