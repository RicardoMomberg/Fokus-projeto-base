const html = document.querySelector('html')
const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startStopBtn = document.querySelector('#start-pause')
const musicaFocoInput = document.querySelector('#alternar-musica')
const iniciarOuPausarBtn =  document.querySelector('#start-pause span')
const iniciarOuPausarBtnIcone = document.querySelector('.app__card-primary-butto-icon')
const tempoNaTela = document.querySelector('#timer')

//Guardar os arquivos em variaveis é muito mais rápido para carregamento do projeto, como em musica. 
//Poderia ser utilizado no lugar de new Audio() o readFile(), porém atrasar o carregamento do projeto.
const musica = new Audio('./sons/luna-rise-part-one.mp3') 
const audioPlay = new Audio ('./sons/play.wav')
const audioPausa = new Audio ('./sons/pause.mp3')
const audioTempoFinalizado = new Audio ('./sons/beep.mp3')

let tempoDecorridoEmSegundos = 1500 
let intervaloId = null

musica.loop = true

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
    tempoDecorridoEmSegundos = 1500 
    alterarContexto('foco')
    focoBtn.classList.add('active')
})
    
curtoBtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300 // 5min * 60segundos = 300s
    alterarContexto('descanso-curto')
    curtoBtn.classList.add('active')
})
    
longoBtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900 // 15min * 60segundos = 900s
    alterarContexto('descanso-longo')
    longoBtn.classList.add('active')
})

function alterarContexto(contexto) {
    mostrarTempo()
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
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
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
    iniciarOuPausarBtn.textContent = "Pausar"
    iniciarOuPausarBtnIcone.setAttribute('src', `./imagens/pause.png`)
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarBtn.textContent = "Começar"
    iniciarOuPausarBtnIcone.setAttribute('src', `./imagens/play_arrow.png`)
    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo() 
