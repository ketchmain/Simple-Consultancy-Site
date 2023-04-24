<head>
  <meta charset="UTF-8">
  <title>Kennedy Waweru | Real Estate Professional</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css" integrity="sha512-t24+AZOgB1EdzrbHv/sY6+cxql6KdU6My4U6J3UdL+Ie4KjHlSxFGeQJGMKKDjKxQEG+QTxd9JzZ+n23KsJryg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="style.css">
<script src="script.js">

/* Hamburger Menu */
const burgerIcon = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
  burgerIcon.classList.toggle('is-active');
});

/* Smooth Scrolling */
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  });
});

/* Animated Counter */
const counters = document.querySelectorAll('.counter');
const speed = 1000;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

/* Animated Progress Bars */
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(bar => {
  const value = bar.getAttribute('data-value');
  bar.style.width = `${value}%`;
  bar.style.transition = 'width 1s ease-in-out';
});

<script src="https://cdn.jsdelivr.net/npm/vue@3.0.0/dist/vue.esm-browser.js"></script>
<script src="https://unpkg.com/@popperjs/core@2.9.3/dist/esm/popper.js"></script>
<script src="https://unpkg.com/tippy.js@6.3.1/dist/tippy-bundle.umd.js"></script>
<script src="https://unpkg.com/vue-router@4.0.0/dist/vue-router.esm-browser.js"></script>
<script>
// Hamburger Menu
const burgerIcon = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
  burgerIcon.classList.toggle('is-active');
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  });
});

// Animated Counter
const counters = document.querySelectorAll('.counter');
const speed = 1000;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// Animated Progress Bars
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(bar => {
  const value = bar.getAttribute('data-value');
  bar.style.width = `${value}%`;
  bar.style.transition = 'width 1s ease-in-out';
});

// Vue.js App
const app = Vue.createApp({
  data() {
    return {
      properties: [
        { name: 'Property 1', price: '1,000,000', image: 'img/property-1.jpg', location: 'Nairobi', bedrooms: 3, bathrooms: 2 },
        { name: 'Property 2', price: '2,000,000', image: 'img/property-2.jpg', location: 'Mombasa', bedrooms: 4, bathrooms: 3 },
        { name: 'Property 3', price: '3,000,000', image: 'img/property-3.jpg', location: 'Kisumu', bedrooms: 5, bathrooms: 4 },
        { name: 'Property 4', price: '4,000,000', image: 'img/property-4.jpg', location: 'Nakuru', bedrooms: 6, bathrooms: 5 }
      ]
    }
  },
  mounted() {
    tippy('.tooltip');
    const popperInstance = Popper.createPopper(this.$refs.tooltipTarget, this.$refs.tooltipContent, {
      placement: 'bottom',
    });
  }
});

</script>