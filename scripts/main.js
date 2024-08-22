
$(document).ready(function() {
  AOS.init( {
    // once: true  
  });
});


$("a.smooth-scroll").click(function(event) {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000,
        function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr("tabindex", "-1"); 
            $target.focus(); 
          }
        }
      );
    }
  }
});


// Light Box
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Scroll Top
$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  $("#scrolltop").click(function () {
    $("html,body").animate({ scrollTop: $("#top").offset().top }, "1000");
    return false
  })
})

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('#scrolltop:hidden').stop(true, true).fadeIn();
  } else {
    $('#scrolltop').stop(true, true).fadeOut();
  }
});

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const learnMoreButton = document.getElementById('learnMoreButton');
const beAuthorTodayButton = document.getElementById('beAuthorTodayButton');
const beAuthorTodayButton1 = document.getElementById('beAuthorTodayButton1')
// Event listener for "Learn more about our recent publications" button
learnMoreButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const target = document.querySelector('#clients');
  const offsetTop = target.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
});

// Event listener for "Be an Author Today" button
beAuthorTodayButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const target = document.querySelector('#contact');
  const offsetTop = target.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
});

beAuthorTodayButton1.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const target = document.querySelector('#contact');
  const offsetTop = target.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
});

