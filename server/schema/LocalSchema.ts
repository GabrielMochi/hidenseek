import { ModelType, prop, Typegoose } from 'typegoose'
import { createDefaultSchemaOption } from '.'

export class LocalSchema extends Typegoose {

  @prop({ required: true, minlength: 1, maxlength: 64 })
  public name: string

}

export const LocalModel: ModelType<LocalSchema> = new LocalSchema()
  .getModelForClass(LocalSchema, {
    schemaOptions: createDefaultSchemaOption<LocalSchema>()
  })
