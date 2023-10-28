import App from './App'
import { createSSRApp } from 'vue'
// import PageHead from './components/page-head.vue' //全局引用 page-head 组件

export function createApp() {
    const app = createSSRApp(App)
    // app.component('page-head', PageHead) //全局注册 page-head 组件，每个页面将可以直接使用该组件

    return { 
        app
    }
}