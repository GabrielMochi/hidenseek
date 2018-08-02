import Identifiable from './Identifiable'
import Item from './Item'
import User from './User'

export default class Evaluation extends Identifiable {

  public status: EvaluationStatus
  public datetime: Date
  public claimUser: User
  public claimItem: Item
  public admUser: User

  constructor (
    id: number,
    claimUser: User,
    claimItem: Item,
    admUser: User,
    status: EvaluationStatus = EvaluationStatus.NOT_EVALUATED,
    datetime: Date = new Date(Date.now())
  ) {
    super(id)
    this.status = status
    this.datetime = datetime
    this.claimUser = claimUser
    this.claimItem = claimItem
    this.admUser = admUser
  }

}

export enum EvaluationStatus {
  APPROVED = 'APPROVED',
  NOT_APPROVED = 'NOT_APPROVED',
  NOT_EVALUATED = 'NOT_EVALUATED'
}
