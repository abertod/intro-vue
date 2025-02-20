//console.log(Vue);
const { createApp, ref} = Vue;

const app = createApp({
    //template: `
    //<h1>{{ nuntius }}.<br>Hola mundo</h1>
    //<h2>{{auctor}}</h2>
    //<h2>Desde app.js</h2>
    //`,

    setup() {

        const nuntius = ref("I'm Bataman");

        const auctor = ref('Batman');

        /*
        setTimeout(()=> {
            nuntius.value = 'Soy Goku.'
            auctor.value = 'Goku. kakaroto';
            console.log(nuntius);
        }, 1000);
        */

        const mutareSententia = () => {
            nuntius.value = 'Hola, soy Gokuu';
            auctor.value = 'Goku. Kakaroto';
        }

        return{
            nuntius, 
            auctor,
            mutareSententia,
        }
    }
});

app.mount('#myApp')