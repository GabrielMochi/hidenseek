import Identifiable from './Identifiable'

export default abstract class MultiIdentifiable {

  public firstIdentifier: Identifiable
  public secondIdentifier: Identifiable

  constructor (firstIdentifier: Identifiable, secondIdentifier: Identifiable) {
    this.firstIdentifier = firstIdentifier
    this.secondIdentifier = secondIdentifier
  }

}
