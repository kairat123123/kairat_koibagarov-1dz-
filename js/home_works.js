// HW 1
//
const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


//регулярное выражение которое имеет правила ввода GMAIL
const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,15}@gmail.com$/

//ивент в котором при нажатии на кнопку высветится то что либо GMAIL правильно введен или нет
gmailButton.addEventListener( 'click',() => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Ваш GMAIL правильно введен'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Ваш GMAIL неправильно введен!!!'
        gmailResult.style.color = 'red'
    }
})

//ТУТ Я ПЫТАЛСЯ СДЕЛАТЬ ТАК ЧТОБЫ ЦВЕТ МЕНЯЛСЯ В ТЕКСТЕ ПРИ ПРАВИЛЬНОМ НАБОРЕ GMAIL ИЛИ НЕ ПРАВИЛЬНОМ НЕ ПОЛУЧИЛОСЬ С ТЕМ ТО ЧТО ПРИ ВВЕДЕНИИ 11111@gmail.com ИЛИ ggggg@gmail.com ИЛИ GGGGG@Ggmail.com 4-ТЕКСТ НЕ МЕНЯЛСЯ НА ЗЕЛЕНЫЙ ТАК ЖЕ МОГУТ БЫТЬ И ДРУГИЕ ОШИБКИ


// const smallLetter = /[a-z].{0,15}@gmail.com/
// const bigLetter = /[A-Z].{0,15}@gmail.com/
// const number = /\d.{0,15}@gmail.com/
// const lenght = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d){4,15}@gmail.com/



// gmailButton.addEventListener( 'click',() => {
//     if (bigLetter.test(gmailInput.value)) {
//
//         document.getElementById('1_password_requirement').style.color = 'green' ;
//
//     }
//     else {
//         document.getElementById('1_password_requirement').style.color = 'red' ;
//     }
// })

// gmailButton.addEventListener( 'click',() => {
//     if (smallLetter.test(gmailInput.value)) {
//
//         document.getElementById('2_password_requirement').style.color = 'green' ;
//
//     }
//     else {
//         document.getElementById('2_password_requirement').style.color = 'red' ;
//     }
// })
//
// gmailButton.addEventListener( 'click',() => {
//     if (number.test(gmailInput.value)) {
//
//         document.getElementById('3_password_requirement').style.color = 'green' ;
//
//     }
//     else {
//         document.getElementById('3_password_requirement').style.color = 'red' ;
//     }
// })
//
// gmailButton.addEventListener( 'click',() => {
//     if (lenght.test(gmailInput.value)) {
//
//         document.getElementById('4_password_requirement').style.color = 'green' ;
//
//     }
//     else {
//         document.getElementById('4_password_requirement').style.color = 'red' ;
//     }
// })



// 2 Задание
// Получаем родительский элемент и малый блок
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

// Получаем стартовую позицию малого блока
let position = 0;

// Функция для движения малого блока вправо
function moveRight() {
  // Увеличиваем позицию малого блока на 1 пиксель
  position += 1;

  // Изменяем позицию малого блока
  childBlock.style.left = position + 'px';

  // Проверяем, достиг ли малый блок правого края родительского блока
  if (position < parentBlock.offsetWidth - childBlock.offsetWidth) {
    // Если нет, вызываем функцию moveRight() через 10 миллисекунд
    setTimeout(moveRight, 10);
  }
}

// Вызываем функцию moveRight() для начала движения
moveRight();


