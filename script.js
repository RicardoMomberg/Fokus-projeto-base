const html = document.querySelector('html')
const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const displayTempo = document.querySelector('#timer')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startStopBtn = document.querySelector('#start-pause')
const musicaFocoInput = document.querySelector('#alternar-musica')
//Guardar os arquivos em variaveis é muito mais rápido para carregamento do projeto, como em musica. 
//Poderia ser utilizado no lugar de new Audio() o readFile(), porém atrasar o carregamento do projeto.
const musica = new Audio('./sons/luna-rise-part-one.mp3') 
const audioPlay = new Audio ('./sons/play.wav')
const audioPausa = new Audio ('./sons/pause.mp3')
const audioTempoFinalizado = new Audio ('./sons/beep.mp3')

musica.loop = true

let tempoDecorridoEmSegundos = 5
let intervaloId = null

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

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

focoBtn.addEventListener('click', () => {
    alterarContexto('foco')
    focoBtn.classList.add('active')
})
    
curtoBtn.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBtn.classList.add('active')
})
    
longoBtn.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBtn.classList.add('active')
})

function alterarContexto(contexto) {
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
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

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play()
        zerar()
        alert('Tempo finalizado!')
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('Temporizador: ' + tempoDecorridoEmSegundos)
    console.log('Id: ' + intervaloId)
}

startStopBtn.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId) {
        audioPausa.play();
        zerar()
        return
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}

