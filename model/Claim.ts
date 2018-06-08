import Item from './Item'
import User from './User'

export class Claim {

  public user: User
  public item: Item
  public argument: string

  constructor (user: User, item: Item, argument: string) {
    this.user = user
    this.item = item
    this.argument = argument
  }

}
