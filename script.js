//Log the date and time in the header
$(document).ready(function() {
    var x = moment().format('MMMM Do YYYY,');
    $("#currentDay").text(x); 
    console.log(currentDay);

    var currentDate = moment()
    console.log(currentDate)

    var currentHour = currentDate.hours()
    console.log(currentHour)

//Array creating hours to match for the storage and row color 
    var hours =[
        "9", 
        "10",
        "11", 
        "12", 
        "13", 
        "14", 
        "15", 
        "16", 
        "17" 
    ] 


    //event listener that stores text content into the the text area
    
    $(".saveBtn").on("click", function() {


        for (i = 0; i < hours.length; i++) {
            var id = hours[i];
            window.localStorage.setItem(id,( $("#" + id).val() ))
        }
    })
    
    //create local storage that saves what the user has entered and converted to for loop.

    function SetHoursOnLoad(){
        for (i = 0; i < hours.length; i++) {
            var id = hours[i];
            $('#' + id).val(localStorage.getItem(id));
        }
    }
    SetHoursOnLoad();



    //change color based on the time that is displayed within the HTML value and current time. 

    function rowColor() {

        for (i = 0; i < hours.length; i++) {
            var id = hours[i];
            if(currentHour > parseInt(id)){
                $('#' + id).parent().addClass("past");
            }
            else if(currentHour == parseInt(id)){
                $('#' + id).parent().addClass("present");
            }
            else {
                $('#' + id).parent().addClass("future");
            }
        }

    }

    rowColor();
});