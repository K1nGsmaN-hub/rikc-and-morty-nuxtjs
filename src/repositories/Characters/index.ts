import { IHttpClient, IHttpResponse } from "services/common/HttpClient";

export interface IRepositoryCharacters {
  fetchCharacters(): Promise<IHttpResponse>
}

export default class Characters implements IRepositoryCharacters {
  constructor(private http: IHttpClient) {}

  async fetchCharacters(): Promise<IHttpResponse> {
    return await this.http.get('/character')
  }

  async searchCharacters(name: string): Promise<IHttpResponse> {
    return await this.http.get(`/character?name=${name}`)
  }
}
