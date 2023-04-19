import { UserModel } from 'src/app/models/user.model';
import { CryptographyUtil } from 'src/app/utils/cryptography/cryptography.util';


export class AuthStorage {

  private static userStorageKey = 'key.user';
  private static tokenStorageKey = 'key.token';

  public static setUser(user: UserModel) {
    localStorage.setItem(this.userStorageKey, CryptographyUtil.encrypt(user));
  }
  
  public static getUser() {
    const data = localStorage.getItem(this.userStorageKey);
    const decrypted = CryptographyUtil.decrypt(data);

    return decrypted ? decrypted : null;
  }
  
  public static removeUser(): void {
    localStorage.removeItem(this.userStorageKey);
  }
  
  public static setToken(token: string) {
    localStorage.setItem(this.tokenStorageKey, CryptographyUtil.encrypt(token));
  }
  
  public static getToken(): string {
    const data = localStorage.getItem(this.tokenStorageKey);
    const decrypted = CryptographyUtil.decrypt(data);
    
    return decrypted ? decrypted : null;
  }

  public static removeToken(): void {
    localStorage.removeItem(this.tokenStorageKey);
  }

  public static isAuthenticated(): boolean {
    return AuthStorage.getToken() != null;
  }

  public static clear() {
    localStorage.clear();
  }

}
