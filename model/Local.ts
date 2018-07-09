import Identifiable from './Identifiable'

export default class Local extends Identifiable {

  public description: string

  constructor (id: number, description: string) {
    super(id)
    this.description = description
  }

}
