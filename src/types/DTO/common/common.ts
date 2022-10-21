export interface IBreadcrumbs {
  title: string
  url?: string
}

export interface ISelectOption {
  id: string | number
  name: string
}
export interface ISelectOptionSearch {
  kod: string | number
  name: string
}

export interface ICountry {
  name: string
  id: string | number
}

export interface IRegion {
  name: string
  id: string | number
}

export interface ICity {
  name: string
  id: string | number
}
export interface IBasisDelivery extends ISelectOption {
  description: string
  percent: number
}
export interface IFaq {
  id?: number | string
  question: string
  answer: string
  file?: string[]
}

