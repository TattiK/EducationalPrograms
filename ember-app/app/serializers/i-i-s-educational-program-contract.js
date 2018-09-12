import { Serializer as ContractSerializer } from
  '../mixins/regenerated/serializers/i-i-s-educational-program-contract';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ContractSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
