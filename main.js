const app={
    data() {
        return {
            list:[
                {name:"Audi", img:"audi.jpg"},
                {name:"Mers", img:"mers.jpg"},
                {name:"Bmw", img:"bmw.jpg"},
            ]
        }
    },
}
Vue.createApp(app).mount('#app')