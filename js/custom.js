  $(function() {
      function toggleImage() {
          var image = document.getElementById('image');
          
          if (document.body.classList.contains('dark-mode')) {
              image.src = 'images/undraw/4.jpg'; 
          } else {
              image.src = 'images/undraw/3.jpg'; 
          }
      }

      $('.color-mode').click(function() {
          $('body').toggleClass('dark-mode');
          $('.color-mode-icon').toggleClass('active');
          toggleImage(); 
      });

      $(".navbar").headroom();

      $('.owl-carousel').owlCarousel({
          items: 1,
          loop: true,
          margin: 10,
          nav: true
      });

      $('.nav-link, .custom-btn-link').on('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
          event.preventDefault();
      });

      // TOOLTIP
      $('.social-links a').tooltip();
  });
