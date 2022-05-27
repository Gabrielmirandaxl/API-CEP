let inputCep = document.querySelector('.cep')
let buttonConsultar = document.querySelector('.consultar')

buttonConsultar.addEventListener('click', consultar)


function consultar(){

    fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`, {
        method: `GET`
    })
    .then(transformarEmjson)
    .then(exibirCep)
    .catch(erroJson)
}


function transformarEmjson(response){
    return response.json()
}

function exibirCep(json){
    console.log(json)
   
    if(json.erro =='true'){
        alert('Digite um cep válido')
        
    }else{
        let showCep = document.querySelector('.show-cep')
        let bairro = document.querySelector('.bairro')
        let ddd = document.querySelector('.ddd')
        let localidade = document.querySelector('.localidade')
        let logradouro = document.querySelector('.logradouro')

        showCep.style.display = 'flex'
        bairro.innerHTML = `Bairro: ${json.bairro}`
        ddd.innerHTML = `DDD: ${json.ddd}`
        localidade.innerHTML = `Localidade: ${json.localidade}`
        logradouro.innerHTML = `Logradouro: ${json.logradouro}`
    }
}

function erroJson(){
    alert('Digite o cep')
}