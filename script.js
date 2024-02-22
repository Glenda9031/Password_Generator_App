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












