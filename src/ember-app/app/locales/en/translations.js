import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        books: {
          caption: 'books',
          title: 'books',
          'new-platform-sand-box-test-country-l': {
            caption: 'new-platform-sand-box-test-country-l',
            title: 'new-platform-sand-box-test-country-l'
          },
          'new-platform-sand-box-test-book-l': {
            caption: 'new-platform-sand-box-test-book-l',
            title: 'new-platform-sand-box-test-book-l'
          },
          'new-platform-sand-box-test-author-l': {
            caption: 'new-platform-sand-box-test-author-l',
            title: 'new-platform-sand-box-test-author-l'
          },
          'new-platform-sand-box-test-language-l': {
            caption: 'new-platform-sand-box-test-language-l',
            title: 'new-platform-sand-box-test-language-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
