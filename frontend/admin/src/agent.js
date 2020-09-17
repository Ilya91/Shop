import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

const superagent = superagentPromise(_superagent, global.Promise)
const API_ROOT = 'http://0.0.0.0:8081/api'
const responseBody = response => response.body

export const requests = {
  get: (url) =>
    superagent.get(`${API_ROOT}${url}`).set('accept', 'application/ld+json').then(responseBody),
  post: (url, body = null) =>
    superagent.post(`${API_ROOT}${url}`, body).set('accept', 'application/json').then(responseBody),
}
