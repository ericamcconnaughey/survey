$(document).ready(function() {
  $("form").submit(function() {
    alert("Thanks for submitting your survey responses!");
    var surveyResponse=""
    console.log(surveyResponse);
    event.preventDefault();
  })
})