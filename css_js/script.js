//set current time 
var currentDay = $("#currentDay");
var date = moment().format('dddd, LL');
currentDay.text(date);

var textArea = $(".textArea");
console.log(textArea.attr("value"));

// append timeblocks for standard business hours (9am-5pm)
// function will append timeblock elements 8 times for a total of 9
clone();
function clone() {

    var r = $(".row");

    for (var i = 8; i > 0 ; i--) {
        r.clone().insertAfter(r)
        textArea.attr("value", i);
        console.log(textArea.attr("value"));
    }
};

// set attribute of textarea to value = i
// 