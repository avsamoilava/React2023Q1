export class CharsApi {
  static async getAll(search?: string) {
    const response = fetch(
      `https://rickandmortyapi.com/api/character${search && `?name=${search}`}`
    );
    return (await response).json();
  }
}
