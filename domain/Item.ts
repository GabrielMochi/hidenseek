import Category from './Category'
import Local from './Local'
import User from './User'

export default class Item {

  public id: string
  public title: string
  public description: string
  public thumbnail: string
  public employee: User
  public local: Local
  public foundDate: Date
  public categories: Category[]

  constructor (
    id: string,
    title: string,
    description: string,
    thumbnail: string,
    employee: User,
    local: Local,
    foundDate: Date = new Date(),
    categories: Category[] = []
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.thumbnail = thumbnail
    this.employee = employee
    this.local = local
    this.foundDate = foundDate
    this.categories = categories
  }

}
