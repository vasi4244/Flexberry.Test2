import { Serializer as СодержаниеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-2-содержание';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СодержаниеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
