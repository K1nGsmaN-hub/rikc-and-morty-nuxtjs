import { Context } from '@nuxt/types'

type messageType = {
  [key: number]: string
}

export interface IErrorHandler {
  onError(code: keyof messageType): void
}

export default class ErrorHandler {
  private message: messageType = {
    401: 'Пожалуйста авторизуйтесь, чтобы выполнить это действие.',
    402: 'Для данного действия необходима оплата.',
    403: 'Действие запрещено.',
    404: 'Действие к которому вы обратились не существует.',
    405: 'Действие к которому вы обратились не поддерживается.',
    423: 'Действие к которому вы обратились заблокировано.',
    500: 'Увы, у нас возникла техническая неполадка. Пожалуйста, попробуйте позже.',
    501: 'Данное действие не может выполнится.',
    502: 'Время ожидания истекло. Попробуйте повторить действие.',
    503: 'В данный момент сервис не доступен для работы. Извиняемся, за предоставленные неудобства.',
  }

  constructor(private $error: Context['error']) {}

  /**
   * Обработка ошибки перехваченный с axios
   * @param code
   * @type number | string
   */
  onError(code: keyof messageType) {
    if (this.message[code]) {
      this.$error({
        statusCode: Number(code),
        message: this.message[code],
      })
    }
  }
}
