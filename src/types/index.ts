type Method = 'GET' | 'POST'

export interface AxiosConfigInterface {
  url: string
  method?: Method
  data?: any
  params: any
}
