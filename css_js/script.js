//set current time 
var currentDay = $("#currentDay");
var date = moment().format('dddd, LL');
currentDay.text(date);

var textArea = $(".textArea");
textAreaVal = parseInt(textArea.attr("value"))
console.log(textArea.attr("value"));

// append timeblocks for standard business hours (9am-5pm)
// function will append timeblock elements 8 times for a total of 9
clone();
function clone() {

    var r = $(".row");

    for (var i = 16; i > 8 ; i--) {
        r.clone().insertAfter(r)

        // set attribute of textarea to value = i
        textArea.attr("value", i);
        console.log(textArea.attr("value"));
        console.log(typeof textAreaVal);
       
    }
};

// switch/case function will add text to hour div
setHour();
function setHour() {
    var hour = $(".hour")
    for (var i = 0; i < hour.length; i++) {
        hour[i].textContent = i
    
        switch(i) {
            case 0:
                hour[0].textContent = "9AM";
                break;
            case 1:
                hour[1].textContent = "10AM";
                break;
            case 2:
                hour[2].textContent = "11AM";
                break;
            case 3:
                hour[3].textContent = "12PM";
                break;
            case 4:
                hour[4].textContent = "1PM";
                break;
            case 5:
                hour[5].textContent = "2PM";
                break;
            case 6:
                hour[6].textContent = "3PM";
                break;
            case 7:
                hour[7].textContent = "4PM";
                break;
            case 8:
                hour[8].textContent = "5PM";
                break;
            default:
                break;
        }//use array for times ***************

    }
};

// function to get current time
var currentHour = moment().get('h');
console.log(currentHour);

getValue();
// gets value from each row to determine which tasks are past, present, and future
function getValue() {

    for (var i = 0; i < 9; i++) {

        var x = $(".row")[i].children[1];
        var y = parseInt(x.getAttribute("value"));
        console.log(y);

        if (y > currentHour) {
            $(x).addClass("future");

        }else if (y < currentHour) {
            $(x).addClass("past");
        
        }else {
            $(x).addClass("present");
        }
        
    }

}

// event listener to saveBtn
$(".saveBtn").on("click", function() {
    x = (event.target.parentElement)
    var y = x.previousElementSibling
    console.log(y);
    var z = y.value
    console.log(z);
    // store in local storage
    storeUserInput(y, z);
})

// local storage function
function storeUserInput(y, z) {
    x = y.getAttribute("value");
    console.log(x);
    localStorage.setItem(x, z);
}

// render local storage when page opens
getUserInput();
function getUserInput() {

    for (var i = 9; i < 18; i++) {
        k = localStorage.getItem(i);
        
        var index = $("textarea")[i - 9]
        console.log(index);
        var indexVal = index.getAttribute("value");
        console.log(indexVal);

        if (indexVal = i) {
            if (k !== null) {
                index.textContent = k;
            }else {
                index.textContent = "---available---"
            }
        }
    }
};