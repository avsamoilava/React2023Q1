export class CharsApi {
  static async getAll(search?: string) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character${search && `?name=${search}`}`
    );
    return response.json();
  }
}
