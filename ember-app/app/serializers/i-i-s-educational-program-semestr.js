import { Serializer as SemestrSerializer } from
  '../mixins/regenerated/serializers/i-i-s-educational-program-semestr';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SemestrSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
