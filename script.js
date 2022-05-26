//|||||||||||||||||||||||||||->>  INITIALISATION  <<-|||||||||||||||||||||||||

let daysCountEl = document.getElementById("days-count-el")
let percentEl = document.getElementById("percent-el")
let tbodyEl = document.getElementById("tableEl")
let smallTableEl = document.getElementById("table-count")
let timeNowEl = document.getElementById("timeNow")
let dayNumber = 0
let fappedNumber = 0
let savedNumber = 0
let percent = 0
let arr = []
let savedData = []
document.getElementById("fapped-btn").disabled = false //keep it true
document.getElementById("saved-btn").disabled = false //keep it true

checkSavedArray() //  {    DO NOT
retrieveData()    //  {  CHANGE THE
buildTable(arr)   //  { ORDER OF THESE

//|||||||||||||||||||||||||||->>  THE FUNCTIONLAND  <<-|||||||||||||||||||||||||

function fapped() { // When slipped btn is pressed
    var status = "Slipped"
    console.log("Slipped pressed")
    fappedNumber += 1
    dayIncrement()
    percentCalc(status)
    disableBtn()
    document.getElementById("demo").innerHTML = "Buttons are Disabled for the next 24 hours"
}

function saved() { // When saved btn is pressed
    var status = "Saved"
    console.log("saved pressed")
    savedNumber += 1
    dayIncrement()
    percentCalc(status)
    disableBtn()
    document.getElementById("demo").innerHTML = "Buttons are Disabled for the next 24 hours"
}

function dayIncrement() { // Manages the day count
    dayNumber = dayNumber + 1
    nextDay = dayNumber + 1
    daysCountEl.innerText = "~ DAY " + nextDay + " ~"
}

function percentCalc(status) { // Calculates the percentage and updates the html
    console.log("percent pressed")
    percent = savedNumber * 100 / dayNumber
    percentEl.innerText = "Success Rate📈: " + percent.toFixed(2) + "%"
    addTable(status)
}

function addTable(status) { // Pushes the data to ARRAY and stores the array locally
    arr.push(
        {
            day: dayNumber,
            status: status,
            percent: percent.toFixed(2),
            fappedNumber: fappedNumber,
            savedNumber: savedNumber
        }
    )
    buildTable(arr)
    localStorage.setItem("progressArray", JSON.stringify(arr));
}

function buildTable(arr) { // Pulls Data from ARRAY and Builds the table rows
    console.log("Reached buildTable")
    tbodyEl.innerHTML = `<tr>
                            <th colspan="3">Daily Progress 🚧</th>
                        </tr>
                        <tr>
                            <td><b>Days</b></td>
                            <td><b>Status</b></td>
                            <td><b>Percentage</b></td>
                        </tr>`
    // For loop
    for (var i = 0; i < arr.length; i++) {
        console.log("Reached buildTable loop")
        var row = `<tr>
                        <td>Day ${arr[i].day}</td>
                        <td> ${arr[i].status}</td>
                        <td> ${arr[i].percent}</td>
                  </tr>`
        tbodyEl.innerHTML += row
    }
    smallTableEl.innerHTML = `<tr>
                                <td>Slips = ${fappedNumber}</td>
                                <td>Saves = ${savedNumber}</td>
                              </tr>`
}

function disableBtn() { // Disables the buttons (when outside the time limit)
    document.getElementById("fapped-btn").disabled = true;
    document.getElementById("saved-btn").disabled = true;
    document.getElementById("demo").innerHTML = "Buttons are Disabled"
}

function enableBtn() { // Enables the buttons (when inside the time limit)
    document.getElementById("fapped-btn").disabled = false;
    document.getElementById("saved-btn").disabled = false;
    document.getElementById("demo").innerHTML = "Buttons are Enabled"
}

function retrieveData() { // Retrieves data from local storage and assigns it to respective variables
    savedData = JSON.parse(localStorage.getItem("progressArray"));
    arr = savedData

    fappedNumber = savedData[savedData.length - 1].fappedNumber
    dayNumber = savedData[savedData.length - 1].day
    savedNumber = savedData[savedData.length - 1].savedNumber
    percent = savedData[savedData.length - 1].percent

    daysCountEl.innerText = "~ DAY " + (dayNumber + 1) + " ~" // to update the html upon starting
    percentEl.innerText = "Success Rate📈: " + percent + "%"
}

function checkSavedArray() { // Checks if the local array exists or not, if not creates an empty local array
    if (localStorage.getItem("progressArray") == null) {
        localStorage.setItem("progressArray", "[]")
        console.log("Locale is null")
    }
}

//|||||||||||||||||||||||||||>>  TIMER ALGORITHM  <<|||||||||||||||||||||||||//

//-------------------------- THE COUNTDOWN APPROACH >
/*
// Set the date we're counting down to
var countDownDate = new Date("May 26, 2022 17:00:00").getTime();
var countDownDate1 = new Date("May 26, 2022 17:00:00").getTime();
timerInactive()

// TIMER INACTIVE

function timerInactive() {
    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = "Button Disabled For <br>" + hours + " hours, " +
            minutes + " minutes, & " + seconds + " seconds";

        // If the count down is over, write some text 
        if (distance < 1000) {
            clearInterval(x);
            document.getElementById("fapped-btn").disabled = false;
            document.getElementById("saved-btn").disabled = false;
            
        }
    }, 1000);
}

// TIMER ACTIVE

countDownDate1 = new Date(Date.now() + 10000).getTime();
function timerActive() {
    console.log("timer Y called")
    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate1 - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = "Button Active For<br>" + hours + " hours, " +
            minutes + " minutes, & " + seconds + " seconds";

        // If the count down is over, write some text 
        if (distance < 1000) {
            block(x)
            console.log(distance)
            distance = 0
        }
    }, 1000);
}




function block(x) {
    clearInterval(x);
    document.getElementById("fapped-btn").disabled = true;
    document.getElementById("saved-btn").disabled = true;
    countDownDate = new Date(Date.now() + 82800000).getTime();
    timerInactive()
}
*/

//-------------- ALTERNATE APPROACH WITHOUT THE COUNTDOWN >

var checkHour = new Date().getHours()
var checkMinutes = new Date().getMinutes()
var hourNum = 22 // Give the Hour Number here
if (checkHour == hourNum) {
    console.log("if> true")
    console.log(checkHour, checkMinutes)
    enableBtn()
} else if (checkHour < hourNum) {
    console.log("if> false, moved to else if")
    console.log(checkHour, checkMinutes)
    disableBtn()
    document.getElementById("demo").innerHTML = "Buttons are Disabled until 5pm Today"
} else if (checkHour > hourNum) {
    console.log("if> false, moved to else if 2")
    console.log(checkHour, checkMinutes)
    disableBtn()
    document.getElementById("demo").innerHTML = "Buttons are Disabled until 5pm Tomorrow"
}


// ---------------------- CLOCK ----------------------
setInterval(function () {
    var time = new Date();
    var h = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: "numeric", hour12: true })
    timeNowEl.innerHTML = h
}, 1000)

console.log("last line")

// ---------------- The Sandbox --------------


