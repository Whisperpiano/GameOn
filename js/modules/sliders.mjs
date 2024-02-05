const mainSlider = document.querySelector('.slider')
const reviewSlider = document.querySelector('#reviews-slider')

const sliderControls = document.querySelectorAll('#controls a')
const reviewSliderControls = document.querySelectorAll('#reviews-controls a')

sliderControls.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        document.querySelector('.selected').classList.remove('selected')
        button.classList.add('selected')
        mainSlider.style.transform = `translateX(-${index*100}%)`
    })
})

reviewSliderControls.forEach((button,index)=>{
    button.addEventListener('click', ()=> {
        document.querySelector('.rev-selected').classList.remove('rev-selected')
        button.classList.add('rev-selected')
        reviewSlider.style.transform = `translateX(-${index*100}%)`
    })
})