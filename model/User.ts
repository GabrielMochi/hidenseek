export default class User {

  private _id: number;
  private _name: string;
  private _email: string;
  private _phone: string;
  private _thumbnailURL: string;

  constructor (id: number, name: string, email: string, phone: string, thumbnailURL: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._thumbnailURL = thumbnailURL;
  }

  public get id (): number {
    return this._id;
  }

  public set id (value: number) {
    this._id = value;
  }

  public get name (): string {
    return this._name;
  }

  public set name (value: string) {
    this._name = value;
  }

  public get email (): string {
    return this._email;
  }

  public set email (value: string) {
    this._email = value;
  }

  public get phone (): string {
    return this._phone;
  }

  public set phone (value: string) {
    this._phone = value;
  }

  public get thumbnailURL (): string {
    return this._thumbnailURL;
  }

  public set thumbnailURL (thumbnailURL: string) {
    this._thumbnailURL = thumbnailURL;
  }

}
