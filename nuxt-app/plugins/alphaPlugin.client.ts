export default defineNuxtPlugin(nuxtApp => {
    //console.log(nuxtApp)
    return {
        provide: {
            sayHello: (msg:string) => {
                return console.log(`Hello ${msg}`)
            }
        }
    }
})