// burger menu
const burgerMenu = document.querySelector('.burger__menu');

if(burgerMenu){
  const bodyMenu = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.header__nav-link');


  burgerMenu.addEventListener('click', function(){
  document.body.classList.toggle('_lock');
  burgerMenu.classList.toggle('_active');
  bodyMenu.classList.toggle('_active');

  if(menuLinks.length > 0) {

    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuClick)
    })

    function onMenuClick() {
      if(burgerMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        burgerMenu.classList.remove('_active');
        bodyMenu.classList.remove('_active');
      }
    }
  }

  });
}

// lang

let arrLang = {
  'home': {
    'en': 'Home',
    'ru': 'Домашняя'
  },

  'about': {
    'en': 'About me',
    'ru': 'Обо мне'
  },

  'skills': {
    'en': 'Skills',
    'ru': 'Навыки'
  },

  'portfolio': {
    'en': 'Portfolio',
    'ru': 'Портфолио'
  },

  'contacts': {
    'en': 'Contacts',
    'ru': 'Контакты'
  },

  'title': {
    'en': 'Denis Novik',
    'ru': 'Денис Новик'
  },

  'descr': {
    'en': 'UX | UI designer 24 years old, Minsk',
    'ru': 'UX | UI-дизайнер 24 года, Минск'
  },

  'about-title': {
    'en': 'About me',
    'ru': 'Обо мне'
  },

  'about-descr-1': {
    'en': 'Hi, I\'m Denis – UX/UI designer from Minsk. I\'m interested in design and everything connected with it.',
    'ru': 'Привет, я Денис — UX/UI дизайнер из Минска. Интересуюсь дизайном и всем, что с ним связано.'
  },

  'about-descr-2': {
    'en': 'I\'m studying at courses "Web and mobile design interfaces" in IT-Academy.',
    'ru': 'Я учусь на курсах "Веб и мобильный дизайн интерфейсов" в IT-Академии.'
  },

  'about-descr-3': {
    'en': 'Ready to implement excellent projects with wonderful people.',
    'ru': 'Готов реализовать отличные проекты с замечательными людьми.'
  },

  'skills-title': {
    'en': 'Skills',
    'ru': 'Навыки'
  },

  'skills-subtitle': {
    'en': 'I work in such programs as',
    'ru': 'Я работаю в таких программах как'
  },

  'galery-title': {
    'en': 'Portfolio',
    'ru': 'Портфолио'
  },

  'galery-link-1': {
    'en': 'Online fashion store - Homepage',
    'ru': 'Интернет-магазин модной одежды - Домашняя страница'
  },

  'galery-link-2': {
    'en': 'Reebok Store - Concept',
    'ru': 'Магазин Reebok - Концепция'
  },

  'galery-link-3': {
    'en': 'Braun Landing Page - Concept',
    'ru': 'Braun Landing Page - Концепция'
  },

  'footer-title': {
    'en': 'Contacts',
    'ru': 'Контакты'
  },

  'footer-descr': {
    'en': 'Want to know more or just chat? You are welcome!',
    'ru': 'Хотите узнать больше или просто поболтать? Добро пожаловать!'
  },

  'footer-btn': {
    'en': 'Send message',
    'ru': 'Отправить сообщение'
  },

  '': {
    'en': '',
    'ru': ''
  },
}

const allLang = ['ru', 'en']

function getValue(btn) {
let lang = btn.value;
location.href = window.location.pathname + "#" + lang;
location.reload();
}

function changeLanguage(){
let hash = window.location.hash;
hash = hash.substring(1);
if (!allLang.includes(hash)) {
location.href = window.location.pathname + "#en";
location.reload();
}
lang = hash;



for (let key in arrLang) {
document.querySelector('.lng-' + key).innerHTML = arrLang[key][hash];
};
};
changeLanguage();

