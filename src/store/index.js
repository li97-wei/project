import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let requireAllModule = {};
// wabpack api 用来从特定文件下 自动化导入，指定上下文
// 三个参数 文件路径、是否遍历子目录、正则匹配文件格式
// key() 返回数组['./**.js' ,'./**.js']
// id()
// resolve(requ) req为 key()返回的参数
const files = require.context('./modules', true, /\.js$/)
files.keys().forEach(key => {
    const module = files(key).default;
    if(module && module.name && module.namespaced) {
        requireAllModule[module.name] = module;
    }
})

export default new Vuex.Store({
    state: {
        
    },
    mutations: {
        
    },
    modules: requireAllModule,
    strict: process.env.NODE_ENV !== "production"
})
