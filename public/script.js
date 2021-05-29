const back={template:'<h1>Back</h1>'}
const routes=[
    {path: '/reg'}
]
const router =new VueRouter({routes})

const app=new Vue({
    router
}).$mount('#app')

document.getElementById("myBTN").onclick = function() {
};

import {Search} from "./modules/search.js";
import {View} from "./modules/view.js";
import {Api} from "./modules/api.js";
import {Log} from "./modules/log.js";


const api = new Api();


const app = new Search(new View(api), api, new Log());