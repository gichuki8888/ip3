var xbox = function(yellow) {
  var yellow = parseInt($("input#yellow").val());
      for (var i = 1; i <= yellow; i++) {
        if (i % 3 === 0) {
          $("ul#result").append("<li> ping</li>");
        } else if (i % 5 === 0) {
          $("ul#result").append("<li> pong</li>");
        } else if (i % 15 === 0) {
          $("ul#result").append("<li> pingpong</li>");
        } else {
          $("ul#result").append("<li>"+ String(i)+"</li>");

        };
      };
    };


$(document).ready(function() {
  $("form#xbox").submit(function(event) {
    event.preventDefault();

    xbox()
});
});
