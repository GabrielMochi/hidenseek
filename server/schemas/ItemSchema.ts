import { arrayProp, ModelType, prop, Ref, Typegoose } from 'typegoose'
import { createDefaultSchemaOption } from './../util/typegooseTools'
import { CategorySchema } from './CategorySchema'
import { LocalSchema } from './LocalSchema'
import { UserSchema } from './UserSchema'

export class ItemSchema extends Typegoose {

  @prop({ required: true, minlength: 1, maxlength: 144 })
  public description: string

  @prop({ required: true })
  public thumbnail: string

  @prop({ default: Date.now, validate: (value) => value <= new Date() })
  public foundDate?: Date

  @prop({ required: true, ref: LocalSchema })
  public local: Ref<LocalSchema>

  @prop({ required: true, ref: UserSchema })
  public employee: Ref<UserSchema>

  @arrayProp({ required: true, itemsRef: CategorySchema })
  public categories: Array<Ref<CategorySchema>>

}

export const ItemModel: ModelType<ItemSchema> = new ItemSchema()
  .getModelForClass(ItemSchema, {
    schemaOptions: createDefaultSchemaOption<ItemSchema>()
  })
