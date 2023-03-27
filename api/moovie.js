const url = '/api/moovie'

export default (axios) => ({
  getList() {
    return axios.get(`${url}`)
  },
  getDetail(id) {
    return axios.get(`${url}/${id}`)
  },
})
