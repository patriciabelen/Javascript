// alert('My project is going to be awesome!');
$("#noShow").hide();
$("h1").html("The Best Jokes Ever!");
$("#joke").append("<p>Q. What do you call a fake noodle? <br /> A. An impasta</p>");

// modify css styles for the button
$("#toggleJokes").css({
    "background-color": "orange",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px"
});

$("#toggleJokes").click(function() {
    $("#joke").toggle();
  });

$(".myImage").css ("border-radius", "25px");



// challenge: Prompt() the user whether the jokes on our page are good or bad. If the user responds with "bad", then change the header text to "The Worst Jokes Ever!". If the user responds with "good", keep the header text as "The Best Jokes Ever!".

let ask = prompt("Are these jokes good or bad?");
if (ask == 'bad'){
    $("h1").html("The Worst Jokes Ever!");
} 
else if (ask == 'good'){
    alert("Thanks.");
};

// challenge: Add a button to the page that will change the page's overall color scheme (background color, text color, etc.).
$("#toggleColor").click(function() {
    $("body").css ("background-color", "pink");
    $(".formatText").css ("color", "yellow");
    $("#joke").css ("color", "yellow");
    $("#poem").css ("color", "yellow");
  });