import axios from 'axios'
let defaulturl="http://localhost:14488";
let $http={};

// $http.post=function(url,data){
//     debugger
//     var options={};
//     options.method='post'
//     options.url=defaulturl+url
//     options.data=data
//     return axios(options).then((response)=>{
//         return response;
//     }).catch((error)=>{
//         console.log(error);
//     });
// }
// $http.get=function(url){
//     var options={};
//     options.method='get'
//     options.url=defaulturl+url
//     //options.data=data
//     return axios(options).then((response)=>{
//         return response;
//     }).catch((error)=>{
//         console.log(error);
//     });
// }

$http=axios;
export default $http;
