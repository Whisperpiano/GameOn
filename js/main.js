console.log('Holaaaaa')

const slider = document.querySelector('.slider')
const sliderControls = document.querySelectorAll('#controls a')

sliderControls.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        document.querySelector('.selected').classList.remove('selected')
        button.classList.add('selected')
        slider.style.transform = `translateX(-${index*100}%)`
    })
})