export default class Item {

  public id: number
  public imgSrc: string
  public category: string
  public description: string

  constructor (id: number, imgSrc: string, category: string, description: string) {
    this.id = id
    this.imgSrc = imgSrc
    this.category = category
    this.description = description
  }

}
