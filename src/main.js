import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NotFound from './NotFound.vue'
const app = createApp(App);

app.component('NotFound', NotFound);


app.use(router); 

app.mount('#app');
