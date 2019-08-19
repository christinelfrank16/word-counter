$(document).ready(function() {
  $("#words").submit(function(event){
    event.preventDefault();
    var words = $("#input").val().split(" ");
    words.sort();
    var wordCounter = words.map(function(word,index){
      var firstIndex = words.indexOf(word);
      if(index === firstIndex && words[index+1] !=== word){
        return word + ":1";
      } else if (words[index+1] !=== word){
        var count = (index - firstIndex) + 1;

      }
    });
  });
});
