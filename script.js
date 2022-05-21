let daysCountEl = document.getElementById("days-count-el")
let percentEl = document.getElementById("percent-el")
let tbodyEl = document.getElementById("tableEl")
let dayNumber = 0
let fappedNumber = 0
let savedNumber = 0
let percent = 0


function fapped() {
    var status = "Slipped"
    console.log("fapped pressed")
    fappedNumber += 1
    dayIncrement()
    percentCalc(status)

}
function saved() {
    var status = "Saved"
    console.log("saved pressed")
    savedNumber += 1
    dayIncrement()
    percentCalc(status)

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




