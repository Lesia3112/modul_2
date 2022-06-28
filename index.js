// modal window

const modal = () => {
  document.getElementById("js-header-block").classList.toggle("show");
};
document.getElementById("js-header-burger")?.addEventListener("click", modal);

// !Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  // effect: 'flip',
  // EffectFlip: {
  //   slideShadows: false,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // If we need pagination

  pagination: {
    el: ".swiper-pagination",
    clicable: true,
  },
});

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
console.log("9999999999");
window.initMap = function () {
  const location = { lat: 40.622112332807006, lng: -74.03019098518402 };
  const el = document.getElementById("js-map");
  console.log('el',el);
  const map = new google.maps.Map(el, {
    zoom: 15,
    center: location,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#F5F5F5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#F5F5F5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#BDBDBD",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#EEEEEE",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#E5E5E5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9E9E9E",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#FFFFFF",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#DADADA",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9E9E9E",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#E5E5E5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#EEEEEE",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#C9C9C9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9E9E9E",
          },
        ],
      },
    ],
  });
};

// form registration
const toggleError = (id, error) => {
  const el = document.getElementById(id);
  error ? el.classList.add("error") : el.classList.remove("error");
};
// form registration
// Get Dom element
const registration = (event) => {
  // відміна стандартної поведінки форми
  event.preventDefault();

  const form = new FormData(event.target);

  const userName = form.get("userName");
  toggleError("js-form-registration-user-name", !userName);

  const userEmail = form.get("userEmail");
  toggleError("js-form-registration-user-email", !userEmail);

  console.log(userName, userEmail);
};
document
  .getElementById("js-form-registration")?.addEventListener("submit", registration);
document.addEventListener("submit", (event) => {
  event.target.reset();
});
