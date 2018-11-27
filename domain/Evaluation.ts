import Claim from './Claim'
import User from './User'

export default class Evaluation {

  public id: string
  public employee: User
  public claim: Claim
  public status: Status
  public date: Date

  constructor (
    employee: User,
    claim: Claim,
    status: Status = Status.NOT_EVALUATED,
    date: Date = new Date(),
    id?: string
  ) {
    this.employee = employee
    this.claim = claim
    this.status = status
    this.date = date
    this.id = id
  }

}

export enum Status {

  APPROVED = 'APPROVED',
  NOT_APPROVED = 'NOT_APPROVED',
  NOT_EVALUATED = 'NOT_EVALUATED'

}
