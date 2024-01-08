// Discount



// Add Event to button
document.getElementById('coupon-button').addEventListener('click', function(){
    // get element value
    let price = getTextValue('price');
    
    // get discounted price
    let discountedPrice = getOffInPercentage(price, 30);

    // Update payment value
    setValue('payment', discountedPrice);
})



// Disable Enable condition
document.getElementById('coupon').addEventListener('keyup', function(event){
    // Get coupon input value
    let inputValue = event.target.value;

    // get button
    let button = document.getElementById('coupon-button');
    // enable condition
    if (inputValue == 'DISC30') {
        button.removeAttribute('disabled');
        button.classList.add('bg-red-700');
    } else {
        button.setAttribute('disabled', true);
        button.classList.remove('bg-red-700');
        
    }
})