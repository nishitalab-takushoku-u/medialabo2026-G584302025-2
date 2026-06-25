function greeting(){
    let i = document.querySelector('input[name="shimei"]');
    i.getAttribute('name');
    let aisatsu = 'こんにちは、'+i.value+'さん';
    p = document.querySelector('p#message');
    p.textContent = aisatsu;
    console.log('こんにちは');
}
b = document.querySelector('button#print');
b.addEventListener('click',greeting);