var timeDisplayEl = $('#time-display');
var eleven;
var ten;
var twelve;
var one;
var two;
var three;
var four;
var five;
var nine;






function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}



    setInterval(displayTime, 1000);


    function checkTime() {
if (moment().hour() == 12) {
    twelve = present 
}

    }

        console.log(twelve)