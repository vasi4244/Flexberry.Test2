import {
  defineNamespace,
  defineProjections,
  Model as СписокMixin
} from '../mixins/regenerated/models/i-i-s-test-2-список';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СписокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
