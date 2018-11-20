import { ModelType, prop, Typegoose } from 'typegoose'
import { createDefaultSchemaOption } from './../util/typegooseTools'

export class CategorySchema extends Typegoose {

  @prop({ required: true, unique: true, minlength: 1, maxlength: 64 })
  public name: string

}

export const CategoryModel: ModelType<CategorySchema> = new CategorySchema()
  .getModelForClass(CategorySchema, {
    schemaOptions: createDefaultSchemaOption<CategorySchema>()
  })
