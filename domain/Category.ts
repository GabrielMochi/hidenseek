export default class Category {

  public id: string
  public name: string

  constructor (name: string, id?: string) {
    this.name = name
    this.id = id
  }

}
