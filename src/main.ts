import { AxiosConfigInterface } from './types/index'
import xhr from './xhr'
function axios(config: AxiosConfigInterface): void {
  xhr(config)
}

export default axios
