import { Context } from '@nuxt/types'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IHttpParams extends AxiosRequestConfig {}
export interface IHttpResponse extends AxiosResponse {
  meta?: any
}
export interface IHttpClient {
  get(url: string, params?: IHttpParams): Promise<IHttpResponse>
  post(url: string, params: IHttpParams, config?: any): Promise<IHttpResponse>
  put(url: string, params: IHttpParams): Promise<IHttpResponse>
  delete(url: string, params: IHttpParams): Promise<IHttpResponse>
  patch(url: string, params?: IHttpParams): Promise<IHttpResponse>
  fakeGet(data: any): Promise<IHttpResponse>
  fakeGetBySlug(slug: string, data: any): Promise<IHttpResponse>
  fakeGetBySlugSlug(
    slug: string,
    offerSlug: string,
    data: any
  ): Promise<IHttpResponse>
}

export default class HttpClient implements IHttpClient {
  constructor(private $http: Context['$axios']) {}

  async get(url: string, params?: IHttpParams) {
    try {
      return await this.$http.$get(url, params?.params)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  async post(url: string, params: IHttpParams, config?: any) {
    try {
      return await this.$http.$post(url, params?.params, config)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  async put(url: string, params: IHttpParams) {
    try {
      return await this.$http.$put(url, params?.params)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  async delete(url: string, params: IHttpParams) {
    try {
      return await this.$http.$delete(url, params?.params)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  async patch(url: string, params?: IHttpParams) {
    try {
      return await this.$http.$patch(url, params?.params)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  fakeGet<T>(data: any): Promise<T> {
    return new Promise<T>((resolve) => {
      resolve(data)
    })
  }

  fakeGetBySlug<T>(slug: string, data: any): Promise<T> {
    return new Promise<T>((resolve) => {
      const item = data.filter((item: any) => item.slug === slug)
      resolve(item[0])
    })
  }

  fakeGetBySlugSlug<T>(slug: string, offerSlug: string, data: any): Promise<T> {
    return new Promise<T>((resolve) => {
      const item = data.filter((item: any) => item.slug === slug)
      const offer = item[0].offers.filter(
        (offer: any) => offer.slug === offerSlug
      )
      resolve(offer[0])
    })
  }
}
