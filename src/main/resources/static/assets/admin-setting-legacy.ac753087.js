System.register(["./request-legacy.e2497089.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.f}],execute:function(){e("f",(()=>t({url:"https://api.github.com/repos/zhaojun1998/zfile/releases/latest",method:"get",config:{responseIntercept:!1,withCredentials:!1,showDefaultMsg:!1}}))),e("l",(()=>t({url:"/admin/config",method:"get"}))),e("a",(e=>t({url:"/admin/config/password",method:"put",data:e}))),e("u",(e=>t({url:"/admin/config/site",method:"put",data:e}))),e("b",(e=>t({url:"/admin/config/view",method:"put",data:e}))),e("d",(e=>t({url:"/admin/config/security",method:"put",data:e}))),e("c",(e=>t({url:"/admin/config/link",method:"put",data:e}))),e("g",(()=>t({url:"/admin/2fa/setup",method:"get"}))),e("v",(e=>t({url:"/admin/2fa/verify",method:"post",data:e}))),e("e",(()=>t({url:"/admin/log/download",method:"get",config:{responseType:"blob",showDefaultMsg:!1,responseIntercept:!1}})))}}}));