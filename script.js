let daysCountEl = document.getElementById("days-count-el")
let percentEl = document.getElementById("percent-el")
let tbodyEl = document.getElementById("tableEl")
let timeNowEl = document.getElementById("timeNow")
let dayNumber = 0
let fappedNumber = 0
let savedNumber = 0
let percent = 0

document.getElementById("fapped-btn").disabled = true //keep it true
document.getElementById("saved-btn").disabled = true //keep it true

function fapped() {
    var status = "Slipped"
    console.log("fapped pressed")
    fappedNumber += 1
    dayIncrement()
    percentCalc(status)
    disableBtn()
    document.getElementById("demo").innerHTML = "Button is Disabled for the next 24 hours"
}
function saved() {
    var status = "Saved"
    console.log("saved pressed")
    savedNumber += 1
    dayIncrement()
    percentCalc(status)
    disableBtn()
    document.getElementById("demo").innerHTML = "Button is Disabled for the next 24 hours"
}

function dayIncrement() {
    dayNumber = dayNumber + 1
    nextDay = dayNumber + 1
    daysCountEl.innerText = "~ DAY " + nextDay + " ~"
}

function percentCalc(status) {
    console.log("percent pressed")
    percent = savedNumber * 100 / dayNumber
    percentEl.innerText = "Success Rate📈: " + percent.toFixed(2) + "%"
    addTable(status)

}


function addTable(status) {

    tbodyEl.innerHTML +=
        `<tr>
        <td>Day ${dayNumber}</td>
        <td> ${status}</td>
        <td> ${percent.toFixed(2)}</td>
    </tr>`
}


//-------------------------- THE COUNTDOWN APPROACH -------------------------------
/*
// Set the date we're counting down to
var countDownDate = new Date("May 26, 2022 17:00:00").getTime();
var countDownDate1 = new Date("May 26, 2022 17:00:00").getTime();
timerInactive()


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

// -------------------TIMER ACTIVE---------------------

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

console.log("last line")


function block(x) {
    clearInterval(x);
    document.getElementById("fapped-btn").disabled = true;
    document.getElementById("saved-btn").disabled = true;
    countDownDate = new Date(Date.now() + 82800000).getTime();
    timerInactive()
}
*/

//-------------------------- ALTERNATE APPROACH WITHOUT THE COUNTDOWN -------------------------------


var checkHour = new Date().getHours()
var checkMinutes = new Date().getMinutes()
var hourNum = 17 // Give the Hour Number here
if (checkHour == hourNum) {
    console.log("if true")
    console.log(checkHour, checkMinutes)
    enableBtn()
} else if (checkHour < hourNum) {
    console.log("if false, moved to else f")
    console.log(checkHour, checkMinutes)
    disableBtn()
    document.getElementById("demo").innerHTML = "Button is Disabled until 5pm Today"
} else if (checkHour > hourNum) {
    console.log("if false, moved to else f")
    console.log(checkHour, checkMinutes)
    disableBtn()
    document.getElementById("demo").innerHTML = "Button is Disabled until 5pm Tomorrow"
}

function disableBtn() {
    document.getElementById("fapped-btn").disabled = true;
    document.getElementById("saved-btn").disabled = true;
    document.getElementById("demo").innerHTML = "Button is Disabled"
}

function enableBtn() {
    document.getElementById("fapped-btn").disabled = false;
    document.getElementById("saved-btn").disabled = false;
    document.getElementById("demo").innerHTML = "Button Is Enabled"
}


// ---------------------- CLOCK ----------------------
setInterval(function () {
    var time = new Date();
    var h = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: "numeric", hour12: true })
    timeNowEl.innerHTML = h
}, 1000)

