import Identifiable from './Identifiable'

export default class User extends Identifiable {

  public distinctId: string
  public email: string
  public name: string
  public thumbnail: string
  public permission: UserPermission

  constructor (
    id: number,
    distinctId: string,
    email: string,
    name: string,
    thumbnail: string,
    permission: UserPermission = UserPermission.LOW
  ) {
    super(id)
    this.distinctId = distinctId
    this.email = email
    this.name = name
    this.thumbnail = thumbnail
    this.permission = permission
  }

}

export enum UserPermission {
  LOW = 'LOW',
  HIGH = 'HIGH',
  TOTAL = 'TOTAL'
}
