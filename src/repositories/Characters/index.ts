import { IHttpClient } from "services/common/HttpClient";

export interface IRepositoryCharacters {
  fetchCharacters(): Promise<any>
  searchCharacters(name: string): Promise<any>
}

export default class Characters implements IRepositoryCharacters {
  constructor(private http: IHttpClient) {}

  async fetchCharacters(): Promise<any> {
    return await this.http.get('/character')
  }

  async searchCharacters(name: string): Promise<any> {
    return await this.http.get(`/character?name=${name}`)
  }
}
