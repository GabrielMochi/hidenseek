import Identifiable from './Identifiable'

export default class Local extends Identifiable {

  public name: string

  constructor (id: number, description: string) {
    super(id)
    this.name = description
  }

}
