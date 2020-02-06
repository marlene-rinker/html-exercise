// this will ask if they want hiking or snowboarding; redirect to snowboarding if they want snowboarding.
var interest = prompt ('Do you want the snowboarding page?')
interest = interest.toLowerCase()

if (interest == 'yes') {
    open ('https://leethomas13.github.io/Mountain-Website/'); 
} else {confirm ('Great! We love hiking too!');
}