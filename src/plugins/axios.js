// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Context } from '@nuxt/types'

/**
 * @param {Context} context
 */
export default function (context) {
  context.$axios.onError((error) => {
    const code = error.code || error.response?.status

    if (code) {
      context.$services.common.error.onError(+code)
    }

    return Promise.reject(error.response?.data || error)
  })
}
