import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  опрос: DS.belongsTo('i-i-s-test-2-опрос', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-test-2-сотрудники', { inverse: null, async: false }),
  содержание: DS.hasMany('i-i-s-test-2-содержание', { inverse: 'настройкаОпр', async: false })
});

export let ValidationRules = {
  опрос: {
    descriptionKey: 'models.i-i-s-test-2-настройка-опр.validations.опрос.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-test-2-настройка-опр.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  содержание: {
    descriptionKey: 'models.i-i-s-test-2-настройка-опр.validations.содержание.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НастройкаОпрE', 'i-i-s-test-2-настройка-опр', {
    содержание: hasMany('i-i-s-test-2-содержание', 'Содержание', {
      вопрос: attr('Вопрос', { index: 0 }),
      вариант_1: attr('Вариант_1', { index: 1 }),
      вариант_2: attr('Вариант_2', { index: 2 }),
      вариант_3: attr('Вариант_3', { index: 3 })
    })
  });

  modelClass.defineProjection('НастройкаОпрL', 'i-i-s-test-2-настройка-опр', {
    
  });
};
