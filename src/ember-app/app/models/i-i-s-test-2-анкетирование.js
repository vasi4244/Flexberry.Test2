import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АнкетированиеMixin
} from '../mixins/regenerated/models/i-i-s-test-2-анкетирование';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АнкетированиеMixin, Validations, {
});

defineProjections(Model);

export default Model;
