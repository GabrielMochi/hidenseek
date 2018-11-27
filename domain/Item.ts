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
  public categories: Category[]
  public foundDate: Date

  constructor (
    title: string,
    description: string,
    thumbnail: string,
    employee: User,
    local: Local,
    id?: string,
    categories: Category[] = [],
    foundDate: Date = new Date()
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.thumbnail = thumbnail
    this.employee = employee
    this.local = local
    this.categories = categories
    this.foundDate = foundDate
  }

}
