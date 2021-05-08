import axios from 'axios'

export const get = (url: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}

export const post = (url: string, data: object) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, { data })
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}
