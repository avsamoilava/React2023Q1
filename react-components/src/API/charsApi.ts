export class CharsApi {
  static async getAll() {
    const response = fetch(`https://rickandmortyapi.com/api/character`);
    return (await response).json();
  }
}
