import { prop, Typegoose } from 'typegoose'

// name: { type: String, required: true, unique: true }

class CategorySchema extends Typegoose {

  @prop({ required: true, unique: true, minlength: 1, maxlength: 64 })
  public name: string

}

// (new CategorySchema().getModelForClass(CategorySchema)).set
