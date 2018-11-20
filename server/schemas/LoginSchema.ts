import PasswordValidator from 'password-validator'
import { ModelType, prop, Typegoose } from 'typegoose'
import { createDefaultSchemaOption } from './../util/typegooseTools'

const passwordValidator = new PasswordValidator()

passwordValidator
  .is().min(8)
  .is().max(64)
  .has().digits()
  .has().letters()
  .has().lowercase()
  .has().uppercase()
  .has().not().spaces()

export class LoginSchema extends Typegoose {

  @prop({ required: true, unique: true, minlength: 1, maxlength: 256 })
  public username: string

  @prop({
    required: true,
    minlength: 8,
    maxlength: 64,
    validate: (value) => passwordValidator.validate(value)
  })
  public password: string

}

export const LoginModel: ModelType<LoginSchema> = new LoginSchema()
  .getModelForClass(LoginSchema, {
    schemaOptions: createDefaultSchemaOption<LoginSchema>()
  })
