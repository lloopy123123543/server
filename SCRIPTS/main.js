let stvorki = document.querySelector('.stvorki');
let sizeH = document.querySelector('.sizeH');
let sizeW = document.querySelector('.sizeW');
let conf = document.querySelector('.conf');
let colichestvo = document.querySelector('.colichestvo');
let button = document.querySelector('button');
let cost = document.querySelector('.cost')
let selector = document.querySelector('select')


button.onclick = function (){
    if(sizeH.value <600 || sizeW.value < 600){
        alert("Размеры окна не должны быть меньше 600 мм")

    }
    if(sizeW.value<599 && selector.value==2){
        alert("Ширина окна должна превосходить 600 мм, для выбора большего кол-ва створок")

    }
    if(sizeW.value<1199 && selector.value==3){
        alert("Ширина окна должна превосходить 1200 мм, для выбора большего кол-ва створок")

    }
    
    let height = sizeH.value/1000;
    let weight = sizeW.value/1000;
    let metr = (height * weight);
    let end = colichestvo.value*(1400*metr+1000+500*weight+500*(weight*2+height*2));
    cost.innerHTML = "Итого "+ end + " рублей";
    console.log( colichestvo.value*(1400*metr+1000+500*weight+500*(weight*2+height*2)))

}