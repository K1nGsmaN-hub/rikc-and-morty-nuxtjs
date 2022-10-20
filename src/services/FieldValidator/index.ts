import { ISelectOption } from 'types/DTO/common/common'

export interface IFieldValidator {
  emailRegex: RegExp
  passwordRegex: RegExp
  urlRegex: RegExp

  email(email: string): boolean
  url(path: string): boolean
  required(value: string): boolean
  min(value: string, num: number): boolean
  selected(select: ISelectOption): boolean
  password(value: string): boolean
  bin(value: string): boolean
  emptyField(value: string): boolean
  minMax(value: number | undefined | string, min: number, max: number): boolean
  name(value: string): boolean
}

export default class FiledValidator implements IFieldValidator {
  emailRegex: RegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})/
  passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  urlRegex: RegExp = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/

  email(email: string) {
    return this.emailRegex.test(email)
  }

  url(path: string) {
    return this.urlRegex.test(path)
  }

  required(value: string) {
    return value.length > 0
  }

  min(value: string, num: number) {
    return !(value.length >= num)
  }

  password(password: string) {
    return this.passwordRegex.test(password)
  }

  bin(value: string) {
    return /^\d+$/.test(value) && value.length === 12
  }

  emptyField(value: string) {
    return value.length === 0
  }

  selected(select: ISelectOption) {
    return !select || select.id === 0
  }

  minMax(value: number | undefined | string, min: number, max: number) {
    if (typeof value === 'number' || typeof value === 'string') {
      return !(+value >= min && +value <= max)
    }
    return true
  }

  name(value: string): boolean {
    return /^[a-zA-Zа-яА-ЯёЁ\s-]*$/g.test(value)
  }
}
