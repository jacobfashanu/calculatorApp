const theme1 = document.querySelector("input:nth-of-type(1)");
const theme2 = document.querySelector("input:nth-of-type(2)");
const theme3 = document.querySelector("input:nth-of-type(3)");

theme2.addEventListener("click" , () => {
    document.body.style.backgroundColor = 'var(--Light-gray-main-background)';
    document.querySelector("#buttons").style.backgroundColor = 'var(--Grayish-red-toggle-background-keypad-background)';
    document.querySelector("h2").style.backgroundColor = 'var(--Very-light-gray-screen-background)';

    const numsButtons = document.querySelectorAll("button");
    numsButtons.forEach((element) => {
        element.style.backgroundColor = 'var(--Light-grayish-yellow-key-background)';
        element.style.boxShadow = '0px 3px var(--Dark-grayish-orange-key-shadow)';
        element.style.color = 'var(--Very-dark-grayish-yellow)';
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = 'hsl(45, 7%, 100%)';
        });
        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = 'var(--Light-grayish-yellow-key-background)';
        });
    });

    document.querySelector("#delete").addEventListener("mouseout", () => {
        document.querySelector("#delete").style.backgroundColor = 'var(--Dark-moderate-cyan-key-background)';
    })

    document.querySelector("#delete").addEventListener("mouseover", () => {
        document.querySelector("#delete").style.backgroundColor = 'hsl(185, 42%, 48%)';
    })

    document.querySelector("#reset").addEventListener("mouseout", () => {
        document.querySelector("#reset").style.backgroundColor = 'var(--Dark-moderate-cyan-key-background)';
    })

    document.querySelector("#reset").addEventListener("mouseover", () => {
        document.querySelector("#reset").style.backgroundColor = 'hsl(185, 42%, 48%)';
    })



    document.querySelector("#equal").addEventListener("mouseout", () => {
        document.querySelector("#equal").style.backgroundColor = 'var(--Orange-key-background-toggle)';
    })

    document.querySelector("#equal").addEventListener("mouseover", () => {
        document.querySelector("#equal").style.backgroundColor = 'hsl(25, 98%, 51%)';
    })




    document.querySelector("#reset").style.color = 'var(--White-text)';
    document.querySelector("#delete").style.color = 'var(--White-text)';
    document.querySelector("#equal").style.color = 'var(--White-text)';


    document.querySelector("#reset").style.backgroundColor = 'var(--Dark-moderate-cyan-key-background)';
    document.querySelector("#delete").style.backgroundColor = 'var(--Dark-moderate-cyan-key-background)';
    
    document.querySelector("#reset").style.boxShadow = '0px 3px var(--Very-dark-cyan-key-shadow)';
    document.querySelector("#delete").style.boxShadow = '0px 3px var(--Very-dark-cyan-key-shadow)';

    document.querySelector("#equal").style.backgroundColor = 'var(--Orange-key-background-toggle)';
    document.querySelector("#equal").style.boxShadow = '0px 3px var(--Dark-orange-key-shadow)';

    document.querySelector(".tri-state-toggle").style.backgroundColor = 'var(--Grayish-red-toggle-background-keypad-background)'
    document.querySelector(".tri-state-toggle").style.border = '2px solid var(--Grayish-red-toggle-background-keypad-background)' 
    
    
    document.querySelector("h2").style.color = 'var(--Very-dark-grayish-yellow)';
    document.querySelector("#calc").style.color = 'var(--Very-dark-grayish-yellow)';
    document.querySelector("label").style.color = 'var(--Very-dark-grayish-yellow)';
    document.querySelector("ul").style.color = 'var(--Very-dark-grayish-yellow)';
    
});

theme1.addEventListener("click" , () => {
    document.body.style.backgroundColor = 'var(--Very-dark-desaturated-blue-main-background)';
    document.querySelector("#buttons").style.backgroundColor = 'var(--Very-dark-desaturated-blue-toggle-background-keypad-background)';
    document.querySelector("h2").style.backgroundColor = 'var(--Very-dark-desaturated-blue-toggle-background-keypad-background)';

    const numsButtons = document.querySelectorAll("button");
    numsButtons.forEach((element) => {
        element.style.backgroundColor = 'var(--Light-grayish-orange-key-background)';
        element.style.boxShadow = '0px 3px var(--Grayish-orange-key-shadow)';
        element.style.color = 'var(--Very-dark-grayish-blue)';
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = 'hsl(30, 25%, 100%)';
        });
        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = 'var(--Light-grayish-orange-key-background)';
        });
    });

    
    
    document.querySelector("#delete").addEventListener("mouseout", () => {
        document.querySelector("#delete").style.backgroundColor = 'var(--Desaturated-dark-blue-key-background)';
    })

    document.querySelector("#delete").addEventListener("mouseover", () => {
        document.querySelector("#delete").style.backgroundColor = 'hsl(225, 21%, 60%)';
    })

    document.querySelector("#reset").addEventListener("mouseout", () => {
        document.querySelector("#reset").style.backgroundColor = 'var(--Desaturated-dark-blue-key-background)';
    })

    document.querySelector("#reset").addEventListener("mouseover", () => {
        document.querySelector("#reset").style.backgroundColor = 'hsl(225, 21%, 60%)';
    })



    document.querySelector("#equal").addEventListener("mouseout", () => {
        document.querySelector("#equal").style.backgroundColor = 'var(--Red-key-background-toggle)';
    })

    document.querySelector("#equal").addEventListener("mouseover", () => {
        document.querySelector("#equal").style.backgroundColor = 'hsl(6, 63%, 61%)';
    })




    document.querySelector("#reset").style.color = 'var(--White)';
    document.querySelector("#delete").style.color = 'var(--White)';
    document.querySelector("#equal").style.color = 'var(--White)';


    document.querySelector("#reset").style.backgroundColor = 'var(--Desaturated-dark-blue-key-background)';
    document.querySelector("#delete").style.backgroundColor = 'var(--Desaturated-dark-blue-key-background)';
    
    document.querySelector("#reset").style.boxShadow = '0px 3px var(--Desaturated-dark-blue-key-shadow)';
    document.querySelector("#delete").style.boxShadow = '0px 3px var(--Desaturated-dark-blue-key-shadow)';

    document.querySelector("#equal").style.backgroundColor = 'var(--Red-key-background-toggle)';
    document.querySelector("#equal").style.boxShadow = '0px 3px var(--Dark-red-key-shadow)';

    document.querySelector(".tri-state-toggle").style.backgroundColor = 'var(--Very-dark-desaturated-blue-toggle-background-keypad-background)'
    document.querySelector(".tri-state-toggle").style.border = '2px solid var(--Very-dark-desaturated-blue-toggle-background-keypad-background)' 
    
    
    document.querySelector("h2").style.color = 'var(--White)';
    document.querySelector("#calc").style.color = 'var(--White)';
    document.querySelector("label").style.color = 'var(--White)';
    document.querySelector("ul").style.color = 'var(--White)';
    
});

theme3.addEventListener("click" , () => {
    document.body.style.backgroundColor = 'var(--Very-dark-violet-main-background)';
    document.querySelector("#buttons").style.backgroundColor = 'var(--Very-dark-violet-toggle-background-keypad-background-screen-background)';
    document.querySelector("h2").style.backgroundColor = 'var(--Very-dark-violet-toggle-background-keypad-background-screen-background)';

    const numsButtons = document.querySelectorAll("button");
    numsButtons.forEach((element) => {
        element.style.backgroundColor = 'var(--Very-dark-violet-key-background)';
        element.style.boxShadow = '0px 3px var(--Dark-magenta-key-shadow)';
        element.style.color = 'var(--Light-yellow)';
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = 'hsl(268, 47%, 32%)';
        });
        element.addEventListener("mouseout", () => {
            element.style.backgroundColor = 'var(--Very-dark-violet-key-background)';
        });
    });


    document.querySelector("#delete").addEventListener("mouseout", () => {
        document.querySelector("#delete").style.backgroundColor = 'var(--Dark-violet-key-background)';
    })

    document.querySelector("#delete").addEventListener("mouseover", () => {
        document.querySelector("#delete").style.backgroundColor = 'hsl(281, 89%, 37%)';
    })

    document.querySelector("#reset").addEventListener("mouseout", () => {
        document.querySelector("#reset").style.backgroundColor = 'var(--Dark-violet-key-background)';
    })

    document.querySelector("#reset").addEventListener("mouseover", () => {
        document.querySelector("#reset").style.backgroundColor = 'hsl(281, 89%, 37%)';
    })



    document.querySelector("#equal").addEventListener("mouseout", () => {
        document.querySelector("#equal").style.backgroundColor = 'var(--Pure-cyan-key-background-toggle)';
    })

    document.querySelector("#equal").addEventListener("mouseover", () => {
        document.querySelector("#equal").style.backgroundColor = 'hsl(176, 100%, 55%)';
    })




    document.querySelector("#reset").style.color = 'var(--White)';
    document.querySelector("#delete").style.color = 'var(--White)';
    document.querySelector("#equal").style.color = 'var(--Very-dark-blue)';


    document.querySelector("#reset").style.backgroundColor = 'var(--Dark-violet-key-background)';
    document.querySelector("#delete").style.backgroundColor = 'var(--Dark-violet-key-background)';
    
    document.querySelector("#reset").style.boxShadow = '0px 3px var(--Vivid-magenta-key-shadow)';
    document.querySelector("#delete").style.boxShadow = '0px 3px var(--Vivid-magenta-key-shadow)';

    document.querySelector("#equal").style.backgroundColor = 'var(--Pure-cyan-key-background-toggle)';
    document.querySelector("#equal").style.boxShadow = '0px 3px var(--Soft-cyan-key-shadow)';

    document.querySelector(".tri-state-toggle").style.backgroundColor = 'var(--Very-dark-violet-toggle-background-keypad-background-screen-background)'
    document.querySelector(".tri-state-toggle").style.border = '2px solid var(--Very-dark-violet-toggle-background-keypad-background-screen-backgroundd)' 
    
    
    document.querySelector("h2").style.color = 'var(--Light-yellow)';
    document.querySelector("#calc").style.color = 'var(--Light-yellow)';
    document.querySelector("label").style.color = 'var(--Light-yellow)';
    document.querySelector("ul").style.color = 'var(--Light-yellow)';
    
});



let lhs = {
    value: '',
    operator: '',
    decimalCount: 0,
    decimalhasBeenSet: false,
    valueHasBeenSet: false,
    reset: function () {
        this.value = '';
        this.operator = '';
        this.valueHasBeenSet = false;
        this.decimalCount = 0;
        this.decimalhasBeenSet = false;
    }
};

let rhs = {
    value: '',
    decimalCount: 0,
    equalCalculated: false,
    decimalhasBeenSet: false,
    valueHasBeenSet: false,
    reset: function () {
        this.value = '';
        this.valueHasBeenSet = false;
        this.equalCalculated = false;
        this.decimalCount = 0;
        this.decimalhasBeenSet = false;
    }
};

output = {
    value: '',
    element1: document.querySelector("h2"),
    reset: function () {
        this.value = '';
        this.element1.innerHTML = '0';
    },
};

let btn7 = {
    element1: document.querySelector("button:nth-of-type(1)"),
    value: 7,
};

let btn8 = {
    element1: document.querySelector("button:nth-of-type(2)"),
    value: 8,
};

let btn9 = {
    element1: document.querySelector("button:nth-of-type(3)"),
    value: 9,
};

let btndelete = {
    element1: document.querySelector("button:nth-of-type(4)"),
};

let btn4 = {
    element1: document.querySelector("button:nth-of-type(5)"),
    value: 4,
};

let btn5 = {
    element1: document.querySelector("button:nth-of-type(6)"),
    value: 5,
};

let btn6 = {
    element1: document.querySelector("button:nth-of-type(7)"),
    value: 6,
};

let btnplus = {
    element1: document.querySelector("button:nth-of-type(8)"),
};

let btn1 = {
    element1: document.querySelector("button:nth-of-type(9)"),
    value: 1,
};

let btn2 = {
    element1: document.querySelector("button:nth-of-type(10)"),
    value: 2,
};

let btn3 = {
    element1: document.querySelector("button:nth-of-type(11)"),
    value: 3,
};

let btnsub = {
    element1: document.querySelector("button:nth-of-type(12)"),
};

let btndot = {
    element1: document.querySelector("button:nth-of-type(13)"),
};

let btn0 = {
    element1: document.querySelector("button:nth-of-type(14)"),
    value: 0,
};

let btndiv = {
    element1: document.querySelector("button:nth-of-type(15)"),
};

let btnmult = {
    element1: document.querySelector("button:nth-of-type(16)"),
};

let btnreset = {
    element1: document.querySelector("button:nth-of-type(17)"),
};

let btnequal = {
    element1: document.querySelector("button:nth-of-type(18)"),
};



btnplus.element1.addEventListener("click", () => {
    if(lhs.value.length >= 10) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press delete, reset, or a new number.');
        return;
    }
    
    if(lhs.valueHasBeenSet && lhs.operator === '') {
        lhs.operator = '+';
        output.value += ' +';
        output.element1.innerHTML = output.value;
    }
    else if (rhs.valueHasBeenSet) {
        newoutput = calculate();
        lhs.operator = '+'
        output.value = (newoutput + ' +');
        output.element1.innerHTML = output.value;
        lhs.value = newoutput.toString();
        rhs.value = 0;
        rhs.valueHasBeenSet = false;
        rhs.equalCalculated = false;
    }
});

btnsub.element1.addEventListener("click", () => {

    if(lhs.value.length >= 10) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press delete, reset, or a new number.');
        return;
    }

    if(!lhs.valueHasBeenSet) {
        lhs.value = ('-' + lhs.value);
        output.value = ('-' + output.value);
        output.element1.innerHTML = output.value;
        return;
    }
    
    if(lhs.valueHasBeenSet && lhs.operator === '') {
        lhs.operator = '-';
        output.value += ' -';
        output.element1.innerHTML = output.value;
    }
    else if (rhs.valueHasBeenSet) {
        newoutput = calculate();
        lhs.operator = '-';
        output.value = (newoutput + ' -');
        output.element1.innerHTML = output.value;
        lhs.value = newoutput.toString();
        rhs.value = 0;
        rhs.valueHasBeenSet = false;
        rhs.equalCalculated = false;
    }
});

btnmult.element1.addEventListener("click", () => {

    if(lhs.value.length >= 10) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press delete, reset, or a new number.');
        return;
    }
    
    if(lhs.valueHasBeenSet && lhs.operator === '') {
        lhs.operator = '*';
        output.value += ' *';
        output.element1.innerHTML = output.value;
    }
    else if (rhs.valueHasBeenSet) {
        newoutput = calculate();
        lhs.operator = '*';
        output.value = (newoutput + ' *');
        output.element1.innerHTML = output.value;
        lhs.value = newoutput.toString();
        rhs.value = 0;
        rhs.valueHasBeenSet = false;
        rhs.equalCalculated = false;
    }
});

btndiv.element1.addEventListener("click", () => {
    if(lhs.value.length >= 10) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press delete, reset, or a new number.');
        return;
    }
    
    if(lhs.valueHasBeenSet && lhs.operator === '') {
        lhs.operator = '/';
        output.value += ' /';
        output.element1.innerHTML = output.value;
    }
    else if (rhs.valueHasBeenSet) {
        newoutput = calculate();
        lhs.operator = '/';
        output.value = (newoutput + ' /');
        output.element1.innerHTML = output.value;
        lhs.value = newoutput.toString();
        rhs.value = 0;
        rhs.valueHasBeenSet = false;
        rhs.equalCalculated = false;
    }
});

btn1.element1.addEventListener("click", () => {

    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }

    if((lhs.operator === '' && lhs.value.length >= 9) || output.value.length >= 13 || (lhs.valueHasBeenSet && lhs.value.length >= 9)) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press RESET or DEL.');
        return;
    }

    if(lhs.operator === '' && lhs.decimalCount >= 2) {
        return;
    }

    if(rhs.decimalCount >= 2) {
        return;
    }
    
    if(lhs.operator === '') {
        lhs.value += '1';
        lhs.valueHasBeenSet = true;
        output.value += '1';
        output.element1.innerHTML = output.value;
        if (lhs.decimalhasBeenSet) {
            lhs.decimalCount += 1;
        }
    }

    else if (rhs.valueHasBeenSet) {
        rhs.value += '1';
        output.value += '1';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }


    else {
        rhs.value += '1';
        rhs.valueHasBeenSet = true;
        output.value += ' 1';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }
});

btn2.element1.addEventListener("click", () => {
    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }

    if((lhs.operator === '' && lhs.value.length >= 9) || output.value.length >= 13 || (lhs.valueHasBeenSet && lhs.value.length >= 9)) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press RESET or DEL.');
        return;
    }

    if(lhs.operator === '' && lhs.decimalCount >= 2) {
        return;
    }

    if(rhs.decimalCount >= 2) {
        return;
    }

    if(lhs.operator === '') {
        lhs.value += '2';
        lhs.valueHasBeenSet = true;
        output.value += '2';
        output.element1.innerHTML = output.value;
        if (lhs.decimalhasBeenSet) {
            lhs.decimalCount += 1;
        }
    }

    else if (rhs.valueHasBeenSet) {
        rhs.value += '2';
        output.value += '2';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }

    else {
        rhs.value += '2';
        rhs.valueHasBeenSet = true;
        output.value += ' 2';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }
});

btn3.element1.addEventListener("click", () => {
    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }

    if((lhs.operator === '' && lhs.value.length >= 9) || output.value.length >= 13 || (lhs.valueHasBeenSet && lhs.value.length >= 9)) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press RESET or DEL.');
        return;
    }

    if(lhs.operator === '' && lhs.decimalCount >= 2) {
        return;
    }

    if(rhs.decimalCount >= 2) {
        return;
    }

    if(lhs.operator === '') {
        lhs.value += '3';
        lhs.valueHasBeenSet = true;
        output.value += '3';
        output.element1.innerHTML = output.value;
        if (lhs.decimalhasBeenSet) {
            lhs.decimalCount += 1;
        }
    }

    else if (rhs.valueHasBeenSet) {
        rhs.value += '3';
        output.value += '3';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }

    else {
        rhs.value += '3';
        rhs.valueHasBeenSet = true;
        output.value += ' 3';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }
});

btn4.element1.addEventListener("click", () => {
    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }

    if((lhs.operator === '' && lhs.value.length >= 9) || output.value.length >= 13 || (lhs.valueHasBeenSet && lhs.value.length >= 9)) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press RESET or DEL.');
        return;
    }

    if(lhs.operator === '' && lhs.decimalCount >= 2) {
        return;
    }

    if(rhs.decimalCount >= 2) {
        return;
    }

    if(lhs.operator === '') {
        lhs.value += '4';
        lhs.valueHasBeenSet = true;
        output.value += '4';
        output.element1.innerHTML = output.value;
        if (lhs.decimalhasBeenSet) {
            lhs.decimalCount += 1;
        }
    }

    else if (rhs.valueHasBeenSet) {
        rhs.value += '4';
        output.value += '4';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }

    else {
        rhs.value += '4';
        rhs.valueHasBeenSet = true;
        output.value += ' 4';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }
});

btn5.element1.addEventListener("click", () => {
    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }

    if((lhs.operator === '' && lhs.value.length >= 9) || output.value.length >= 13 || (lhs.valueHasBeenSet && lhs.value.length >= 9)) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press RESET or DEL.');
        return;
    }

    if(lhs.operator === '' && lhs.decimalCount >= 2) {
        return;
    }

    if(rhs.decimalCount >= 2) {
        return;
    }

    if(lhs.operator === '') {
        lhs.value += '5';
        lhs.valueHasBeenSet = true;
        output.value += '5';
        output.element1.innerHTML = output.value;
        if (lhs.decimalhasBeenSet) {
            lhs.decimalCount += 1;
        }
    }

    else if (rhs.valueHasBeenSet) {
        rhs.value += '5';
        output.value += '5';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }

    else {
        rhs.value += '5';
        rhs.valueHasBeenSet = true;
        output.value += ' 5';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }
});

btn6.element1.addEventListener("click", () => {
    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }

    if((lhs.operator === '' && lhs.value.length >= 9) || output.value.length >= 13 || (lhs.valueHasBeenSet && lhs.value.length >= 9)) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press RESET or DEL.');
        return;
    }

    if(lhs.operator === '' && lhs.decimalCount >= 2) {
        return;
    }

    if(rhs.decimalCount >= 2) {
        return;
    }

    if(lhs.operator === '') {
        lhs.value += '6';
        lhs.valueHasBeenSet = true;
        output.value += '6';
        output.element1.innerHTML = output.value;
        if (lhs.decimalhasBeenSet) {
            lhs.decimalCount += 1;
        }
    }

    else if (rhs.valueHasBeenSet) {
        rhs.value += '6';
        output.value += '6';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }

    else {
        rhs.value += '6';
        rhs.valueHasBeenSet = true;
        output.value += ' 6';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }
});

btn7.element1.addEventListener("click", () => {
    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }

    if((lhs.operator === '' && lhs.value.length >= 9) || output.value.length >= 13 || (lhs.valueHasBeenSet && lhs.value.length >= 9)) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press RESET or DEL.');
        return;
    }

    if(lhs.operator === '' && lhs.decimalCount >= 2) {
        return;
    }

    if(rhs.decimalCount >= 2) {
        return;
    }

    if(lhs.operator === '') {
        lhs.value += '7';
        lhs.valueHasBeenSet = true;
        output.value += '7';
        output.element1.innerHTML = output.value;
        if (lhs.decimalhasBeenSet) {
            lhs.decimalCount += 1;
        }
    }

    else if (rhs.valueHasBeenSet) {
        rhs.value += '7';
        output.value += '7';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }

    else {
        rhs.value += '7';
        rhs.valueHasBeenSet = true;
        output.value += ' 7';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }
});

btn8.element1.addEventListener("click", () => {
    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }

    if((lhs.operator === '' && lhs.value.length >= 9) || output.value.length >= 13 || (lhs.valueHasBeenSet && lhs.value.length >= 9)) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press RESET or DEL.');
        return;
    }

    if(lhs.operator === '' && lhs.decimalCount >= 2) {
        return;
    }

    if(rhs.decimalCount >= 2) {
        return;
    }
    
    if(lhs.operator === '') {
        lhs.value += '8';
        lhs.valueHasBeenSet = true;
        output.value += '8';
        output.element1.innerHTML = output.value;
        if (lhs.decimalhasBeenSet) {
            lhs.decimalCount += 1;
        }
    }

    else if (rhs.valueHasBeenSet) {
        rhs.value += '8';
        output.value += '8';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }

    else {
        rhs.value += '8';
        rhs.valueHasBeenSet = true;
        output.value += ' 8';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }
});
btn9.element1.addEventListener("click", () => {
    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }

    if((lhs.operator === '' && lhs.value.length >= 9) || output.value.length >= 13 || (lhs.valueHasBeenSet && lhs.value.length >= 9)) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press RESET or DEL.');
        return;
    }

    if(lhs.operator === '' && lhs.decimalCount >= 2) {
        return;
    }

    if(rhs.decimalCount >= 2) {
        return;
    }

    if(lhs.operator === '') {
        lhs.value += '9';
        lhs.valueHasBeenSet = true;
        output.value += '9';
        output.element1.innerHTML = output.value;
        if (lhs.decimalhasBeenSet) {
            lhs.decimalCount += 1;
        }
    }

    else if (rhs.valueHasBeenSet) {
        rhs.value += '9';
        output.value += '9';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }

    else {
        rhs.value += '9';
        rhs.valueHasBeenSet = true;
        output.value += ' 9';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }
});

btndot.element1.addEventListener("click", () => {
    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }
    if((lhs.operator === '' && lhs.value.length >= 9) || output.value.length >= 13 || (lhs.valueHasBeenSet && lhs.value.length >= 9)) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press reset.');
        return;
    }

    if (!lhs.decimalhasBeenSet && !lhs.valueHasBeenSet) {
        lhs.value += '0.';
        output.value += '0.';
        output.element1.innerHTML = output.value;
        lhs.decimalhasBeenSet = true;
        lhs.valueHasBeenSet = true; //if decimal arithmetic does not work try commenting this line out
    }

    else if(lhs.valueHasBeenSet && !lhs.decimalhasBeenSet && lhs.operator === '') {
        lhs.value += '.';
        output.value += '.';
        output.element1.innerHTML = output.value;
        lhs.decimalhasBeenSet = true;
    }

    else if (!rhs.decimalhasBeenSet && !rhs.valueHasBeenSet && lhs.operator !== '') {
        rhs.value += '0.';
        output.value += ' 0.';
        output.element1.innerHTML = output.value;
        rhs.decimalhasBeenSet = true;
        rhs.valueHasBeenSet = true;
    }
    else if (rhs.valueHasBeenSet) {
        rhs.value += '.';
        output.value += '.';
        output.element1.innerHTML = output.value;
        rhs.decimalhasBeenSet = true;
    }
    

});

btn0.element1.addEventListener("click" , () => {
    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }
    if((lhs.operator === '' && lhs.value.length >= 9) || output.value.length >= 13 || (lhs.valueHasBeenSet && lhs.value.length >= 9)) {
        alert('calculator cannot do arithmetic on two numbers with a combined total of more than 9 digits. Press RESET or DEL.');
        return;
    }

    if(lhs.operator === '' && lhs.decimalCount >= 2) {
        return;
    }

    if(rhs.decimalCount >= 2) {
        return;
    }

    if (lhs.valueHasBeenSet && lhs.operator === '') {
        lhs.value += '0';
        output.value += '0';
        output.element1.innerHTML = output.value;
        if (lhs.decimalhasBeenSet) {
            lhs.decimalCount += 1;
        }
    }
    else if (rhs.valueHasBeenSet) {
        rhs.value += '0';
        output.value += '0';
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }

    else if(lhs.valueHasBeenSet && lhs.operator !== '') {
        rhs.value += '0';
        output.value += ' 0';
        output.element1.innerHTML = output.value;
        rhs.valueHasBeenSet = true;
        if (rhs.decimalhasBeenSet) {
            rhs.decimalCount += 1;
        }
    }

    else if (!lhs.valueHasBeenSet) {
        lhs.value += '0';
        output.value += '0';
        output.element1.innerHTML = output.value;
        lhs.valueHasBeenSet = true;
        if (lhs.decimalhasBeenSet) {
            lhs.decimalCount += 1;
        }
    }
});



function chartoNum(char1) {
    let value = 0;
    if (char1 === '1') {
        value = 1;
    }
    else if (char1 === '2') {
        value = 2;
    }
    else if (char1 === '3') {
        value = 3;
    }
    else if (char1 === '4') {
        value = 4;
    }
    else if (char1 === '5') {
        value = 5;
    }
    else if (char1 === '6') {
        value = 6;
    }
    else if (char1 === '7') {
        value = 7;
    }
    else if (char1 === '8') {
        value = 8;
    }
    else if (char1 === '9') {
        value = 9;
    }
    return value;
}

function strToNum(str) {
    let value = 0;

    if (str.indexOf('.') === str.length - 1) {
        str += '00';
    }
    else if (str.indexOf('.') === str.length - 2) {
        str += '0';
    }

    for(let i = str.length - 4; i > -1 ; i--) {
        value += (chartoNum(str[i]) * Math.pow(10,(str.length - 4 - i)));
    }

    value = ((value * 100) + (10 * chartoNum(str[str.length - 2])) + (chartoNum(str[str.length - 1]))) / 100;

    if (str[0] === '-') {
        value *= -1;
    }
    return value;
}

function addDecimals(str) {
    const indexOfDec1 = str.indexOf('.');
    if(indexOfDec1 === -1) {
        return (str += '.00');
    }

    else if (str.length === (indexOfDec1 + 2)) {
        return (str += '0');
    }
    else {
        return str;
    }
}

function calculate() {
    let value = 0;

    let newlhs = strToNum(addDecimals(lhs.value));
    let newrhs = strToNum(addDecimals(rhs.value));
    if(lhs.operator === '+') {
        value = newlhs + newrhs;
        newvalue = value.toFixed(2);
        value = strToNum(newvalue);
    }
    if(lhs.operator === '-') {
        value = newlhs - newrhs;
        newvalue = value.toFixed(2);
        value = strToNum(newvalue);
    }
    if(lhs.operator === '*') {
        value = newlhs * newrhs;
        newvalue = value.toFixed(2);
        value = strToNum(newvalue);
    }
    if(lhs.operator === '/') {
        value = newlhs / newrhs;
        newvalue = value.toFixed(2);
        value = strToNum(newvalue);
    }
    return value;
    
}

btnequal.element1.addEventListener("click", () => {
    if(lhs.valueHasBeenSet && rhs.valueHasBeenSet) {
        newoutput = calculate();
        output.value = newoutput;
        output.element1.innerHTML = output.value;
        lhs.value = newoutput.toString();
        rhs.value = 0;
        rhs.valueHasBeenSet = false;
        lhs.operator = '';
        rhs.equalCalculated = true;
    }
    
});

function reseter() {
    lhs.reset();
    rhs.reset();
    output.reset();
}

btnreset.element1.addEventListener("click", reseter);

btndelete.element1.addEventListener("click", () => {
    if(!lhs.valueHasBeenSet && lhs.operator === '' && !rhs.valueHasBeenSet) {
        return;
    }
    if(rhs.equalCalculated && lhs.operator == '') {
        reseter();
    }
    else if (lhs.operator === '' && lhs.value.length === 1) {
        reseter();
    }
    else if(lhs.operator === '') {
        lhs.value = lhs.value.substring(0,lhs.value.length - 1);
        output.value = output.value.substring(0, output.value.length - 1);
        output.element1.innerHTML = output.value;
        if (lhs.decimalhasBeenSet && lhs.decimalCount === 0) {
            lhs.decimalhasBeenSet = false;
        }
        else if (lhs.decimalhasBeenSet && (lhs.decimalCount === 1 || lhs.decimalCount === 2)) {
            lhs.decimalCount -= 1;
        }
    }

    else if (rhs.valueHasBeenSet && rhs.value.length === 1) {
        rhs.reset();
        output.value = output.value.substring(0, output.value.length - 2);
        output.element1.innerHTML = output.value;
    }

    else if (rhs.valueHasBeenSet) {
        rhs.value = rhs.value.substring(0,rhs.value.length - 1);
        output.value = output.value.substring(0, output.value.length - 1);
        output.element1.innerHTML = output.value;
        if (rhs.decimalhasBeenSet && rhs.decimalCount === 0) {
            rhs.decimalhasBeenSet = false;
        }
        else if (rhs.decimalhasBeenSet && (rhs.decimalCount === 1 || rhs.decimalCount === 2)) {
            rhs.decimalCount -= 1;
        }
    }

    else if (lhs.operator !== '') {
        lhs.operator = '';
        output.value = output.value.substring(0, output.value.length - 2);
        output.element1.innerHTML = output.value;
    }

});

