import { AxiosConfigInterface } from './types/index'

export default (config: AxiosConfigInterface): void => {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()
  request.open(method, url)
  request.send(data)
}
