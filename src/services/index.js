import request from 'utils/request'
import { apiPrefix } from 'utils/config'
import { validURL } from '../utils/common'

import api from './api'

const gen = params => {
  let method = 'GET'
  let url = apiPrefix + params

  if (validURL(params)) {
    url = params
  }

  const paramsArray = params.split(' ')
  if (paramsArray.length === 2) {
    method = paramsArray[0]
    url = apiPrefix + paramsArray[1]

    if (validURL(paramsArray[1])) {
      url = paramsArray[1]
    }
  }

  return function(data) {
    console.log(
      'Request with url=' +
        url +
        ', data=' +
        JSON.stringify(data) +
        ', method=' +
        method
    )
    return request({
      url,
      data,
      method,
    })
  }
}

const APIFunction = {}
for (const key in api) {
  APIFunction[key] = gen(api[key])
}

APIFunction.queryWeather = params => {
  params.key = 'i7sau1babuzwhycn'
  return request({
    url: `${apiPrefix}/weather/now.json`,
    data: params,
  })
}

export default APIFunction
