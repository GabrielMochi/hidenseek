import Claim from './Claim'
import User from './User'

export default class Evaluation {

  public _id: string
  public employee: User
  public claim: Claim
  public status: Status
  public date: Date

  constructor (
    _id: string,
    employee: User,
    claim: Claim,
    status: Status = Status.NOT_EVALUATED,
    date: Date = new Date()
  ) {
    this._id = _id
    this.employee = employee
    this.claim = claim
    this.status = status
    this.date = date
  }

}

export enum Status {

  APPROVED = 'APPROVED',
  NOT_APPROVED = 'NOT_APPROVED',
  NOT_EVALUATED = 'NOT_EVALUATED'

}
