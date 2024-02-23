const passwordDisplay = document.querySelector('.password-display');
const passwordPlaceholder = document.querySelector('.password-placeholder');
const passwordCopyButton = document.querySelector('.copy-btn');
const passwordCopiedNotification = document.querySelector('.copied-text');
const passwordForm = document.querySelector('.password-settings');
const lengthSlider = document.querySelector('.char-length-slider');
const charCount = document.querySelector('.char-count');
const checkBoxes = document.querySelectorAll('.input[type=checkbox]');
const strengthDescription = document.querySelector('.strength-rating-text');
const strengthRatingBars = document.querySelectorAll('.bar');
const CHARACTER_SETS = {
    uppercase: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 26],
    lowercase: ['abcdefghijklmnopqrstuvwxyz', 26],
    numbers: ['1234567890', 10],
    symbols: ['!@#$%^&*()', 10]
}

let canCopy = false;

const getSliderVal = () => {
    charCount.textContent = lengthSlider.value;
}

const styleRangeSlider = () => {
    const min = lengthSlider.min;
    const max = lengthSlider.max;
    const val = lengthSlider.value;

    lengthSlider.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

const handleSliderInput = () => {
    getSliderVal();
    styleRangeSlider();
}

/* Strength Section */

const resetBarStyles = () => {
    strengthRatingBars.forEach(bar => {
        bar.style.backgroundColor = 'transparent';
        bar.style.borderColor = 'hsl(252, 11%, 91%)';
    });
}

const styleBars = ([...barElements], color) => {
    barElements.forEach(bar => {
        bar.style.backgroundColor = color;
        bar.style.borderColor = color;
     });
}

const styleMeter = (rating) => {
    const text = rating[0];
    const numBars = rating[1];
    const barsToFill = Array.from(strengthRatingBars).slice(0, numBars);

    resetBarStyles();

    strengthDescription.textContent = text;

    switch(numBars) {
        case 1:
          return styleBars(barsToFill, 'hsl(0, 91%, 63%)');
        case 2:
          return styleBars(barsToFill, 'hsl(13, 95%, 66%)');
        case 3:
          return styleBars(barsToFill, 'hsl(42, 91%, 68%)');
        case 4:
          return styleBars(barsToFill, 'hsl(127, 100%, 82%)');
        default:
          throw new Error('Invalid value for numBars');      
    }
}










