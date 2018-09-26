import Item from './Item'
import User from './User'

export default class Claim {

  public id: string
  public argument: string
  public user: User
  public item: Item
  public date: Date

  constructor (id: string, argument: string, user: User, item: Item, date: Date = new Date()) {
    this.id = id
    this.argument = argument
    this.user = user
    this.item = item
    this.date = date
  }

}
