import Axios from 'axios'
import {showFullScreenLoading, tryHideFullScreenLoading} from './loading'
import {Loading, Message} from 'element-ui'

//Axios.defaults.headers.common['Authorization'] = store.state.token;
const service = Axios

// 添加请求拦截器
// service.interceptors.request.use(config => {
// // 在发送请求之前做些什么
// //判断是否存在token，如果存在将每个页面header都添加token
//   if (store.state.token) {
//     config.headers.common['Authorization'] = store.state.token
//   }
//
//   return config;
// }, error => {
// // 对请求错误做些什么
//   return Promise.reject(error);
// });
//
// // http response 拦截器
// service.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           this.$store.commit('del_token');
//           router.replace({
//             path: '/login',
//             query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
//           })
//       }
//     }
//     return Promise.reject(error.response.data)
//   });
//请求发送拦截
service.interceptors.request.use(requestConfig => {
  var token = window.sessionStorage.getItem('Authorization')
  if (token && token != undefined) {
    requestConfig.headers.Authorization = token;
  }
  if (requestConfig.showLoading) {
    showFullScreenLoading()
  }
  return requestConfig;
}, error => {
  return Promise.reject(error);
});

//请求结果拦截
// let isTokenAlert = false, isErrorAlert = false;  //是否已经弹出过错误，每次多个请求报错只显示一次。token错误弹出后会跳回登录页，登陆后会自动重置标识；error错误需要自己再次重置标识，否则无法再次弹出错误
// service.interceptors.response.use(
//   response => {
//     if (response.config.showLoading) {
//       tryHideFullScreenLoading()
//     }
//     if (response.data.code == 'no_login') {//具体的判断token失效的参数
//       if (!isTokenAlert) {
//         isTokenAlert = true;
//         var tokenAlias = window.localStorage.getItem("tokenAlias")
//         window.localStorage.removeItem(tokenAlias);
//         Message.error(response.data.message);
//         window.location.href = '/#/'//需求方要求一旦出错立即跳转登录，所以采取这种侵入式的手段。
//       }
//     } else if (response.data.code == 'REDIRECT') {
//       window.location.href = response.data.redirectUrl
//       isTokenAlert = false;
//     } else {
//       isTokenAlert = false;
//       return response
//     }
//   },
//   error => {
//     if (!isErrorAlert) {
//       isErrorAlert = true;
//       if (error && error.response) {
//         switch (error.response.status) {
//           case 400:
//             error.message = '错误请求'
//             break;
//           case 401:
//             error.message = '未授权，请重新登录'
//             break;
//           case 403:
//             error.message = '拒绝访问'
//             break;
//           case 404:
//             error.message = '请求错误,未找到该资源'
//             break;
//           case 405:
//             error.message = '请求方法未允许'
//             break;
//           case 408:
//             error.message = '请求超时'
//             break;
//           case 500:
//             var obj = error.response.data
//             if (obj.message != undefined) {
//               error.message = error.response.data.message
//             } else {
//               error.message = '服务器端出错'
//               if (obj.byteLength > 0) {
//                 var dataString = "";
//                 var fileData = new Uint8Array(obj)
//                 var e = Utf8ArrayToStr(fileData);
//                 var result = JSON.parse(e)
//                 error.message = result.message
//               }
//             }
//             if (error.request.responseURL.indexOf("logout") > -1) {
//               window.location.href = '/#/'
//               var tokenAlias = window.localStorage.getItem("tokenAlias")
//               window.localStorage.removeItem(tokenAlias);
//               window.localStorage.removeItem("tokenAlias");
//               window.localStorage.removeItem('ticket');
//             }
//             break;
//           case 501:
//             error.message = '网络未实现'
//             break;
//           case 502:
//             error.message = '网络错误'
//             break;
//           case 503:
//             error.message = '服务不可用'
//             break;
//           case 504:
//             error.message = '网络超时'
//             break;
//           case 505:
//             error.message = 'http版本不支持该请求'
//             break;
//           default:
//             error.message = `连接错误${error.response.status}`
//         }
//       } else {
//         error.message = "连接到服务器失败"
//       }
//       Message.error(error.message)
//     }
//     setTimeout(function () {
//       isErrorAlert = false;
//     }, 1000)  //恢复是为了再次刷新时可以再次报错
//     return Promise.reject(error)
//   })

// function Utf8ArrayToStr(array) {
//   var out, i, len, c;
//   var char2, char3;
//
//   out = "";
//   len = array.length;
//   i = 0;
//   while (i < len) {
//     c = array[i++];
//     switch (c >> 4) {
//       case 0:
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 6:
//       case 7:
//         // 0xxxxxxx
//         out += String.fromCharCode(c);
//         break;
//       case 12:
//       case 13:
//         // 110x xxxx   10xx xxxx
//         char2 = array[i++];
//         out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
//         break;
//       case 14:
//         // 1110 xxxx  10xx xxxx  10xx xxxx
//         char2 = array[i++];
//         char3 = array[i++];
//         out += String.fromCharCode(((c & 0x0F) << 12) |
//           ((char2 & 0x3F) << 6) |
//           ((char3 & 0x3F) << 0));
//         break;
//     }
//   }
//
//   return out;
// }

export default service
