import { Context } from '@nuxt/types'
import { Image } from 'services/common/Image'
import CommentSerialization from './CommentSerialization/index'
import FieldValidator, { IFieldValidator } from './FieldValidator/index'
import ErrorHandler, { IErrorHandler } from './common/ErrorHandler'
import HttpClient, { IHttpClient } from './common/HttpClient'
type commonServices = {
  error: IErrorHandler
  http: IHttpClient
}

export type servicesType = {
  common: commonServices
  image: Image
  fieldValidator: IFieldValidator
  commentSerialization: CommentSerialization
}

const services = (ctx: Context): servicesType => ({
  common: {
    error: new ErrorHandler(ctx.error),
    http: new HttpClient(ctx.$axios),
  },
  image: new Image(),
  fieldValidator: new FieldValidator(),
  commentSerialization: new CommentSerialization(),
})

export default services
