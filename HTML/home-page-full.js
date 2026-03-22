<script>
    // Scroll Reveal - IntersectionObserver
    (function() {
      var revealElements = document.querySelectorAll('.reveal');

      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      revealElements.forEach(function(el) {
        observer.observe(el);
      });
    })();

    // Navbar scroll behavior
    (function() {
      var header = document.getElementById('header');
      var navbar = document.getElementById('navbar');
      var navInner = document.getElementById('navInner');
      var hero = document.getElementById('hero');

      function handleScroll() {
        if (!hero) return;
        var heroBottom = hero.offsetTop + hero.offsetHeight;
        var scrollY = window.scrollY || window.pageYOffset;
        var isScrolled = scrollY > heroBottom - 80;

        if (isScrolled) {
          header.classList.add('scrolled');
          navbar.classList.add('scrolled');
          navInner.classList.remove('inverted');
        } else {
          header.classList.remove('scrolled');
          navbar.classList.remove('scrolled');
          navInner.classList.add('inverted');
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    })();

    // Form submission handler
    (function() {
      var form = document.getElementById('appointmentForm');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          console.log('Form submitted');
        });
      }
    })();
  </script>