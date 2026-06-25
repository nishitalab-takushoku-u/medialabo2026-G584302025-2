function calc(){
    let i = document.querySelector('input[name="left"]');
    i.getAttribute('name');
    let i2 = document.querySelector('input[name="right"]');
    i2.getAttribute('name');
    let s = Number(i.value);
    let s2 = Number(i2.value);
    let sum = s+s2;
    p = document.querySelector('span#answer');
    p.textContent = sum;
}
b = document.querySelector('button#calc');
b.addEventListener('click',calc);