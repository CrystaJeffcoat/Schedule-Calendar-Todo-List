//set current time 
var currentDay = $("#currentDay");
var date = moment().format('dddd, LL');
currentDay.text(date);

var textArea = $(".textArea");
textAreaVal = parseInt(textArea.attr("value"));

// append timeblocks for standard business hours (9am-5pm)
// clone timeblock elements from index file
clone();
function clone() {

    var r = $(".row");

    for (var i = 16; i > 8 ; i--) {
        r.clone().insertAfter(r)

        // set attribute of textarea to value = i
        textArea.attr("value", i);
       
    }
};

// add text to hour div
setHour();
function setHour() {
    var hour = $(".hour")
    var hoursArr = [
        "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"
    ]
    for (var i = 0; i < hour.length; i++) {
        hour[i].textContent = hoursArr[i]
    }
};

// function to get current time
var currentHour = moment().get('h');
console.log("current hour: " + currentHour);


// gets value from each row to determine which tasks are past, present, and future
getValue();
function getValue() {

    for (var i = 0; i < 9; i++) {

        var x = $(".row")[i].children[1];
        var y = parseInt(x.getAttribute("value"));

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
    var z = y.value
    
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
        var indexVal = index.getAttribute("value");

        if (indexVal = i) {
            if (k !== null && k !== "") {
                index.textContent = k;
            }else {
                index.textContent = "---available---"
                $(index).attr(
                    "style", "text-align: center; color: rgb(92, 86, 86);"
                );
            }
        }
    }
};