

export function sliderFunctions(){
    mainSliderFunctions();
    reviewSliderFunctions();
}

function mainSliderFunctions(){
    const mainSlider = document.querySelector('.slider');
    const sliderControls = document.querySelectorAll('#controls a');
    let currentIndex = 0;
    let timer;

    // Function to start the timer
    function startTimer() {
        timer = setInterval(() => {
            currentIndex = (currentIndex + 1) % sliderControls.length;
            document.querySelector('.selected').classList.remove('selected');
            sliderControls[currentIndex].classList.add('selected');
            mainSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 5000);
    }

    // Function to reset the timer
    function resetTimer(index) {
        clearInterval(timer);
        currentIndex = index;
        startTimer();
    }

    // Add event listeners to the slider controls
    sliderControls.forEach((button, index) => {
        button.addEventListener('click', () => {
            resetTimer(index);
            document.querySelector('.selected').classList.remove('selected')
            button.classList.add('selected')
            mainSlider.style.transform = `translateX(-${index*100}%)`
        });
    });

    startTimer();
}

function reviewSliderFunctions(){
    const reviewSlider = document.querySelector('#reviews-slider');
    const reviewSliderControls = document.querySelectorAll('#reviews-controls a');
    reviewSliderControls.forEach((button,index)=>{
        button.addEventListener('click', ()=> {
            document.querySelector('.rev-selected').classList.remove('rev-selected')
            button.classList.add('rev-selected')
            reviewSlider.style.transform = `translateX(-${index*100}%)`
        })
    })
}