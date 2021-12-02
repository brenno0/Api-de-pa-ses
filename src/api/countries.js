import { axiosBaseAdmApi } from './baseApi'


 const CountriesApi = {
    country(name) {
      return axiosBaseAdmApi.get(`/name/${name}`)
    }
}
export default CountriesApi