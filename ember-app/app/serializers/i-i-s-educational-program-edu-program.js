import { Serializer as EduProgramSerializer } from
  '../mixins/regenerated/serializers/i-i-s-educational-program-edu-program';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(EduProgramSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
