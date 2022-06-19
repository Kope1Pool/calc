let a = '';
let b = '';
let c = '';
let finish = false;

const digit = ['1','2','3','4','5','6','7','8','9','0', '.'];
const action = ['-','+','x','/','%'];

const out = document.querySelector('.calc-screen p');

function clearAll(){
    a = '';
    b = '';
    c = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;


document.querySelector('.buttons').onclick=(event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    
    

    out.textContent = '';
    const key = event.target.textContent;


    if(digit.includes(key)){
        if(b === '' && c===''){
        a+=key;
        
        out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish){
            b = key;
            finish = false;
            out.textContent = a;

        }
        else{
            b+=key;
            out.textContent = b;
        }
        console.log(a, b , c);
        return;
    }
    if(action.includes(key)){
        c = key;
        out.textContent = c;
        console.log(a,b,c);
        return;
    }

    if(key === '='){
        if(b==='') b = a;
                       
        switch (c){
            case "+":
                a = (+a) + (+b) ;
                a !== '';
                b = '';
                c = '';

                break;

        case "-":
            a = a - b;
            a !== '';
                b = '';
                c = '';
                break;

        case "x":
            a = a * b;
            a !== '';
                b = '';
                c = '';
                break;

        case "/":
            if (b === '0') {
            out.textContent = 'Ошибка';
            a = '';
            b = '';
            c = '';
            return;

            }
            a = a / b;
            a !== '';
                b = '';
                c = '';
                break;

        }
    
        finish = true;
        out.textContent = a;
        console.log(a,b,c);

       
    }
    
}
function pro(){
    if (c==='-'){
    a = a - (a/100*b);
    out.textContent = a;
   b = '';
   c = '';
    }

   if (c==='+'){
    a = (+a) + ((+a)/100*b);
    out.textContent = a;
   b = '';
   c = '';
   }
   

}
    



