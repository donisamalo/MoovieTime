import Moovie from '@/api/moovie'

export default ({ $axios }, inject) => {
  const factories = {
    moovie: Moovie($axios),
  }

  inject('api', factories)
}
