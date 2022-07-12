// !!!зміна беграунду хедера при скролі


const header = document.getElementById('js-header')

const scrollListener = () => {
  window.scrollY > 10
    ? header.classList.add('header__scroll')
    : header.classList.remove('header__scroll')
}
scrollListener();
document.addEventListener('scroll', scrollListener)

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     document.getElementById("js-header").className = "header__scroll";
//   } else {
//     document.getElementById("js-header").className = "";
//   }
// }
// console.log(myFunction());

//! modal window

const modal = () => {
  document.getElementById('js-header-block').classList.toggle('show')
}
document.getElementById('js-header-burger')?.addEventListener('click', modal)

// !Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  centeredSlidesBounds: true,
  spaceBetween: 50,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // If we need pagination

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

  breakpoints: {
    420: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    // when window width is >= 480px
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
})

// автоматична прокрутка слайдера
const swiper1 = document.querySelector('.swiper').swiper
// setInterval( () => {
//   swiper1.slideNext();
// },2000);

// добавляння кастомних кнопок
document.getElementById('js-slider-button-prev'),
  addEventListener('click', () => {
    swiper1.slidePrev()
  })
document.getElementById('js-slider-button-next'),
  addEventListener('click', () => {
    swiper1.slideNext()
  })

// зміна пагінації


// google-maps
// function initMap() {
//   const baseLocation = { lat: 40.678234565672625, lng: -73.94328990937252 };

//   const map = new google.maps.Map(document.getElementById('js-map'),{
//     zoon:15,
//     center: baseLocation,
//    });
//   const marker = new google.maps.Marker({
//     position:baseLocation ,
//     map: map,

//   })
// };

// form registration
const toggleError = (id, error) => {
  const el = document.getElementById(id)
  error ? el.classList.add('error') : el.classList.remove('error')
}
// form registration Get Dom element
const registration = (event) => {
  // відміна стандартної поведінки форми
  event.preventDefault()

  const form = new FormData(event.target)

  const userName = form.get('userName')
  toggleError('js-form-registration-user-name', !userName)

  const userEmail = form.get('userEmail')
  toggleError('js-form-registration-user-email', !userEmail)

  console.log(userName, userEmail)
}
document
  .getElementById('js-form-registration')
  ?.addEventListener('submit', registration)
document.addEventListener('submit', (event) => {
  event.target.reset()
})

//! валідація форми емейл ВАЖЛИВО
// const email = document.getElementById('js-form-registration-user-email')

// email.addEventListener('input', function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity('D')
//   } else {
//     email.setCustomValidity('')
//   }
// })

// Fetch

const URL = 'https://jsonplaceholder.typicode.com/posts/1'
// const submitButton = document.getElementById('js-submit-button');

// submitButton.addEventListener('click', () => {
//   console.log(000);
//   fetch('URL')
//     .then(response => response.json())
//     .then(data => {
//       console.log('DATA', data);
//     });
// });
const test = document.getElementById('js-button-test')
test.addEventListener('click', () => {
  console.log(111)
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log('DATA', data)
    })
})
