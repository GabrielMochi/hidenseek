export default class Configuration {

  public companyName: string
  public guests: boolean
  public contract: string
  public distinctIdPatter: RegExp

  constructor (
    companyName: string,
    guests: boolean,
    contract: string,
    distinctIdPatter: RegExp
  ) {
    this.companyName = companyName
    this.guests = guests
    this.contract = contract
    this.distinctIdPatter = distinctIdPatter
  }

}
