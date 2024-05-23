$(document).ready(function() {
  // $("#submit").click(function(){
  //   var name = $("#name").val();
  //   var email = $("#email").val();
  //   var message = $("#message").val()
  //   // alert()
  //   console.log(name+"   "+email+"   "+message)
  //   if(name != "" && name != null && email != "" && email != null && message !="" && message != null ){
  //     var email = 'priyadharshiniinstitution@gmail.com';
  //   var subject = 'Circle Around';
  //   var emailBody = 'Some blah';
  //     window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
  //   }
  // });
//     // Responsive menu toggle
//     $(".menu-toggle").click(function() {
//         $("ul").toggleClass("active");
//     });

//     // Smooth scrolling for anchor links
//     $("ul li a").click(function() {
//         $("ul").removeClass("active");
//         $("html, body").animate({
//             scrollTop: $($(this).attr("href")).offset().top
//         }, 800);
//         return false;
//     });

//     // Add animations and interactivity as needed
//     $("ul li a").hover(function() {
//         $(this).css("color", "#ff4500");
//     }, function() {
//         $(this).css("color", "#ff9900");
//     });
});
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
