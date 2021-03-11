import { Serializer as LanguageSerializer } from
  '../mixins/regenerated/serializers/new-platform-sand-box-test-language';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LanguageSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
