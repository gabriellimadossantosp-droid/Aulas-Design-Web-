const{createApp, ref} = Vue;
        //Criação do objeto vue e chamada dos métodos

        const lanches = ['Pão com queijo', 'Tapioca', 'Cuscuz com ovo', 'Bolo', 'Biscoito']

        const app = createApp({
            //crio uma nova aplicação de vue
            setup(){
                //onde se declara dados e funções
                return{
                    mensagem: ref("Olá, Mundo!"),
                    //variável reativa do vue (no lugar de usar getelementbyid)
                    lanches
                }
            }
        })
        app.component('app-header', AppHeader);
        app.mount("#app")
        //aqui a aplicação é incluida na marcação com id=app