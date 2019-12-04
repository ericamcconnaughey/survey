$(document).ready(function() {
  $("form#user-survey").submit(function(event) {
    // alert("Thanks for submitting your survey responses!");
    var firstName = $("#name").val();
    var favFood = $("#food").val();
    var favMusic = $('input[name="optionsRadios"]').val();
    var favColor = $("#color").val();

    alert("Hello " + firstName + ". I'm glad you also like to eat " + favFood + ". I'm not a huge fan of " + favMusic + " music myself, but I won't judge. " + favColor + " is a pretty cool color!");
    
    yourArray = [firstName, favFood, favMusic, favColor];
    console.log(yourArray);

    var newArray = []
    var str = '<ul>'
    newArray.push(yourArray[1], yourArray[0], yourArray[2]);
    console.log(newArray);

  newArray.forEach(function(item) {
    str += '<li>' + item + '</li>';
  })

  str += '</ul>'
  
    document.getElementById("results").innerHTML = str;
    
    event.preventDefault();
  })
  
})