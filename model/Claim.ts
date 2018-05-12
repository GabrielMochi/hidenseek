import User from './User';
import Item from './Item';

export class Claim {

  private _user: User;
  private _item: Item;
  private _argument: string;

  constructor(user: User, item: Item, argument: string) {
    this._user = user;
    this._item = item;
    this._argument = argument;
  }

  /**
   * Getter user
   * @return {User}
   */
  public get user(): User {
    return this._user;
  }

  /**
   * Getter item
   * @return {Item}
   */
  public get item(): Item {
    return this._item;
  }

  /**
   * Getter argument
   * @return {string}
   */
  public get argument(): string {
    return this._argument;
  }

  /**
   * Setter user
   * @param {User} value
   */
  public set user(value: User) {
    this._user = value;
  }

  /**
   * Setter item
   * @param {Item} value
   */
  public set item(value: Item) {
    this._item = value;
  }

  /**
   * Setter argument
   * @param {string} value
   */
  public set argument(value: string) {
    this._argument = value;
  }

}
