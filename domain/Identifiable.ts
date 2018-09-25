export default abstract class Identifiable {

  public id: number | string

  constructor (id: number | string) {
    this.id = id
  }

}
