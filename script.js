const html = document.querySelector('html')
const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const displayTempo = document.querySelector('#timer')
const startStopBtn = document.querySelector('.app__card-primary-button')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

const duracaoFoco = 1500; 
const duracaoCurto = 300; 
const duracaoLongo = 900; 

// Comentado pois refatoramos utilizando a function alterarContexto() e não setando cada atributo.

// focoBtn.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'foco')
//     banner.setAttribute('src', './imagens/foco.png')
// })

// curtoBtn.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'descanso-curto')
//     banner.setAttribute('src', './imagens/descanso-curto.png')
// })

// longoBtn.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'descanso-longo')
//     banner.setAttribute('src', './imagens/descanso-longo.png')
// })

focoBtn.addEventListener('click', () => {
    alterarContexto('foco')
})
    
curtoBtn.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})
    
longoBtn.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade, <br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície. <br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break
        default:
            break;
    }
}


