import { axiosBaseAdm, axiosBaseSso } from "./createAxiosBase";

class AxiosBaseClass {
  /*
    Essa classe é uma forma de poder utilizar todas as funções 
    do axios sem limitações de funções e variáveis globais

    Links importantes:
      - Json de conficuração de request: https://axios-http.com/docs/req_config
      - Schema de response: https://axios-http.com/docs/res_schema
  */
  constructor(defineAxiosBase) {
    this.axiosBase = defineAxiosBase;
    this.appAccessToken = undefined;

    this.cachedFilter = { path: "", filterList: [] }; //utilizado para lembrar do estado anterior da pesquisa de uma rota
  }

  //Instances
  //Saiba mais: https://axios-http.com/docs/instance
  request(path, options) {
    return this.axiosBase.request(path, options);
  }

  get(path, options) {
    return this.axiosBase.get(path, options);
  }

  /**
   * Get para listagens com activeFlag: 1 e orderBy: asc
   * como default. Além disso, converte activeFlag de boolean
   * para int.
   * @param {string} path Endpoint da API
   * @param {object} options Options
   * @returns Promise
   */
  getList(path, options) {
    /**
     * Esse if é utilizado para quando uma mesma rota é chamada sem as options,
     * ou seja, sem os parâmetros de filtragem, depois de ja ter sido chamada
     * anteriormente, ele vai pegar os parâmetros de filtragem salvos
     * no this.cachedFilter, se existir, e utilizá-lo ao invés de fazer a
     * chamada sem parâmetros.
     *
     * Isso foi feito para que quando uma listagem esteja com os filtros ativos,
     * na hora de editar, adicionar, ativar e inativar um item, poder chamar
     * a listagem com os mesmos filtros novamente sem precisar guardar o estado
     * dos filtros e ter que compartilhar com o pageList em todas as
     * páginas de listagem.
     * */

    if (
      options?.params === undefined &&
      path === this.cachedFilter.path &&
      this.cachedFilter.filterList
    ) {
      return this.axiosBase.get(path, {
        params: this.cachedFilter.filterList,
      });
    }

    if (options === undefined || options.params === undefined) {
      options = { params: { activeFlag: 1, orderBy: "id,asc" } };
    } else {
    }

    this.cachedFilter.path = path;
    this.cachedFilter.filterList = options.params;

    return this.axiosBase.get(path, options);
  }

  post(path, data, options) {
    return this.axiosBase.post(path, data, options);
  }

  put(path, data, options) {
    return this.axiosBase.put(path, data, options);
  }

  patch(path, data, options) {
    return this.axiosBase.patch(path, data, options);
  }

  delete(path, data, options) {
    return this.axiosBase.delete(path, data, options);
  }

  head(path, options) {
    return this.axiosBase.head(path, options);
  }

  options(path, options) {
    return this.axiosBase.options(path, options);
  }

  setAppAccessToken(value) {
    if (value) {
      this.axiosBase.defaults.headers.common[
        "X-Authorization"
      ] = `Bearer ${value}`;
    }
  }

  
}

export const axiosBaseAdmApi = new AxiosBaseClass(axiosBaseAdm);
