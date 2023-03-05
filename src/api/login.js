import axios from '@/axios'

export function login(username, password) {
  return axios.post('/admin/login', {
    username,
    password
  })
}

export function logout() {
  return axios.post('/admin/logout')
}
