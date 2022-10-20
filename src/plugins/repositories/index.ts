import { Plugin } from '@nuxt/types'
import repositories, { repositoriesType } from 'repositories/index'

/**
 *
 * @param {Context} ctx
 * @param inject
 */
const plugin: Plugin = (ctx, inject) => {
  const r: repositoriesType = repositories(ctx)

  inject('repositories', r)
}

export default plugin
