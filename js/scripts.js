$(document).ready(function() {
 $(".side-one").click(function() {
   $(".side-two").toggle();
   $(".side-one").toggle();
   });

 $(".side-two").click(function() {
   $(".side-one").toggle();
   $(".side-two").toggle();
   });
});
