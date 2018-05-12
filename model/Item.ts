export default class Item {

  private _id: number;
  private _imgSrc: string;
  private _category: string;
  private _description: string;

  constructor (id: number, imgSrc: string, category: string, description: string) {
    this._id = id;
    this._imgSrc = imgSrc;
    this._category = category;
    this._description = description;
  }

  public get id (): number {
    return this._id;
  }

  public set id (value: number) {
    this._id = value;
  }

  public get imgSrc (): string {
    return this._imgSrc;
  }

  public set imgSrc (value: string) {
    this._imgSrc = value;
  }

  public get category (): string {
    return this._category;
  }

  public set category (value: string) {
    this._category = value;
  }

  public get description (): string {
    return this._description;
  }

  public set description (value: string) {
    this._description = value;
  }

}
