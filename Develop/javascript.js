

//TODO THEN the current day is displayed at the top of the calendar
setInterval(function () {
    // Date -> Class -> Function Constructor
    const date = new Date();
    // get month
    const month = date.getMonth() + 1;
    // get the day (date)
    const day = date.getDate();
    // get year
    const year = date.getFullYear();
    // hour
    const hour = date.getHours();
    // minute
    let minutes = date.getMinutes();
    if (minutes < 10) { minutes = `0` + `${minutes}` }
    // seconds
    let seconds = date.getSeconds();
    if (seconds < 10) { seconds = `0` + `${seconds}` }

    const formattedTime = `${month}/${day}/${year} ${hour - 12}:${minutes}:${seconds}`;
    $("#currentDay").text(formattedTime);
}, 1000);



var plannerArray = []
// console.log(plannerArray)
//TODO THEN I am presented with timeblocks for standard business hours


$(".time-block").each(function () {
    // grabs attr data-num value then determines if it's morning or afternoon
    var timehr = $(this).attr("data-num")
    // if (timehr < 12) { `${timehr}AM` }
    // else if (timehr == 12) { `${timehr}PM` }
    // else { `${timehr - 12}PM` }




    var planner = {
        time: timehr,
        plans: $(this).find("textarea").val()
    }



    plannerArray.push(planner)
    //TODO THEN I can enter an event
    //TODO THEN the text for that event is saved in local storage

})

// var plansText = $("#hour-9").find("textarea").val()
//TODO THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//on click on input button prevent default select the textarea class
$("#hour-9").find(".btn").on("click", function (e) {
    e.preventDefault
    var plansText = $("#hour-9").find("textarea").val()

    plannerArray[0].plans = plansText
    localStorage.setItem("plannerArray", JSON.stringify(plannerArray))
})




//planner object will then save the text
// store into local storage
//then retrive from local storage and paste into the box when the page is reloaded

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner

// WHEN I scroll down

// WHEN I view the timeblocks for that day

// WHEN I click into a timeblock

// WHEN I click the save button for that timeblock

// WHEN I refresh the page
//TODO THEN the saved events persist

function savedPlans() {

    let plannerArray = JSON.parse(localStorage.getItem("plannerArray"))

    if (plannerArray === null) { return }

    for (let i = 0; i < plannerArray.length; i++) {
        if ($(".time-block").attr("data-num") == plannerArray[i].time) {
            // TODO NOW MAKE IT WORK FOR ALL
            $("#hour-9").find("textarea").text(plannerArray[i].plans)

        }

    }
    console.log(plannerArray)
}

savedPlans()