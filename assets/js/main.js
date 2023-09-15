let for_box = document.querySelector('.for_box')
let b_flex = document.querySelector('.b_flex')
let button1 = document.querySelector('.button1')
button1.addEventListener('mousedown',()=>{
    button1.style.background='pink';	
})
let button2 = document.querySelector('.button2')
button2.addEventListener('mouseup',()=>{
    button2.style.padding='15px 25px';
    button2.style.background='blue';
})
let button3 = document.querySelector('.button3')
button3.addEventListener('mouseover',()=>{
    button3.style.borderRadius='20px';
    button3.style.background='yellow';
})
let button4 = document.querySelector('.button4')
button4.addEventListener('mouseout',()=>{
    let box ='<div class="box">ПрИвЕтИкИ)))</div>';
    for_box.insertAdjacentHTML('beforeend',box);
})
let button5 = document.querySelector('.button5')
button5.addEventListener('mousemove',()=>{
    let box1 ='<div class="box1"></div>';
    b_flex.insertAdjacentHTML('beforeend',box1);	
})
let button6 = document.querySelector('.button6')
button6.addEventListener('dblclick',()=>{
    let box3 ='<div class="box3"></div>';
    for_box.insertAdjacentHTML('beforeend',box3);
})
let button7 = document.querySelector('.button7')
button7.addEventListener('contextmenu',()=>{
			alert ('Приветики, как дела?')
})