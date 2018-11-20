import { ModelType, prop, Ref, Typegoose } from 'typegoose'
import { createDefaultSchemaOption } from './../util/typegooseTools'
import { ItemSchema } from './ItemSchema'
import { UserSchema } from './UserSchema'

export class ClaimSchema extends Typegoose {

  @prop({ required: true, minlength: 1, maxlength: 1024 })
  public argument: string

  @prop({ required: true, ref: UserSchema })
  public user: Ref<UserSchema>

  @prop({ required: true, ref: ItemSchema })
  public item: Ref<ItemSchema>

}

export const ClaimModel: ModelType<ClaimSchema> = new ClaimSchema()
  .getModelForClass(ClaimSchema, {
    schemaOptions: createDefaultSchemaOption()
  })
