import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодОтдела: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  кодОтдела: {
    descriptionKey: 'models.i-i-s-test-2-отдел.validations.кодОтдела.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-test-2-отдел.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтделE', 'i-i-s-test-2-отдел', {
    кодОтдела: attr('Код отдела', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });

  modelClass.defineProjection('ОтделL', 'i-i-s-test-2-отдел', {
    кодОтдела: attr('Код отдела', { index: 0 }),
    наименование: attr('Отдел', { index: 1 })
  });
};
