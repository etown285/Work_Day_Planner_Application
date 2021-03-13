//Log the date and time in the header
$(document).ready(function() {
    var x = moment().format('MMMM Do YYYY,');
    $("#currentDay").text(x); 
    console.log(currentDay);

    var currentDate = moment()
    console.log(currentDate)

    var currentHour = currentDate.hours()
    console.log(currentHour)

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
    // window.localStorage.setItem("9",( $("#9").val() ))
    // window.localStorage.setItem("10",($("#hour2").val()))
    // window.localStorage.setItem("11",($("#hour3").val()))
    // window.localStorage.setItem("12",($("#hour4").val()))
    // window.localStorage.setItem("1",($("#hour5").val()))
    // window.localStorage.setItem("2",($("#hour6").val()))
    // window.localStorage.setItem("3",($("#hour7").val()))
    // window.localStorage.setItem("4",($("#hour8").val()))
    // window.localStorage.setItem("5",($("#hour9").val()))

        for (i = 0; i < hours.length; i++) {
            var id = hours[i];
            window.localStorage.setItem(id,( $("#" + id).val() ))
        }
    })

    //create local storage that saves what the user has entered
    /*
    $("#9").val(localStorage.getItem("9"));
    $("#hour2").append(localStorage.getItem($("10")));
    $("#hour3").append(localStorage.getItem($("11")));
    $("#hour4").append(localStorage.getItem($("12")));
    $("#hour5").append(localStorage.getItem($("1")));
    $("#hour6").append(localStorage.getItem($("2")));
    $("#hour7").append(localStorage.getItem($("3")));
    $("#hour7").append(localStorage.getItem($("4")));
    $("#hour7").append(localStorage.getItem($("5")));
    */

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