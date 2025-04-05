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


focoBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})




