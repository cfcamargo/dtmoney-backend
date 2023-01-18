import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public description : String

  @column()
  public amount : Number

  @column()
  public category : String

  @column()
  public type : 'recipe' | 'expense'

  @column.dateTime({ autoCreate: true })
  public date: DateTime
}
