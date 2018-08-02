import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export const fetch = axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

fetch.interceptors.request.use(
  (req: AxiosRequestConfig) => {
    return req
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  }
)

fetch.interceptors.response.use(
  (res: AxiosResponse) => {
    return Promise.resolve(res)
  },
  (err: AxiosError) => {
    if (err.request.status === 401 || err.request.status === 403) {
      alert('UNAUTHORIZED')
    }

    return Promise.reject(err)
  }
)
