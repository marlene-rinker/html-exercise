// these are functions to use on the hiking website 

// this function is for the tagline with the year
function yearTagline (activity){
    var mydate = new Date();
    mydate = mydate.getFullYear();

    return ('<h5 class="big-color"> Hope you have fun ' + activity + ' in ' + mydate + ' and beyond!</h5>');

    // just for fun - code below displays the tagline three times 

    // var haveFun = '<h5> Hope you have fun hiking in ' + mydate + ' and beyond!</h5>';
    // haveFun = haveFun + haveFun + haveFun;
    // return haveFun;

}

function copyrightLine (){
    var mydate = new Date();
    mydate = mydate.getFullYear();

    return ('<p class="small"> &copy; ' + mydate + ' Outdoor Resources JFF, Inc. </p>');
}



// this function allows you to switch to the snowboarding site if you want to go there instead
// it will ask if they want hiking or snowboarding; redirect to snowboarding if they want snowboarding.

function verifyInterest() {
    var interest = prompt ('Do you want the snowboarding page?')
    interest = interest.toLowerCase()

    if (interest === 'yes') {
        open ('https://leethomas13.github.io/Mountain-Website/'); 
    } else {confirm ('Great! We love hiking too!');
    };
}



// this function puts the day of the week in the header with a phrase
// this creates a tagline that includes the day of the week

var weekdayTagline = function(activity){
    var today = new Date();
    var dayNow = today.getDay();
    var weekday;

    if (dayNow === 0) {
        weekday = 'Sunday';
    } else if (dayNow === 1) {
        weekday = 'Monday';
    }  else if (dayNow === 2) {
        weekday = 'Tuesday'; 
    }  else if (dayNow === 3) {
        weekday = 'Wednesday';  
    }  else if (dayNow === 4) {
        weekday = 'Thursday'; 
    }  else if (dayNow === 5) {
        weekday = 'Friday'; 
    }  else if (dayNow === 6) {
        weekday = 'Saturday'; 
    } else {
        weekday = 'Today';
    };
    console.log('Weekday', weekday);
    return ('<h3>' + weekday + ' is a great day for ' + activity + '!</h3>');
    
}


//this function asks you how many boots you want to buy, then tells you how much it will cost

function buyBoots(location){

    var quantity = prompt("How many boots do you want to buy?");
    var bootDescription;
    var cartContents = '';
    var cartTotal = 0;

    while (isNaN(quantity)) {
         quantity = prompt("You must enter a number.");
    };

    for (var i = 0; i < quantity; i++) {
        bootDescription = "Boot #"+[i+1];
        bootPrice = Math.floor(Math.random() * 81) + 120;
        cartTotal = cartTotal + bootPrice;
        cartContents = cartContents + " | " + bootDescription + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '$' + bootPrice;
        console.log(bootDescription);
        console.log(cartContents);
        console.log(bootPrice);
        console.log(cartTotal);

    };
    // return ('Your cart:' +cartContents + "|" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "Total: $" + cartTotal); 
    var yourCart = document.getElementById(location);

    yourCart.textContent = 'Your cart:' +cartContents + "|" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "Total: $" + cartTotal;
    // document.write ('<h4> Boots in your cart:' + cartContents + '</h4>');

}
    

