//Log the date and time in the header


$(document).ready(function() {
    var x = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(x); 
    console.log(currentDay);
});

//store text content into the sections
//create local storage that saves what the user has entered
//change color based on the time that is displayed 
//stored items are displayed in the planner 
