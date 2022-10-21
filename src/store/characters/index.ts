import { ActionTree, MutationTree } from 'vuex'
import { ICharactersInfo, ICharacters } from "types/DTO/Characters";

export const state = () => ({
  characters: [] as ICharacters[],
  charactersInfo: [] as ICharactersInfo,
})

export type stateT = ReturnType<typeof state>

export const mutations: MutationTree<stateT> = {
  setCharacters(state, payload: ICharacters[]) {
    state.characters = payload
  },
  setCharactersInfo(state, payload: ICharactersInfo) {
    state.charactersInfo = payload
  },
}


export const actions: ActionTree<stateT, stateT> = {
  async fetchCharacters({ commit }) {
    const res = await this.$repositories.characters.fetchCharacters()
    commit('setCharacters', res.results)
    commit('charactersInfo', res.info)
  },
  async searchCharacters({ commit }, name: string) {
    const res = await this.$repositories.characters.searchCharacters(name)
    commit('setCharacters', res.results)
  }
}

export const getters = {
  getCharacters(state: stateT) {
    return state.characters
  },
  getCharactersInfo(state: stateT) {
    return state.charactersInfo
  },
}
