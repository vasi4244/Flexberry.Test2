import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest_2АнкетированиеLForm from './forms/i-i-s-test-2-анкетирование-l';
import IISTest_2ДолжностьLForm from './forms/i-i-s-test-2-должность-l';
import IISTest_2НастройкаОпрLForm from './forms/i-i-s-test-2-настройка-опр-l';
import IISTest_2ОпросLForm from './forms/i-i-s-test-2-опрос-l';
import IISTest_2ОтделLForm from './forms/i-i-s-test-2-отдел-l';
import IISTest_2СотрудникиLForm from './forms/i-i-s-test-2-сотрудники-l';
import IISTest_2АнкетированиеEForm from './forms/i-i-s-test-2-анкетирование-e';
import IISTest_2ДолжностьEForm from './forms/i-i-s-test-2-должность-e';
import IISTest_2НастройкаОпрEForm from './forms/i-i-s-test-2-настройка-опр-e';
import IISTest_2ОпросEForm from './forms/i-i-s-test-2-опрос-e';
import IISTest_2ОтделEForm from './forms/i-i-s-test-2-отдел-e';
import IISTest_2СотрудникиEForm from './forms/i-i-s-test-2-сотрудники-e';
import IISTest_2АнкетированиеModel from './models/i-i-s-test-2-анкетирование';
import IISTest_2ДолжностьModel from './models/i-i-s-test-2-должность';
import IISTest_2НастройкаОпрModel from './models/i-i-s-test-2-настройка-опр';
import IISTest_2ОпросModel from './models/i-i-s-test-2-опрос';
import IISTest_2ОтделModel from './models/i-i-s-test-2-отдел';
import IISTest_2СодержаниеModel from './models/i-i-s-test-2-содержание';
import IISTest_2СотрудникиModel from './models/i-i-s-test-2-сотрудники';
import IISTest_2СписокModel from './models/i-i-s-test-2-список';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-2-анкетирование': IISTest_2АнкетированиеModel,
    'i-i-s-test-2-должность': IISTest_2ДолжностьModel,
    'i-i-s-test-2-настройка-опр': IISTest_2НастройкаОпрModel,
    'i-i-s-test-2-опрос': IISTest_2ОпросModel,
    'i-i-s-test-2-отдел': IISTest_2ОтделModel,
    'i-i-s-test-2-содержание': IISTest_2СодержаниеModel,
    'i-i-s-test-2-сотрудники': IISTest_2СотрудникиModel,
    'i-i-s-test-2-список': IISTest_2СписокModel
  },

  'application-name': 'Test_2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
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
        'application-name': 'Test_2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test_2',
          title: 'Test_2'
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
        'test-2': {
          caption: 'Test_2',
          title: 'Test_2',
          'i-i-s-test-2-анкетирование-l': {
            caption: 'Анкетирование',
            title: ''
          },
          'i-i-s-test-2-опрос-l': {
            caption: 'Опрос',
            title: ''
          },
          'i-i-s-test-2-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-test-2-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-test-2-настройка-опр-l': {
            caption: 'Настройка опр',
            title: ''
          },
          'i-i-s-test-2-отдел-l': {
            caption: 'Отдел',
            title: ''
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
    'i-i-s-test-2-анкетирование-l': IISTest_2АнкетированиеLForm,
    'i-i-s-test-2-должность-l': IISTest_2ДолжностьLForm,
    'i-i-s-test-2-настройка-опр-l': IISTest_2НастройкаОпрLForm,
    'i-i-s-test-2-опрос-l': IISTest_2ОпросLForm,
    'i-i-s-test-2-отдел-l': IISTest_2ОтделLForm,
    'i-i-s-test-2-сотрудники-l': IISTest_2СотрудникиLForm,
    'i-i-s-test-2-анкетирование-e': IISTest_2АнкетированиеEForm,
    'i-i-s-test-2-должность-e': IISTest_2ДолжностьEForm,
    'i-i-s-test-2-настройка-опр-e': IISTest_2НастройкаОпрEForm,
    'i-i-s-test-2-опрос-e': IISTest_2ОпросEForm,
    'i-i-s-test-2-отдел-e': IISTest_2ОтделEForm,
    'i-i-s-test-2-сотрудники-e': IISTest_2СотрудникиEForm
  },

});

export default translations;
