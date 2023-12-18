import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  опрос: DS.belongsTo('i-i-s-test-2-опрос', { inverse: null, async: false }),
  список: DS.hasMany('i-i-s-test-2-список', { inverse: 'анкетирование', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-test-2-анкетирование.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  опрос: {
    descriptionKey: 'models.i-i-s-test-2-анкетирование.validations.опрос.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  список: {
    descriptionKey: 'models.i-i-s-test-2-анкетирование.validations.список.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АнкетированиеE', 'i-i-s-test-2-анкетирование', {
    дата: attr('Дата', { index: 0 }),
    список: hasMany('i-i-s-test-2-список', 'Список', {
      
    })
  });

  modelClass.defineProjection('АнкетированиеL', 'i-i-s-test-2-анкетирование', {
    дата: attr('Дата', { index: 0 })
  });
};
