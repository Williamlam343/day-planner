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
    const minutes = date.getMinutes();
    // seconds
    const seconds = date.getSeconds();

    const formattedTime = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`;
    $("#currentDay").text(formattedTime);
}, 1000);


$(".time-block").each(function () {

    // select the ID of "this" then remove hour- and print the left overs
    var timehr = $(this).attr("data-num")

    if (timehr < 12) { console.log(`${timehr}am it is morning`) }
    else if (timehr == 12) { console.log(`${timehr}pm it is noon`) }
    else {
        console.log(`${timehr - 12}pm it's afternoon`)
    }
})