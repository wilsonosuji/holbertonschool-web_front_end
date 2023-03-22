let stock = {
    macbook: 2,
    iphone: 4,
};

function processPayment(itemName) {
    stock[itemName] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
};

function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log(`Payment is not being processed`);
};

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    if (stock[itemName] <= 0) {
        callbackError(itemName);
    } else {
        callbackPayment(itemName);
    };
};

while (1) {
    let p = prompt("Please enter the item you would like to purchase (Macbook, iPhone)", "macbook/iphone");
    if (p != null) {
        processOrder(p, processPayment, processError);
    };
};