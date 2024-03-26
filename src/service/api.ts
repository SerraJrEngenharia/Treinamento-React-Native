import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://lyric.mackle.im/'
})

