/*

Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
Finally, check the amount against your bank account balance to see if you can afford it or not.
You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/

var BALANCE = 1000;
var TAX_RATE = 0.0711;

                   
function myFunction() {
    document.write("Current Balance: " + BALANCE.toFixed(2) + "<br><br>" )
    document.write("What phone do you want to buy? <br><br>");
    document.write("1: Iphone 6 is $730 <br>"); 
    document.write("2: Note 4 is $641 <br>");
    document.write("3: S6 Edge is $689 <br><br>");
    var btn1 = document.createElement("BUTTON");      // Create a <button> element
    //var t = document.createTextNode("CLICK ME");     // Create a text node
    //btn.appendChild(t);                              // Append the text to <button>
    //document.body.appendChild(btn);                  // Append <button> to <body>
    return  btn
}

function phoneMenu(btn){
    var btn1 = document.createElement("BUTTON"); 

    
    //var num = prompt("Enter #: ");
    var phonePrice = null;

    
    if (num == btn1){
        phonePrice = 730;
    }
    else if (num == 2){
        phonePrice = 641;
    }
    else if (num == 3){
        phonePrice = 680;
    }
    else
        document.write("No Phone Match <br>");
    return phonePrice;
}

var phonePrice = phoneMenu(btn); // Called phoneMenu


function buyPhone(phonePrice){

    return BALANCE - (phonePrice * (1 + TAX_RATE));
    
}
var amountWithTax = buyPhone(phonePrice); // Called buyPhone
formatAmount(amountWithTax); // Called formatAmount

function formatAmount(amount) {
    return document.write("Your purchase: $" + amount.toFixed( 2 ) + "<br>");
}




