let callSection = document.getElementById('callSection')
let section = document.getElementById('section')

callSection.addEventListener('click', function(){
    section.classList.toggle('show')
    callSection.classList.toggle('show')
})

let clsForm = document.getElementById('clsForm')
let popupWin = document.getElementById('popupWin')
let callForm1 = document.getElementById('callForm1')
let callForm2 = document.getElementById('callForm2')
let callForm3 = document.getElementById('callForm3')
let callForm4 = document.getElementById('callForm4')
let callForm5 = document.getElementById('callForm5')
let callForm6 = document.getElementById('callForm6')
let callForm7 = document.getElementById('callForm7')

callForm1.addEventListener('click', function(){
    popupWin.classList.add('show')
})
callForm2.addEventListener('click', function(){
    popupWin.classList.add('show')
})
callForm3.addEventListener('click', function(){
    popupWin.classList.add('show')
})
callForm4.addEventListener('click', function(){
    popupWin.classList.add('show')
})
callForm5.addEventListener('click', function(){
    popupWin.classList.add('show')
})
callForm6.addEventListener('click', function(){
    popupWin.classList.add('show')
})
callForm7.addEventListener('click', function(){
    popupWin.classList.add('show')
})
clsForm.addEventListener('click', function(){
    popupWin.classList.remove('show')
})


// 

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var inputs = [document.querySelector("#tel"), document.querySelector("#tel1")]; // Массив инпутов
    inputs.forEach(function(input) {
        input.addEventListener("input", mask, false); // Добавляем обработчик события на input
        input.focus(); // Устанавливаем фокус
        setCursorPosition(3, input); // Устанавливаем курсор в начало
    });
});


// 


const reviewList = document.querySelector('.reviewList');
const reviewItems = document.querySelectorAll('.reviewItem');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentReviewIndex = 0;

function showReviewItems() {
    // Скрываем все элементы
    reviewItems.forEach((item) => {
        item.classList.remove('show');
    });

    // Показываем 4 отзыва, используя индекс
    for (let i = 0; i < 4; i++) {
        const index = (currentReviewIndex + i) % reviewItems.length;
        reviewItems[index].classList.add('show');
    }
}

showReviewItems();

prevButton.addEventListener('click', () => {
    currentReviewIndex -= 4;
    if (currentReviewIndex < 0) {
        currentReviewIndex = reviewItems.length + currentReviewIndex; // Для цикличности
    }
    showReviewItems();
});

nextButton.addEventListener('click', () => {
    currentReviewIndex += 4;
    if (currentReviewIndex >= reviewItems.length) {
        currentReviewIndex = currentReviewIndex - reviewItems.length; // Для цикличности
    }
    showReviewItems();
});


// 


let clsPolit = document.getElementById('clsPolit')
let politWin = document.getElementById('politWin')
let callPolit = document.getElementById('callPolit')
let callPolit1 = document.getElementById('callPolit1')
let callPolit2 = document.getElementById('callPolit2')

callPolit.addEventListener('click', function(){
    politWin.classList.add('show')
})
callPolit1.addEventListener('click', function(){
    politWin.classList.add('show')
})
callPolit2.addEventListener('click', function(){
    politWin.classList.add('show')
})
clsPolit.addEventListener('click', function(){
    politWin.classList.remove('show')
})
