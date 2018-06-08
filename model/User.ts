export default class User {

  public id: number
  public name: string
  public email: string
  public phone: string
  public thumbnailURL: string

  constructor (id: number, name: string, email: string, phone: string, thumbnailURL: string) {
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.thumbnailURL = thumbnailURL
  }

}
