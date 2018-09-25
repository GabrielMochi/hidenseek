import Item from './Item'

export default class Category {

  public id: number
  public name: string
  public items: Item[]

  constructor (id: number, name: string, items: Item[] = []) {
    this.id = id
    this.name = name
    this.items = items
  }

}
