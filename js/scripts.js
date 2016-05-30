$(document).ready(function() {

 $("#side-one-JS").click(function() {
   $("#side-two-JS").toggle();
   $("#side-one-JS").toggle();
  });

 $("#side-two-JS").click(function() {
   $("#side-one-JS").toggle();
   $("#side-two-JS").toggle();
   });

 $("#side-one-Op").click(function() {
   $("#side-two-Op").toggle();
   $("#side-one-Op").toggle();
   });

 $("#side-two-Op").click(function() {
   $("#side-one-Op").toggle();
   $("#side-two-Op").toggle();
   });

 $("#side-one-Var").click(function() {
   $("#side-two-Var").toggle();
   $("#side-one-Var").toggle();
   });

 $("#side-two-Var").click(function() {
   $("#side-one-Var").toggle();
   $("#side-two-Var").toggle();
   });

 $("#side-one-Func").click(function() {
   $("#side-two-Func").toggle();
   $("#side-one-Func").toggle();
   });

 $("#side-two-Func").click(function() {
   $("#side-one-Func").toggle();
   $("#side-two-Func").toggle();
   });

   $("#side-one-Meth").click(function() {
     $("#side-two-Meth").toggle();
     $("#side-one-Meth").toggle();
     });

   $("#side-two-Meth").click(function() {
     $("#side-one-Meth").toggle();
     $("#side-two-Meth").toggle();
     });

   $("#side-one-Arg").click(function() {
     $("#side-two-Arg").toggle();
     $("#side-one-Arg").toggle();
     });

   $("#side-two-Arg").click(function() {
     $("#side-one-Arg").toggle();
     $("#side-two-Arg").toggle();
     });
});
