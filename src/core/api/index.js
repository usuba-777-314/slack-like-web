import axios from "axios";
import * as convertKeys from "convert-keys";

export default axios.create({
  baseURL: "http://localhost:3000/api",

  transformResponse: [
    ...axios.defaults.transformResponse,
    data => convertKeys.toCamel(data)
  ]
});
