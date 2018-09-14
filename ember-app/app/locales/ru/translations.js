import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Образовательные программы',

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
            caption: '',
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
        'application-name': 'Образовательные программы',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Образовательные программы',
          title: 'Образовательные программы'
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
        'образовательные-программы': {
          caption: 'Образовательные программы',
          title: 'Образовательные программы',
          'i-i-s-educational-program-semestr-l': {
            caption: 'Список семестров',
            title: ''
          },
          'i-i-s-educational-program-contract-l': {
            caption: 'Список контрактов',
            title: ''
          }
        },
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
    'i-i-s-educational-program-contract-l': IISEducationalProgramContractLForm,
    'i-i-s-educational-program-semestr-l': IISEducationalProgramSemestrLForm,
    'i-i-s-educational-program-contract-e': IISEducationalProgramContractEForm,
    'i-i-s-educational-program-semestr-e': IISEducationalProgramSemestrEForm,
  },

});

export default translations;
