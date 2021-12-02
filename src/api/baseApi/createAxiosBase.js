import axios from "axios";

export const axiosBaseAdm = axios.create({
  mode: "cors",
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://restcountries.com/v2"
      : "https://restcountries.com/v2",
});


export const axiosInterceptor = (store, unauthorizedFunction) => {
  //Executa as funções antes de entregar a resposta
  // Mais sobre interceptors: https://axios-http.com/docs/interceptors
  axiosBaseAdm.interceptors.response.use(
    function (response) {
      // Faz algo caso a resposta esteja nos 2xx
      return response;
    },
    function (error) {
      // Faz algo caso seja um erro

      // 401 é unauthorized
      // caso seja manda pra página de login
      if (error?.response?.status === 401) {
        unauthorizedFunction();
        store.setUser(null);
      }
      return Promise.reject(error);
    }
  );
};
