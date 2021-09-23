// JavaScript File
/* global $ location Typed*/
// nav bar background color change
$(document).ready(function() {
  window.onscroll = function() {myFunction()};
    var height = .15 * $(window).height();
    function myFunction() {
        if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
            document.getElementById("nav").className = "addNavBackground";
        } else {
            document.getElementById("nav").className = "rmvNavBackground";
        }
    }
    
    // smooth scroll to anchor
    $('a[href*="#"]')
      .click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top-30
            }, 1000);
          }
        }
      });
    
    /* sidebar */
    $("#hamburger").click(function (e) {
        $("#mobileSidebar").animate({width:'toggle'},350);
        e.stopImmediatePropagation();
    });
    
    $(document).click(function (e) {
        if($("#mobileSidebar").is(":visible") && !$("#mobileSidebar").is(e.target)) {
            $("#mobileSidebar").animate({width:'toggle'},350);
        }
    });
        
    $(window).stellar();
    
    //scroll-x

});
  
