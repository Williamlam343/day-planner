
const date = new Date();
// hour
var hour = date.getHours();



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
    var hour = date.getHours();
    if (hour > 12) { hour -= 12 }
    // minute
    var minutes = date.getMinutes();
    if (minutes < 10) { minutes = `0` + `${minutes}` }
    // seconds
    var seconds = date.getSeconds();
    if (seconds < 10) { seconds = `0` + `${seconds}` }

    const formattedTime = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`;
    $("#currentDay").text(formattedTime);
}, 1000);


var plannerArray = []

//TODO THEN I am presented with timeblocks for standard business hours

// runs the same function for each time block
$(".time-block").each(function () {
    // grabs attr data-num value then determines if it's morning or afternoon
    var timehr = $(this).attr("data-num")

    // .bg-secondary
    // .bg-success
    // .bg-info
    // colorchanging function
    // How does it trigger?
    // When currentTime = timehr set box to yellow
    // When currentTime < timehr set box to green
    // Else set box to gray

    //Select ELement

    // 
    if (`${timehr}` == hour) { $(`#hour-${timehr}`).find("textarea").addClass("bg-warning text-white") }
    else if (hour < timehr) { $(`#hour-${timehr}`).find("textarea").addClass("bg-success text-white") }
    else { $("textarea").addClass("bg-secondary text-white") }
    // $(".time-block").addClass('my-2')
    console.log(`${timehr} < ${hour}`)

    //targets the save btn and listens for a click to run event



    $(this).find(".btn").on("click", function (e) {
        // prevents the page from refreshing on submit
        e.preventDefault
        // grabs the saved plans from local storage
        if (JSON.parse(localStorage.getItem("plannerArray")) !== null) {
            plannerArray = JSON.parse(localStorage.getItem("plannerArray"))
        }

        // set the text to corresponding text area
        var plansText = $(`#hour-${timehr}`).find("textarea").val()
        //I need a way to select the correct textarea for each function
        plannerArray[`${timehr - 9}`].plans = plansText
        // if the space is not empty save into local storage
        { localStorage.setItem("plannerArray", JSON.stringify(plannerArray)) }

    })

    var planner = {
        time: timehr,
        plans: $(this).find("textarea").val()
    }

    plannerArray.push(planner)

})
// WHERE would I put it??





//prints item from local storage into the corressponding text area
function savedPlans() {

    let plannerArray = JSON.parse(localStorage.getItem("plannerArray"))

    if (plannerArray === null) { return }

    for (let i = 0; i < plannerArray.length; i++) {
        $("#hour-" + [i + 9]).find("textarea").text(plannerArray[i].plans)

    }

}

savedPlans()