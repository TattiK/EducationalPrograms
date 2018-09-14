import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISEducationalProgramContractLForm from './forms/i-i-s-educational-program-contract-l';
import IISEducationalProgramSemestrLForm from './forms/i-i-s-educational-program-semestr-l';
import IISEducationalProgramContractEForm from './forms/i-i-s-educational-program-contract-e';
import IISEducationalProgramSemestrEForm from './forms/i-i-s-educational-program-semestr-e';
import IISEducationalProgramContractModel from './models/i-i-s-educational-program-contract';
import IISEducationalProgramEduProgramModel from './models/i-i-s-educational-program-edu-program';
import IISEducationalProgramSemestrModel from './models/i-i-s-educational-program-semestr';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-educational-program-contract': IISEducationalProgramContractModel,
    'i-i-s-educational-program-edu-program': IISEducationalProgramEduProgramModel,
    'i-i-s-educational-program-semestr': IISEducationalProgramSemestrModel,
  },

  'application-name': 'Educational programs',

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
            caption: '',
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
        'application-name': 'Educational programs',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Educational programs',
          title: 'Educational programs'
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
        'образовательные-программы': {
          caption: 'Educational programs',
          title: 'Educational programs',
          'i-i-s-educational-program-semestr-l': {
            caption: 'Semestr list',
            title: 'Semestr list'
          },
          'i-i-s-educational-program-contract-l': {
            caption: 'Contract list',
            title: 'Contract list'
          }
        },
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
    'i-i-s-educational-program-contract-l': IISEducationalProgramContractLForm,
    'i-i-s-educational-program-semestr-l': IISEducationalProgramSemestrLForm,
    'i-i-s-educational-program-contract-e': IISEducationalProgramContractEForm,
    'i-i-s-educational-program-semestr-e': IISEducationalProgramSemestrEForm,
  },

});

export default translations;
