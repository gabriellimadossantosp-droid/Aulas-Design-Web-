const {createApp, ref, watch} = Vue
//o método watch foi adicionado para ser usado com localstorage

const lancheifrn = createApp({
    setup(){

        const lancheifrnLS = localStorage.getItem("lanches");
        //criou uma variável que representa a tabela do banco de dados do navegador da nossa aplicação

        // a variável teve que ficar dentro do setup porque ela precisava mudar os valores
        //isto é, ser dinâmica, não apenas acessar seus dados, mas também alterar os dados.
        const lanches = ref(
            lancheifrnLS ? JSON.parse(lancheifrnLS):
            // ? é a mesma coisa que um if
            [
            //lista de objetos
            {
                descricao: 'Bolo',
                ativo: true,
                imagem: 'bolo.jpg'
            },
            {
                descricao: 'Bolacha',
                ativo: false,
                imagem: 'bolacha.jpg'
            },
            {
                descricao: 'Tapioca',
                ativo: false,
                imagem: 'tapioca.jpg'
            }
        ])


        watch(lanches, () => {
            localStorage.setItem('lanches', JSON.stringify(lanches.value))
        }, {deep: true, immediate: true})

        //função watch - observa a lista: qualquer alteração é feita também no banco de dados que fica no localstrorage
        // stringfy - esse método precisa ser usado porque o localstorage só recebe string e ele converte objeto para string
        //deff: true - profundo... ele observa até os valores das propriedades do objeto
        // se houver alteração no valor, por exemplo do 'ativo', este é atualizado no localstorage
        // immediate: true - coloca os valores, os objetos, na tabela do localstudio imediatamente ao abrir a aplicação

        function mudarAtivo(item){
            lanches.value.forEach(lanche => {
                lanche.ativo = false
            }) //vou colocar false em todos
            item.ativo = !item.ativo
        }

        const novoLancheInput = ref('')
        function novoLanche(){
            console.log('Entrou na função!'+ novoLancheInput.value)
        }

        return{
            mensagem: ref("Olá, Mundo!!"), //é o getElementById            
            lanches,
            mudarAtivo,
            novoLancheInput,
            novoLanche
        }
    }
})

const frutaifrn = createApp({
    setup(){

        const frutaifrnLS = localStorage.getItem("frutas");
        //criou uma variável que representa a tabela do banco de dados do navegador da nossa aplicação

        // a variável teve que ficar dentro do setup porque ela precisava mudar os valores
        //isto é, ser dinâmica, não apenas acessar seus dados, mas também alterar os dados.
        const frutas = ref(
            frutaifrnLS ? JSON.parse(frutaifrnLS):
            // ? é a mesma coisa que um if
            [
            //lista de objetos
            {
                descricao: 'Banana',
                ativo: true,
                imagem: 'banana.jpg'
            },
            {
                descricao: 'Melancia',
                ativo: false,
                imagem: 'melancia.jpg'
            },
            {
                descricao: 'Tangerina',
                ativo: false,
                imagem: 'tangerina.jpg'
            }
        ])


        watch(frutas, () => {
            localStorage.setItem('frutas', JSON.stringify(frutas.value))
        }, {deep: true, immediate: true})

        //função watch - observa a lista: qualquer alteração é feita também no banco de dados que fica no localstrorage
        // stringfy - esse método precisa ser usado porque o localstorage só recebe string e ele converte objeto para string
        //deff: true - profundo... ele observa até os valores das propriedades do objeto
        // se houver alteração no valor, por exemplo do 'ativo', este é atualizado no localstorage
        // immediate: true - coloca os valores, os objetos, na tabela do localstudio imediatamente ao abrir a aplicação

        function mudarAtivo(item){
            frutas.value.forEach(fruta => {
                fruta.ativo = false
            }) //vou colocar false em todos
            item.ativo = !item.ativo
        }

        const novaFrutaInput = ref('')
        function novaFruta(){
            console.log('Entrou na função!'+ novaFrutaInput.value)
        }

        return{
            mensagem: ref("Olá, Mundo!!"), //é o getElementById            
            frutas,
            mudarAtivo,
            novaFrutaInput,
            novaFruta
        }
    }
})
lancheifrn.component('app-header', AppHeader); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.component('app-footer', AppFooter); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.mount('#app');


/*
Para definir o localstorage (banco de dados dentro do navegador):

passo 1: colocar o watch na criação do Vue
passo 2: definir a variável de tabela do banco de dados - o nome da tabela criada "lanche"
passo 3: condicional para criação da tabela
passo 4: observar (watch - assistir)
    atualiza a lista na tabela do local storage assim que a mesma é alterada. ou seja, mudou a propriedade "ativo", então observa e altera também lá na tabela
    adicionou um novo objeto, altera na tabela do local storage
*/ 
 
/*
- criar uma lista para frutas
- adicionar frutad no adm
- excluir lanches - usar a função pop()
- excluir frutas
*/ 