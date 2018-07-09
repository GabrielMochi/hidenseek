import Item from './Item'
import MultiIdentifiable from './MultiIdentifiable'
import User from './User'

export class Claim extends MultiIdentifiable {

  public argument: string
  public datetime: Date

  constructor (user: User, item: Item, argument: string, datetime = new Date(Date.now())) {
    super(user, item)
    this.argument = argument
    this.datetime = datetime
  }

}
