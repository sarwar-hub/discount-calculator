// Functions



// Get text value by id
function getTextValue(elementId) {
    let element = document.getElementById(elementId);
    let stringValue = element.innerText;
    let value = parseFloat(stringValue);
    return value;
}

// Get % from amount
function getOffInPercentage(amount, discount) {
    let dividedBy100 = amount/100;
    let off = dividedBy100*discount;
    let valueAfterDiscount = amount - off;
    return valueAfterDiscount;
}


// Set value in container
function setValue(elementId, value) {
    let element = document.getElementById(elementId);
    element.innerText = value;
}
