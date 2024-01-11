import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI';
import router from './pages/router';
import store from '@/store';


const app = createApp(App);

Object.keys(components).forEach(componentName => {
    app.component(componentName, components[componentName]);
});

app.use(router);
app.use(store)
app.mount('#app');


// new Vue({
//     render: h => h(App), //запускается render функция
// }).$mount('#app');

