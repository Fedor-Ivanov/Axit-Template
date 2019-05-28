
document.querySelector('.features-tabs').addEventListener('click', fTabs);

function fTabs(event) {
  if (event.target.className == 'features__tab-item') {
    var dataTab = event.target.getAttribute('data-tab');
    var tabElem = document.getElementsByClassName('features__tab-item');
    for (var i = 0; i < tabElem.length; i++) {
      tabElem[i].classList.remove('features__tab-item_active');
    }
    event.target.classList.add('features__tab-item_active');
    var tabContent = document.getElementsByClassName('features-tabs-content');
    for (var i = 0; i < tabContent.length; i++) {
      if (dataTab == i) {
        tabContent[i].style.display = 'flex';
      } else {
        tabContent[i].style.display = 'none';
      }
    }
  }
}

$(document).ready(function () {
  $('.process__items-wrap').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1111,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.pricing__tabs-wrap').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1111,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.testemonials__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1111,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $('.navigation__button').click(function () {
    $('.navigation').toggleClass('navigation_active');
    $('.navigation__links').toggleClass('navigation__links_active');
    $('.navigation__button_active').toggleClass('fa-bars, fa-times');
  });

  $('.navigation__links-item').click(function () {
    $('.navigation').removeClass('navigation_active');
    $('.navigation__links').removeClass('navigation__links_active');
    $('.navigation__button_active').toggleClass('fa-bars, fa-times');
  });

  $(".form__input").change(function () {

    if ($(this).val()) {
      $(this).next('.form__input-label').addClass('form__input-label_valid') && $(this).next('.form__input-label-contact').addClass('form__input-label-contact_valid');
    } else {
      $(this).next('.form__input-label').removeClass('form__input-label_valid') && $(this).next('.form__input-label-contact').removeClass('form__input-label-contact_valid');
    }

  });

});

