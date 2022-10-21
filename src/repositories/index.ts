import { Context } from '@nuxt/types'
import Characters, { IRepositoryCharacters } from "repositories/Characters";

export type repositoriesType = {
  characters: IRepositoryCharacters
}

const repositories = (ctx: Context): repositoriesType => ({
  characters: new Characters(ctx.$services.common.http),
})
export default repositories

