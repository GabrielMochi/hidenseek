import { Status } from 'domain/Evaluation'
import { ModelType, prop, Ref, Typegoose } from 'typegoose'
import { createDefaultSchemaOption } from '.'
import { ClaimSchema } from './ClaimSchema'
import { UserSchema } from './UserSchema'

export class EvaluationSchema extends Typegoose {

  @prop({ enum: Status })
  public status?: Status

  @prop({ required: true, ref: UserSchema })
  public employee: Ref<UserSchema>

  @prop({ required: true, ref: ClaimSchema })
  public claim: Ref<ClaimSchema>

}

export const EvaluationModel: ModelType<EvaluationSchema> = new EvaluationSchema()
  .getModelForClass(EvaluationSchema, {
    schemaOptions: createDefaultSchemaOption<EvaluationSchema>()
  })
