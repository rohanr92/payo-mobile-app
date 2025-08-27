console.log('connected');

// log out button config


let logOut = document.getElementById('log-out');
logOut.addEventListener('click', function() {
    window.location.href = 'index.html';
})


// reset transfer style

function resetTransferStyles() {
    transferMoneyClick.style.backgroundColor = '';
    transferMoneyClick.style.border = '';
    transferMoneyClick.style.borderStyle = '';
    transferMoneyClick.style.borderColor = '';
    transferMoneyText.style.color = '';
    transferMoneyText.style.fontWeight = '';
}

// function  addd reset style


function resetStyles() {
    addMoneyClick.style.backgroundColor = '';
    addMoneyClick.style.border = '';
    addMoneyClick.style.borderStyle = '';
    addMoneyClick.style.borderColor = '';
    para.style.color = '';
    para.style.fontWeight = '';
    
}



// reset cashout style


function resetCashOutStyles() {
    cashOutMoneyClick.style.backgroundColor = '';
    cashOutMoneyClick.style.border = '';
    cashOutMoneyClick.style.borderStyle = '';
    cashOutMoneyClick.style.borderColor = '';
    cashOuText.style.color = '';
    cashOuText.style.fontWeight = '';
}


// get bonus reset

function resetBonusStyles() {
    bonusClick.style.backgroundColor = '';
    bonusClick.style.border = '';
    bonusClick.style.borderStyle = '';
    bonusClick.style.borderColor = '';
    cashOuText.style.color = '';
    cashOuText.style.fontWeight = '';
}








let bankAccount = 17435934340;
let bankAccountPass = 'IlovemymotheR92';






let addMoneyButton = document.getElementById('add-money-btn');
addMoneyButton.addEventListener('click', function(e) {
    e.preventDefault();

    let amountAdd = Number(document.getElementById('amount-add').value);
    let pinNumber1 = document.getElementById('pin-number').value;
    let mainAmount = document.getElementById('main-amount');
    let finalAmount = Number(mainAmount.innerText);
    let totalMoney = finalAmount + amountAdd;

    let alternativeSection = document.getElementById('transform').style.display = 'none';

    let addedMoney = document.getElementById('added-money').style.display = 'block';

if(pinNumber1 === bankAccountPass) {
    mainAmount.innerText = totalMoney;
    alternativeSection;

    addedMoney;

    setTimeout(function() {
        addedMoney;
    }, 12000);
    
} else{
    alert('Invalid credentials');
}

// console.log(mainAmount);

});

let para = document.querySelector('#add-money-text');
let addMoneyClick = document.getElementById('add-money-click');
addMoneyClick.addEventListener('click', function(){
    document.getElementById('cashout-transform').style.display = 'none';
     document.getElementById('transfer-transform').style.display = 'none';
    document.getElementById('transform').style.display = 'block';
    addMoneyClick.style.backgroundColor = 'rgba(8,116,242,0.05)';
    addMoneyClick.style.border = '1px';
    addMoneyClick.style.borderStyle = 'solid';
    addMoneyClick.style.borderColor = '#0874F2';
    para.style.color = '#0874F2';
    para.style.fontWeight = '600';
    resetCashOutStyles();
    resetTransferStyles();
    resetBonusStyles();
    document.getElementById('withdrawn-money').style.display = 'none';
    document.getElementById('coupon-added').style.display = 'none';
document.getElementById('withdrawns-money').style.display = 'none';
document.getElementById('added-money').style.display = 'none';
    
})

// cash out Form config by js

let cashOutButton = document.getElementById('cash-out-btn');
cashOutButton.addEventListener('click', function(e){
    let cashOutMoney = document.getElementById('amount-cash-out').value;
    let mainAmount = document.getElementById('main-amount');
    let finalAmount = Number(mainAmount.innerText);
    let pinNumber2 = document.getElementById('pin-number2').value;
    let finalTotalAmount = finalAmount - cashOutMoney;



    let alternativeSection = document.getElementById('cashout-transform').style.display = 'none';
    let withdrawnMoney = document.getElementById('withdrawn-money').style.display = 'block';

    if(pinNumber2 === bankAccountPass) {
        mainAmount.innerText = finalTotalAmount;
        alternativeSection;

        withdrawnMoney;
    } else{
    alert('Invalid credentials');
}
    
    
})





let cashOuText = document.querySelector('#cash-out-text');
let cashOutMoneyClick = document.getElementById('cashout-money-design');
cashOutMoneyClick.addEventListener('click', function(){
    document.getElementById('transform').style.display = 'none';
     document.getElementById('transfer-transform').style.display = 'none';
    document.getElementById('cashout-transform').style.display = 'block';
    cashOutMoneyClick.style.backgroundColor = 'rgba(8,116,242,0.05)';
    cashOutMoneyClick.style.border = '1px';
    cashOutMoneyClick.style.borderStyle = 'solid';
    cashOutMoneyClick.style.borderColor = '#0874F2';
    cashOuText.style.color = '#0874F2';
    cashOuText.style.fontWeight = '600';
    resetStyles();
    resetTransferStyles();
    resetBonusStyles();
    document.getElementById('withdrawn-money').style.display = 'none';
    document.getElementById('coupon-added').style.display = 'none';
document.getElementById('withdrawns-money').style.display = 'none';
document.getElementById('added-money').style.display = 'none';
    
})




// Transfer Money Config



let transferMoneyButton = document.getElementById('transfer-button');
transferMoneyButton.addEventListener('click', function(e){
    let cashOutMoney = document.getElementById('transfer-amount').value;
    let mainAmount = document.getElementById('main-amount');
    let finalAmount = Number(mainAmount.innerText);
    let pinNumber2 = document.getElementById('transfer-pin').value;
    let finalTotalAmount = finalAmount - cashOutMoney;



    let hideSection = document.getElementById('transfer-transform').style.display = 'none';
    let transformOpen = document.getElementById('withdrawns-money').style.display = 'block';

    if(pinNumber2 === bankAccountPass) {
        mainAmount.innerText = finalTotalAmount;
        transformOpen;

        hideSection;
    } else{
    alert('Invalid credentials');
}
    
    
})




let transferMoneyText = document.querySelector('#transfer-money-text');
let transferMoneyClick = document.getElementById('transfer-money');
transferMoneyClick.addEventListener('click', function(){
    document.getElementById('transform').style.display = 'none';
    document.getElementById('cashout-transform').style.display = 'none';
    document.getElementById('transfer-transform').style.display = 'block';
    transferMoneyClick.style.backgroundColor = 'rgba(8,116,242,0.05)';
    transferMoneyClick.style.border = '1px';
    transferMoneyClick.style.borderStyle = 'solid';
    transferMoneyClick.style.borderColor = '#0874F2';
    transferMoneyText.style.color = '#0874F2';
    transferMoneyText.style.fontWeight = '600';
    resetCashOutStyles();
    resetStyles();
    resetBonusStyles();
    document.getElementById('withdrawn-money').style.display = 'none';
    document.getElementById('coupon-added').style.display = 'none';
document.getElementById('withdrawns-money').style.display = 'none';
document.getElementById('added-money').style.display = 'none';
})




// Coupon Section Config By Js

let couponCode = ['HELLO200', 'HELLO1000'];

let couponButton = document.getElementById('cuopon-button');
couponButton.addEventListener('click', function(e) {
    e.preventDefault();

    let couponValue = document.getElementById('cupon-value').value;
    let mainAmount = document.getElementById('main-amount');
    let finalAmount = Number(mainAmount.innerText);
    let money200 = 200;
    let money1000 = 1000;
    let totalMoney200 = finalAmount + money200;
    let totalMoney1000 = finalAmount + money1000;
    
    let alternativeSection = document.getElementById('cupon-section').style.display = 'none';

    let couponAdded = document.getElementById('coupon-added').style.display = 'block';

    let moneyChangeCoupon = document.getElementById('money-change-coupon');

if(couponValue === couponCode[0]) {
    mainAmount.innerText= totalMoney200;
    alternativeSection;

    couponAdded;
    moneyChangeCoupon.innerText = money200;    
} else if(couponValue === couponCode[1]) {
    mainAmount.innerText= totalMoney1000;
    alternativeSection;

    couponAdded;
    moneyChangeCoupon.innerText = money1000;
} else {
    document.getElementById('cuopon-invalid').style.display = 'block';
    document.getElementById('coupon-added').style.display = 'none';
    document.getElementById('cupon-section').style.display = 'block';
}

});


// Style Apply On Cuopon

let couponText = document.querySelector('#transfer-money-text');
let bonusClick = document.getElementById('get-bonus');
bonusClick.addEventListener('click', function(){
    document.getElementById('transform').style.display = 'none';
    document.getElementById('cashout-transform').style.display = 'none';
    document.getElementById('transfer-transform').style.display = 'none';
    document.getElementById('cupon-section').style.display = 'block';bonusClick
    bonusClick.style.backgroundColor = 'rgba(8,116,242,0.05)';
    bonusClick.style.border = '1px';
    bonusClick.style.borderStyle = 'solid';
    bonusClick.style.borderColor = '#0874F2';
    // style.color = '#0874F2';
    // transferMoneyText.style.fontWeight = '600';
    resetCashOutStyles();
    resetStyles();
    resetTransferStyles();
    document.getElementById('withdrawn-money').style.display = 'none';
    document.getElementById('coupon-added').style.display = 'none';
document.getElementById('withdrawns-money').style.display = 'none';
document.getElementById('added-money').style.display = 'none';
})






