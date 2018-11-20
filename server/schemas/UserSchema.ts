import { ModelType, prop, Typegoose } from 'typegoose'
import { isEmail } from 'validator'
import { Permission } from './../../domain/User'
import { createDefaultSchemaOption } from './../util/typegooseTools'

export class UserSchema extends Typegoose {

  @prop({ required: true, unique: true, minlength: 1, maxlength: 64 })
  public distinctId: string

  @prop({ required: true, unique: true, minlength: 1, maxlength: 256 })
  public email: string

  @prop({ required: true, minlength: 1, maxlength: 256, validate: (value) => isEmail(value) })
  public name: string

  @prop()
  public thumbnail?: Buffer

  @prop({ enum: Permission, default: Permission.LOW as Permission })
  public permission?: Permission

}

export const UserModel: ModelType<UserSchema> = new UserSchema()
  .getModelForClass(UserSchema, {
    schemaOptions: createDefaultSchemaOption<UserSchema>()
  })
