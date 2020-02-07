// these are functions to use on the hiking website 

// this function is for the tagline with the year
function yearTagline (){
    var mydate = new Date();
    mydate = mydate.getFullYear();

    return ('<h5> Hope you have fun hiking in ' + mydate + ' and beyond!</h5>');

    // just for fun - code below displays the tagline three times 

    // var haveFun = '<h5> Hope you have fun hiking in ' + mydate + ' and beyond!</h5>';
    // haveFun = haveFun + haveFun + haveFun;
    // return haveFun;

}



// this function allows you to switch to the snowboarding site if you want to go there instead
// it will ask if they want hiking or snowboarding; redirect to snowboarding if they want snowboarding.

function verifyInterest() {
    var interest = prompt ('Do you want the snowboarding page?')
    interest = interest.toLowerCase()

    if (interest == 'yes') {
        open ('https://leethomas13.github.io/Mountain-Website/'); 
    } else {confirm ('Great! We love hiking too!');
    };
}



// this function puts the day of the week in the header with a phrase
// this creates a tagline that includes the day of the week

var weekdayTagline = function(){
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
    return ('<h3>' + weekday + ' is a great day for hiking!</h3>');
    
}


//this function asks you how many boots you want to buy, then tells you how much it will cost

function buyBoots(){

    var quantity = prompt("How many boots do you want to buy?");
    var bootDescription;
    var cartContents = '';

    while (isNaN(quantity)) {
         quantity = prompt("You must enter a number.");
    };

    for (var i = 0; i < quantity; i++) {
        bootDescription = "Boot #"+[i+1];
        cartContents = cartContents + " | " + bootDescription;
        console.log(bootDescription);
        console.log(cartContents);

    };
    return ('<h4> Boots in your cart:' + cartContents + '</h4>');

}
