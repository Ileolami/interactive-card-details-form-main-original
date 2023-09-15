//target the elements
const formValidation = document.querySelector('.form-validation');
const fontNumber = document.querySelector('#fnt-num');
const fontName = document.querySelector('#name');
const fontDate = document.querySelector('#date');
const backCvc = document.querySelector('#bk-cvc');
const cardName = document.querySelector('#card-name');
const cardNumber = document.querySelector('#card-number');
const cardMonth = document.querySelector('#mnth');
const cardYear = document.querySelector('#year');
const cardCvc = document.querySelector('#cvc');
const pop = document.querySelector('.popover');


// display the card details

// to display the card number with spaces
cardNumber.addEventListener('input', function (){
    fontNumber.textContent = this.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
});

//to display the card holder name
cardName.addEventListener('input', function (){
    fontName.textContent = this.value.toUpperCase();
});
//to display the date on the card
cardMonth.addEventListener('input', merge);
cardYear.addEventListener('input', merge);

function merge(){
    fontDate.textContent = cardMonth.value + '/' + cardYear.value;
}
//to display the cvc number
cardCvc.addEventListener('input', function (){
    backCvc.textContent = this.value;
});


//for validation
formValidation.addEventListener('submit', function (e) {
    e.preventDefault();
    if(cardNumber.value === '' || cardName.value === '' || cardMonth.value === '' || cardYear.value === '' || cardCvc.value === ''){
        alert('Please fill out the form');
    }
    else if(cardNumber.value.length !== 16){
        alert('Please enter a valid card number');
    }
    else{
        //to display the popover
        pop.style.display = 'grid';

        //to make the form invisible after the popover is displayed
        const container = document.querySelector('.container');
        container.style.opacity = '0';
    }
});


// Function to remove the popover
function removeAdd() {
    const pop = document.querySelector('.popover');
    pop.style.display = 'none';
}

//to reload the page when the popover is clicked
const btn = document.querySelector('.btn-one');
btn.addEventListener('click', function (){
    location.reload();
});

