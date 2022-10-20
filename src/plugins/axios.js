// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Context } from '@nuxt/types'

/**
 * @param {Context} context
 */
export default function (context) {
  context.$axios.setHeader(
    'Accept-Language',
    context.app.i18n.locales.find(
      (item) => item.code === context.app.i18n.locale
    ).code
  )

  context.$axios.onError((error) => {
    const code = error.code || error.response?.status

    if (code) {
      context.$services.common.error.onError(+code)
    }

    return Promise.reject(error.response?.data || error)
  })
}
