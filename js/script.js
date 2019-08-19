$(document).ready(function() {

  $("#words").submit(function(event){
    event.preventDefault();

    var words = $("#input").val().split(" ");

    words.forEach(function(word, index){
      var regex = /[,.;'"]/g
      words[index] = word.toLowerCase().replace(regex, "");
    });
    words.sort();

    var wordCounter = [];
    words.forEach(function(word,index){
      var firstIndex = words.indexOf(word);
      if (word && words[index+1] !== word){
        var count = (index - firstIndex) + 1;
        wordCounter.push(word + " : " + count);
      }
    });

    wordCounter.forEach(function(countedWord){
      $("#result-list").append("<li>" + countedWord + "</li>");
    });
  });
});
