// $("h1").css("color","red"); 
// console.log($("h1").css("font-size"));

// $("h1").toggleClass("big-title margin-50");
// $("h1").hasClass("margin-50");

// $("h1").text("Bye"); // textContent in js

// $("h1").html("<em>Good Bye</em>"); //innerHTML in js

// $("a").attr("href","https://www.yahoo.com");

// console.log($("h1").attr("class"));

// $("h1").click(function (){
//     alert("Heading clicked!");
//     $("h1").css("color","blue");
//     setTimeout(function (){
//         $("h1").css("color","black");
//     },300);
// }) 

// $("input").keydown(function (event){
//     console.log(event.key);
// })

// $(document).keydown(function (event){
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover",function (){
//     $("h1").css("color","cyan");
//     setTimeout(function (){
//         $("h1").css("color","black");
//     },300);
// })

// $("h1").before("<button>New Button</button>"); //before - to add html before the selected element
// $("h1").after("<button>New Button</button>");
// $("h1").prepend("<button>New Button</button>");
// $("h1").append("<button>New Button</button>"); // prepend and append are inside h1 element before and after the content say <h1>prependHello</h1> <h1>Helloappend</h1>

// $("h1").remove();

// $("button").on("click",function (){
//     $("h1").hide(); //show() toggle() fadeOut() fadeIn() fadeToggle()
    // slideUp() slideDown() slideToggle() 
// })

$("button").on("click", function (){
    $("h1").slideUp().slideDown().animate({opacity: 0.5}) 
})