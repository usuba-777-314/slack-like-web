import axios from "axios";
import * as convertKeys from "convert-keys";
import Qs from "qs";

export default axios.create({
  baseURL: "http://localhost:3000/api",

  transformRequest: [
    data => convertKeys.toSnake(data),
    ...axios.defaults.transformRequest
  ],

  transformResponse: [
    ...axios.defaults.transformResponse,
    data => convertKeys.toCamel(data)
  ],

  paramsSerializer: params => Qs.stringify(convertKeys.toSnake(params))
});
