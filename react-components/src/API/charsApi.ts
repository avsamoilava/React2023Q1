export class CharsApi {
  static errorHandler(res: Response): Response {
    if (!res.ok) {
      console.log(res.status);
    }
    return res;
  }

  static async getAll(search?: string) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character${search && `?name=${search}`}`
    ).then((res) => CharsApi.errorHandler(res));
    return response.json();
  }
}
