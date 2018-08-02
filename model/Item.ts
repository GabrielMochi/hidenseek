import Category from './Category'
import Identifiable from './Identifiable'
import Local from './Local'
import User from './User'

export default class Item extends Identifiable {

  public description: string
  public photoURL: string
  public datetime: Date
  public admuser: User
  public category: Category
  public local: Local

  /**
   * @param id Item identifier.
   * @param description The description of the lost item.
   * @param user The user who registered the item.
   * @param category Item category.
   * @param local The local of the lost item.
   * @param datetime The date when the item was lost.
   */
  constructor (
    id: number,
    description: string,
    photoURL: string,
    user: User,
    category: Category,
    local: Local,
    datetime: Date = new Date(Date.now())
  ) {
    super(id)
    this.description = description
    this.photoURL = photoURL
    this.datetime = datetime
    this.admuser = user
    this.category = category
    this.local = local
  }

}
