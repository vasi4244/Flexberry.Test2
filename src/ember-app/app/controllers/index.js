import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test-2.caption'),
          title: i18n.t('forms.application.sitemap.test-2.title'),
          children: [{
            link: 'i-i-s-test-2-анкетирование-l',
            caption: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-анкетирование-l.caption'),
            title: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-анкетирование-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-test-2-опрос-l',
            caption: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-опрос-l.caption'),
            title: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-опрос-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-test-2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-сотрудники-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-test-2-должность-l',
            caption: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-должность-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-test-2-настройка-опр-l',
            caption: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-настройка-опр-l.caption'),
            title: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-настройка-опр-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-test-2-отдел-l',
            caption: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-отдел-l.caption'),
            title: i18n.t('forms.application.sitemap.test-2.i-i-s-test-2-отдел-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})