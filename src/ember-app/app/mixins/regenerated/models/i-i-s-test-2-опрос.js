import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодОпр: DS.attr('number'),
  название: DS.attr('string')
});

export let ValidationRules = {
  кодОпр: {
    descriptionKey: 'models.i-i-s-test-2-опрос.validations.кодОпр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-test-2-опрос.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОпросE', 'i-i-s-test-2-опрос', {
    кодОпр: attr('Код опр', { index: 0 }),
    название: attr('Название', { index: 1 })
  });

  modelClass.defineProjection('ОпросL', 'i-i-s-test-2-опрос', {
    кодОпр: attr('Код опр', { index: 0 }),
    название: attr('Название', { index: 1 })
  });
};
