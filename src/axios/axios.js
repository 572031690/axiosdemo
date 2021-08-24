import ApiConfig from "./api/index";
import { post, get } from "@/axios/index";

var sendAxios = function(url, data,sendHeader) {
  console.log(data);
  const start = url.lastIndexOf("/") + 1; // 获得最后一次出现‘/’的位置
  // console.log(start);
  const strName = url.slice(start); // 取得从该位置到结束的名字也就是方法name
  const filepath = url.slice(0, start - 1);// 取得路径名
  // console.log("hello：" + str);
  // console.log("filepath：" + filepath);

  const axiosData = ApiConfig[filepath];

  if (axiosData) {
    var ajaxData = "";
    axiosData.forEach(element => {
      if (element.name === strName) {
        ajaxData = element;
      }
    });
    for(var i in ajaxData.params) {
      ajaxData.params[i] = data.params[i] 
    }
    if (ajaxData.method === "GET") {
      return get(ajaxData.path, ajaxData.params);
    }
    if (ajaxData.method === "POST") {
      return post(ajaxData.path, ajaxData.params);
    }
  }
};
export default sendAxios;
