export default class User {

  public id: string
  public distinctId: string
  public email: string
  public name: string
  public thumbnail: string
  public permission: Permission

  constructor (
    id: string,
    distinctId: string,
    email: string,
    name: string,
    thumbnail: string,
    permission: Permission = Permission.LOW
  ) {
    this.id = id
    this.distinctId = distinctId
    this.email = email
    this.name = name
    this.thumbnail = thumbnail
    this.permission = permission
  }

}

export enum Permission {

  LOW = 'LOW',
  HIGH = 'HIGH',
  TOTAL = 'TOTAL'

}
