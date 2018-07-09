import Identifiable from './Identifiable'

export default class Category extends Identifiable {

  public name: string

  constructor (id: number, name: string) {
    super(id)
    this.name = name
  }

}
