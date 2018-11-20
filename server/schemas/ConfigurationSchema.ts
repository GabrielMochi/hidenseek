import fs from 'fs'
import path from 'path'
import { ModelType, prop, Typegoose } from 'typegoose'
import { createDefaultSchemaOption } from './../util/typegooseTools'

const contractFile = fs.readFileSync(path.join(__dirname, '..', 'assets', 'contrato_template.rtf'))

export class ConfigurationSchema extends Typegoose {

  @prop({ required: true, minlength: 1, maxlength: 64 })
  public companyName: string

  @prop({ default: false })
  public guests?: boolean

  @prop({ default: contractFile })
  public contractFile?: Buffer

  @prop()
  public distinctIdPattern?: RegExp

}

export const ConfigurationModel: ModelType<ConfigurationSchema> = new ConfigurationSchema()
  .getModelForClass(ConfigurationSchema, {
    schemaOptions: createDefaultSchemaOption<ConfigurationSchema>()
  })
