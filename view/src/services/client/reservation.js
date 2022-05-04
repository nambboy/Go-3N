import axios from '@/axios'

export default {
  createReserse(postId) {
    return axios.get(`api/customer-book-truck/book-truck/${postId}`)
  },
  deleteReserve(orderId) {
    return axios.get(`api/customer-book-truck/cancel-order/${orderId}`)
  },
  getReserves() {
    return axios.get(`api/customer-book-truck/list-order `)
  },
  getReserve(orderId) {
    return axios.get(`api/customer-book-truck/view-order/${orderId}`)
  },
  acceptReserve(orderId) {
    return axios.get(`api/customer-book-truck/accept-customer-book-order/${orderId}`)
  }
}
