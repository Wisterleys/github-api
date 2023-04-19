import { UserContract } from '../contracts/user.contract';
import { Entity } from './core/entity.model';
// import { People } from './people.model';

export class User extends Entity {
  constructor(
    public address?: string,
    public city?: string,
    public city_id?: number,
    public created_at?: string,
    public email?: string,
    public email_verified_at?: string,
    public is_active?: number,
    public name?: string,
    public nickname?: string,
    public nif?: string,
    public person_id?: number,
    public phone?: string,
    public updated_at?: string,
    public zip_code?: string
  ) // public people: People = new People()
  {
    super();
  }
  public static fromJson(obj:UserContract):User{
    return new User(
      obj.address,
      obj.city,
      obj.city_id,
      obj.created_at,
      obj.email,
      obj.email_verified_at,
      obj.is_active,
      obj.name,
      obj.nickname,
      obj.nif,
      obj.person_id,
      obj.phone,
      obj.updated_at,
      obj.zip_code
    )
  }
}
