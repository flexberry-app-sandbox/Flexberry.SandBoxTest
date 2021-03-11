import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import NewPlatformSandBoxTestAuthorLForm from './forms/new-platform-sand-box-test-author-l';
import NewPlatformSandBoxTestBookLForm from './forms/new-platform-sand-box-test-book-l';
import NewPlatformSandBoxTestCountryLForm from './forms/new-platform-sand-box-test-country-l';
import NewPlatformSandBoxTestLanguageLForm from './forms/new-platform-sand-box-test-language-l';
import NewPlatformSandBoxTestAuthorEForm from './forms/new-platform-sand-box-test-author-e';
import NewPlatformSandBoxTestBookEForm from './forms/new-platform-sand-box-test-book-e';
import NewPlatformSandBoxTestCountryEForm from './forms/new-platform-sand-box-test-country-e';
import NewPlatformSandBoxTestLanguageEForm from './forms/new-platform-sand-box-test-language-e';
import NewPlatformSandBoxTestAuthorModel from './models/new-platform-sand-box-test-author';
import NewPlatformSandBoxTestBookModel from './models/new-platform-sand-box-test-book';
import NewPlatformSandBoxTestCountryModel from './models/new-platform-sand-box-test-country';
import NewPlatformSandBoxTestLanguageModel from './models/new-platform-sand-box-test-language';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'new-platform-sand-box-test-author': NewPlatformSandBoxTestAuthorModel,
    'new-platform-sand-box-test-book': NewPlatformSandBoxTestBookModel,
    'new-platform-sand-box-test-country': NewPlatformSandBoxTestCountryModel,
    'new-platform-sand-box-test-language': NewPlatformSandBoxTestLanguageModel
  },

  'application-name': 'Books',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books',
          title: 'Books'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        books: {
          caption: 'Books',
          title: 'Books',
          'new-platform-sand-box-test-country-l': {
            caption: 'Country',
            title: ''
          },
          'new-platform-sand-box-test-book-l': {
            caption: 'Book',
            title: ''
          },
          'new-platform-sand-box-test-author-l': {
            caption: 'Author',
            title: ''
          },
          'new-platform-sand-box-test-language-l': {
            caption: 'Language',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'new-platform-sand-box-test-author-l': NewPlatformSandBoxTestAuthorLForm,
    'new-platform-sand-box-test-book-l': NewPlatformSandBoxTestBookLForm,
    'new-platform-sand-box-test-country-l': NewPlatformSandBoxTestCountryLForm,
    'new-platform-sand-box-test-language-l': NewPlatformSandBoxTestLanguageLForm,
    'new-platform-sand-box-test-author-e': NewPlatformSandBoxTestAuthorEForm,
    'new-platform-sand-box-test-book-e': NewPlatformSandBoxTestBookEForm,
    'new-platform-sand-box-test-country-e': NewPlatformSandBoxTestCountryEForm,
    'new-platform-sand-box-test-language-e': NewPlatformSandBoxTestLanguageEForm
  },

});

export default translations;
