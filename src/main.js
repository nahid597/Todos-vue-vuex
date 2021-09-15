import { createApp} from 'vue'
import App from './App.vue'
import Store from './store/index'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

createApp(App).use(Store).mount('#app')
