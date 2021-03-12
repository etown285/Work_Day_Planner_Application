//Log the date and time in the header
$(document).ready(function() {
    var x = moment().format('MMMM Do YYYY,');
    $("#currentDay").text(x); 
    console.log(currentDay);

//event listener that stores text content into the the text area

$(".saveBtn").on("click", function() {
window.localStorage.setItem("9",($("#hour1").val()))
window.localStorage.setItem("10",($("#hour2").val()))
window.localStorage.setItem("11",($("#hour3").val()))
window.localStorage.setItem("12",($("#hour4").val()))
window.localStorage.setItem("1",($("#hour5").val()))
window.localStorage.setItem("2",($("#hour6").val()))
window.localStorage.setItem("3",($("#hour7").val()))
window.localStorage.setItem("4",($("#hour8").val()))
window.localStorage.setItem("5",($("#hour9").val()))

})

//create local storage that saves what the user has entered
//change color based on the time that is displayed 
//stored items are displayed in the planner 

    

});

