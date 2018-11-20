import { SchemaOptions } from 'mongoose'
import { InstanceType, Typegoose } from 'typegoose'

export function createDefaultSchemaOption<T extends Typegoose> (): SchemaOptions {
  return {
    versionKey: false,
    timestamps: true,
    toObject: {
      transform (doc: any, ret: InstanceType<T>) {
        ret.id = ret._id
        delete ret._id
      }
    },
    toJSON: {
      transform (doc: any, ret: InstanceType<T>) {
        ret.id = ret._id
        delete ret._id
      }
    }
  }
}
