console.log('connected');

let bankAccount = 17435934340;
let bankAccountPass = 'IlovemymotheR92';

let loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click', function (e) {
    e.preventDefault();

    let bankNumberCapture = Number(document.getElementById('bank-account').value);
    let pinNumber = document.getElementById('pin-number').value;

    if(bankAccount === bankAccount && bankAccountPass === pinNumber) {
        window.location.href = './dashboard.html';

    } else {
        alert('Wrong Account Number Or Pass. Try Again!')
    }
document.getElementById('bank-account').value = '';
document.getElementById('pin-number').value = '';
});


// Add money Configuration 



