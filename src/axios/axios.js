import ApiConfig from "./api/index";
import { post, get } from "@/axios/index";

var sendAxios = function(url, data) {
  console.log(data);
  const start = url.lastIndexOf("/") + 1;
  // console.log(start);
  const strName = url.slice(start);
  const filepath = url.slice(0, start - 1);
  // console.log("hello：" + str);
  // console.log("filepath：" + filepath);

  const axiosData = ApiConfig[filepath];
  // console.log("axiosData：" + axiosData);

  if (axiosData) {
    var ajaxData = "";
    axiosData.forEach(element => {
      if (element.name === strName) {
        ajaxData = element;
      }
    });
    // console.log(ajaxData);
    if (ajaxData.method === "GET") {
      get(ajaxData.path, data);
    }
  }
};
export default sendAxios;
