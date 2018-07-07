import Item from './Item'
import User from './User'

export class Claim {

  public user: User
  public item: Item
  public argument: string
  public datetime: Date

  constructor (user: User, item: Item, argument: string, datetime = new Date(Date.now())) {
    this.user = user
    this.item = item
    this.argument = argument
    this.datetime = datetime
  }

}
