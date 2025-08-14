export type Res = {
  code: number
  message: string
}

export type ResData<T> = {
  code: number
  message: string
  data: T
}
