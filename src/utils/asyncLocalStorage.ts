export const asyncLocalStorage = {
  async setItem (key: any, value: any) {
      return localStorage.setItem(key, value);
  },
  async getItem (key: any) {
      return localStorage.getItem(key);
  }
}
