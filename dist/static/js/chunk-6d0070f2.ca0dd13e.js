(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d0070f2"],{"488f":function(e,t,a){"use strict";a("5253")},5253:function(e,t,a){},7754:function(e,t,a){"use strict";a.d(t,"i",(function(){return r})),a.d(t,"l",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return s})),a.d(t,"k",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return d})),a.d(t,"e",(function(){return p})),a.d(t,"h",(function(){return b})),a.d(t,"j",(function(){return h}));var n=a("b775");function r(e){return Object(n["a"])({url:"/v1/api/dict/type/list",method:"get",params:e})}function l(e){return Object(n["a"])({url:"/v1/api/dict/type/save",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/v1/api/dict/type/save",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/v1/api/dict/type/delete",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/v1/api/dict/type/save",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/v1/api/dict/item/list",method:"get",params:e})}function u(e){return Object(n["a"])({url:"/v1/api/dict/item/save",method:"post",data:e})}function m(e){return Object(n["a"])({url:"/v1/api/dict/item/save",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/v1/api/dict/item/delete",method:"post",data:e})}function p(e){return Object(n["a"])({url:"/v1/api/dict/item/save",method:"post",data:e})}function b(e){return Object(n["a"])({url:"/v1/api/dict/items/",method:"get",params:e})}function h(e){return Object(n["a"])({url:"/v1/api/dicts/multiple/",method:"get",params:e})}},"99ab":function(e,t,a){a("99af"),a("ac1f"),a("5319");var n=a("7037").default;function r(e,t){if(0===arguments.length)return null;var a,r=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===n(e)||(10===(""+e).length&&(e=1e3*parseInt(e)),a=new Date(e));var l={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),w:a.getDay()},o=r.replace(/{(y|m|d|h|i|s|w)+}/g,(function(e,t){var a=l[t];return"w"===t?["日","一","二","三","四","五","六"][a]:(e.length>0&&a<10&&(a="0"+a),a||0)}));return o}function l(e){var t=e.replace(/-|\./g,"/");return t=t.replace(/年/g,"/"),t=t.replace(/月/g,"/"),t=t.replace(/日/g,""),4===t.length&&(t+="/01/01 00:00:00"),7===t.length&&(t+="/01 00:00:00"),10===t.length&&(t+=" 00:00:00"),16===t.length&&(t+=":00"),Date.parse(t)}function o(e,t){var a=["Y","M","D","h","m","s"],n=[],r=new Date(parseInt(e)),l=r.getFullYear(),o=r.getMonth()+1,i=r.getDate(),c=r.getHours(),s=r.getMinutes(),u=r.getSeconds();for(var m in n.push(l),n.push(o<10?"0"+o:o),n.push(i<10?"0"+i:i),n.push(c<10?"0"+c:c),n.push(s<10?"0"+s:s),n.push(u<10?"0"+u:u),n)t=t.replace(a[m],n[m]);return t}function i(e){var t=e.replace(/-/g,"");t=t.substring(0,8);var a=(new Date).getTime();return a=r(a,"{y}{m}{d}"),t===a}function c(){var e=Date.parse(new Date);return r(e,"{y}-{m}")}function s(e){var t=e.substring(0,4);t=parseInt(t),t-=1;var a=e.substring(4,5),n="";return n="年"===a?t+"年":t+a,n}function u(e){var t=e.substring(0,4);t=parseInt(t),t+=1;var a=e.substring(4,5),n="";return n="年"===a?t+"年":t+a,n}function m(e){var t=e.substring(0,4),a=e.substring(5,7);t=parseInt(t),a=parseInt(a),a-=1,0===a&&(t-=1,a=12),a<10&&(a="0"+a);var n=e.substring(4,5),r="";return r="年"===n?t+"年"+a+"月":t+n+a,r}function d(e){var t=e.substring(0,4),a=e.substring(5,7);t=parseInt(t),a=parseInt(a),a+=1,13===a&&(t+=1,a=1),a<10&&(a="0"+a);var n=e.substring(4,5),r="";return r="年"===n?t+"年"+a+"月":t+n+a,r}function p(e){var t=new Date(e).getFullYear(),a=new Date(e).getMonth()+1,n=new Date(e).getDate(),r=new Date,l=new Date(new Date(e).toLocaleDateString()),o=l.getTime()-r.getTime(),i=parseInt(o/1e3),c=Math.floor(i/86400),s=Math.floor((i-24*c*60*60)/3600),u=Math.floor((i-24*c*60*60-3600*s)/60),m=Math.floor(i-60*c*60*24-60*s*60-60*u);return"距离".concat(t,"年").concat(a,"月").concat(n,"日还有").concat(c,"天").concat(s,"小时").concat(u,"分").concat(m,"秒")}function b(e){return e?e.substr(0,10)+" 00:00:00":""}function h(e){return e?e.substr(0,10)+" 23:59:59":""}function f(e,t,a){return e=e.replace(/-/g,"/"),t=t.replace(/-/g,"/"),a=a.replace(/-/g,"/"),e=new Date(e),t=new Date(t),a=new Date(a),t<=e&&e<=a}function g(e,t){e=e.replace(/-/g,"/"),t=t.replace(/-/g,"/"),e=new Date(e),t=new Date(t);var a=new Date;return e<=a&&a<=t}function v(e,t){var a=new Date;return e=e.replace(/-/g,"/"),t=t.replace(/-/g,"/"),e=new Date(e),t=new Date(t),a<=e&&e<=t}function y(e,t){var a=l(e),n=l(t);return a>n}a("99af"),a("ac1f"),a("5319"),e.exports={Jh_timeStampToTime:r,Jh_convertTimeStamp:l,Jh_timestampToYMD:o,Jh_isToday:i,Jh_getYearMonth:c,Jh_getPrevYear:s,Jh_getNextYear:u,Jh_getPrevYearMonth:m,Jh_getNextYearMonth:d,Jh_compareTimes:y,Jh_isBetweenTimes:f,Jh_isBetweenTimesByCurrent:g,Jh_isBetweenTimesByCurrentAndEndTime:v,getEndTime:p,startOfDay:b,endOfDay:h}},dc66:function(e,t,a){"use strict";a.d(t,"i",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return s})),a.d(t,"h",(function(){return u})),a.d(t,"g",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return p}));var n=a("b775"),r=a("7754");function l(e){return Object(n["a"])({url:"/v1/api/table/list",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/v1/api/table/save",method:"post",params:e})}function i(e){return Object(n["a"])({url:"/v1/api/table/delete",method:"post",params:e})}function c(e){return Object(n["a"])({url:"/v1/api/table/save",method:"post",params:e})}function s(e){return Object(n["a"])({url:"/v1/api/table/"+e,method:"get"})}function u(e){return Object(r["h"])({type:"level"})}function m(e){return Object(r["h"])({type:"leader"})}function d(e){return Object(r["h"])({type:"dept"})}function p(e){return Object(r["h"])({type:"deptTree"})}},f0cb:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spp-theme-body spp-theme-pad"},[a("el-form",{staticClass:"spp-form-search spp-theme-top",attrs:{inline:!0,size:"small",model:e.tableSearchParams}},[a("el-form-item",[a("span",{staticClass:"spp-form-label",staticStyle:{width:"80px"}},[e._v(" 单据编号 ")]),a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.tableSearchParams.name1,callback:function(t){e.$set(e.tableSearchParams,"name1",t)},expression:"tableSearchParams.name1"}})],1),a("el-form-item",[a("span",{staticClass:"spp-form-label",staticStyle:{width:"80px"}},[e._v(" 业务单据 ")]),a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.tableSearchParams.name1,callback:function(t){e.$set(e.tableSearchParams,"name1",t)},expression:"tableSearchParams.name1"}})],1),a("el-form-item",[a("span",{staticClass:"spp-form-label",staticStyle:{width:"80px"}},[e._v(" 单据类型 ")]),a("el-select",{attrs:{clearable:""},model:{value:e.typeValue,callback:function(t){e.typeValue=t},expression:"typeValue"}},e._l(e.typeList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1),a("el-form-item",[a("span",{staticClass:"spp-form-label",staticStyle:{width:"50px"}},[e._v(" 时间: ")]),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd",format:"yyyy年MM月dd日"},model:{value:e.tableSearchParams.timeRange,callback:function(t){e.$set(e.tableSearchParams,"timeRange",t)},expression:"tableSearchParams.timeRange"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.onSearch()}}},[e._v("查询")]),a("el-button",{attrs:{size:"small",type:"info",plain:""},on:{click:function(t){return e.onSearch()}}},[e._v("重置")])],1)],1),a("div",{staticClass:"spp-table-group spp-theme-top spp-theme-pad"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],ref:"tableRef",staticClass:"spp-table spp-theme-top",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}},on:{"selection-change":e.onSelectionChange}},[a("el-table-column",{attrs:{prop:"state",label:"系统状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.stateList,(function(n,r){return a("div",{key:r},[t.row.state==n.value?a("el-tag",{attrs:{effect:"dark",type:n.type}},[e._v(" "+e._s(n.name)+" ")]):e._e()],1)}))}}])}),a("el-table-column",{attrs:{prop:"type",label:"单据类型"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.typeList,(function(n,r){return a("div",{key:r},[n.value==t.row.type?a("span",[e._v(" "+e._s(n.name)+" ")]):e._e()])}))}}])}),a("el-table-column",{attrs:{prop:"number",label:"单据编号"}}),a("el-table-column",{attrs:{prop:"document",label:"业务单据"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{on:{click:function(a){return e.onClickRow(t.row)}}},[a("a",{staticStyle:{color:"#00a0e9","text-decoration":"underline"}},[e._v(e._s(t.row.document))])])]}}])}),a("el-table-column",{attrs:{prop:"updateDate",label:"单据日期"}}),a("el-table-column",{attrs:{prop:"name",label:"业务员"}})],1),a("div",{staticStyle:{display:"flex","flex-direction":"row-reverse"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.tableTotal>0,expression:"tableTotal>0"}],staticClass:"spp-theme-top",attrs:{background:"","current-page":e.tableSearchParams.page,"page-size":e.tableSearchParams.limit,"page-sizes":e.tableSizes,total:e.tableTotal,layout:"prev, pager, next, sizes"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogTableVisible,width:"800px"},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{name:"1"}},[a("template",{slot:"title"},[a("div",{staticStyle:{"font-weight":"600","font-size":"15px"}},[e._v("基础性息")])]),a("el-form",{ref:"dialogFormRef",attrs:{model:e.dialogFormData,"label-width":"100px",size:"small"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"单据编号:",prop:"document"}},[a("div",{staticStyle:{"border-bottom":"1px solid #dbdbdb"}},[e._v(e._s(e.dialogFormData.number))])])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"单据日期:",prop:"document"}},[a("div",{staticStyle:{"border-bottom":"1px solid #dbdbdb"}},[e._v(e._s(e.dialogFormData.updateDate))])])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"业务单据:",prop:"document"}},[a("div",{staticStyle:{"border-bottom":"1px solid #dbdbdb"}},[e._v(e._s(e.dialogFormData.document))])])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"业务员:",prop:"name"}},[a("div",{staticStyle:{"border-bottom":"1px solid #dbdbdb"}},[e._v(e._s(e.dialogFormData.name))])])],1)],1)],1)],2),a("el-collapse-item",{attrs:{name:"2"}},[a("template",{slot:"title"},[a("div",{staticStyle:{"font-weight":"600","font-size":"15px"}},[e._v("单据列表")])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],ref:"tableRef",staticClass:"spp-table spp-theme-top",staticStyle:{width:"100%"},attrs:{size:"mini",border:"",height:"300",data:e.kwList,"header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[a("el-table-column",{attrs:{prop:"numbers",type:"index",label:"序号"}}),a("el-table-column",{attrs:{prop:"name",label:"物料名称"}}),a("el-table-column",{attrs:{prop:"code",label:"物料编码",width:"100"}}),a("el-table-column",{attrs:{prop:"number",label:"数量",width:"80"}}),a("el-table-column",{attrs:{prop:"ckName",label:"仓库名称"}}),a("el-table-column",{attrs:{prop:"ckCode",label:"仓库编号",width:"150"}})],1)],2)],1)],1)],1)},r=[],l=a("5530"),o=(a("e9c4"),a("b64b"),a("99ab")),i=a.n(o),c=a("dc66"),s={components:{},data:function(){return{tableHeight:170,tableLoading:!1,tableData:[{state:1,type:1,number:"RK240928002",updateDate:"2024.09.26",name:"张三1",document:"SH240820001"},{state:1,type:2,number:"RK240928002",updateDate:"2024.09.26",name:"李四1",document:"SH240820001"},{state:1,type:3,number:"RK240928002",updateDate:"2024.09.26",name:"王五1",document:"SH240820001"},{state:1,type:4,number:"RK240928002",updateDate:"2024.09.26",name:"张三2",document:"SH240820001"},{state:1,type:5,number:"RK240928002",updateDate:"2024.09.26",name:"李四2",document:"SH240820001"},{state:1,type:6,number:"RK240928002",updateDate:"2024.09.26",name:"王五2",document:"SH240820001"},{state:0,type:7,number:"RK240928002",updateDate:"2024.09.26",name:"张三3",document:"SH240820001"},{state:1,type:8,number:"RK240928002",updateDate:"2024.09.26",name:"李四3",document:"SH240820001"},{state:0,type:9,number:"RK240928002",updateDate:"2024.09.26",name:"王五3",document:"SH240820001"},{state:1,type:10,number:"RK240928002",updateDate:"2024.09.26",name:"赵六",document:"SH240820001"}],tableSearchParams:{name1:"",time:"",level:"",page:1,limit:this.pageGroup.size},tableTotal:10,tableSizes:this.pageGroup.sizes,selectionList:[],deptOptions:[],levelOptions:[],typeValue:"",typeList:[{name:"销售出库单",value:1},{name:"生产领料单",value:2},{name:"简单生产领料单",value:3},{name:"简单生产退库单",value:4},{name:"生产补料单",value:5},{name:"生产退库单",value:6},{name:"委外领料单",value:7},{name:"委外补料单",value:8},{name:"采购退料单",value:9},{name:"盘亏出库单",value:10}],stateList:[{name:"正常",value:1,type:""},{name:"停用",value:0,type:"danger"}],activeNames:["1","2"],selectId:"",dialogTitle:"",dialogTableVisible:!1,dialogFormData:{number:"",updateDate:"",document:"",name:""},kwList:[{code:"5A-1-02",name:"测试1",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试2",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试3",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试4",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试5",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试6",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试7",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试8",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试9",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试10",number:1,ckName:"仓库1",ckCode:"123124"}]}},mounted:function(){this.requestDict()},methods:{onSearch:function(){this.handleCurrentChange(1)},requestList:function(){var e=this,t={};t=this.tableSearchParams,t.startDate=this.tableSearchParams.timeRange?i.a.startOfDay(this.tableSearchParams.timeRange[0]):"",t.endDate=this.tableSearchParams.timeRange?i.a.endOfDay(this.tableSearchParams.timeRange[1]):"",this.tableLoading=!0,Object(c["i"])(t).then((function(t){e.tableLoading=!1,2e4===t.code?(e.tableData=t.data,e.tableTotal=t.total):e.$message.error(t.msg)})).catch((function(t){e.tableLoading=!1}))},requestDict:function(){var e=this;Object(c["h"])().then((function(t){2e4===t.code&&(e.levelOptions=t.data)})).catch((function(e){}))},getName:function(e,t){for(var a=t,n=0;n<a.length;n++)if(a[n].value===e)return a[n].label},handleSizeChange:function(e){this.tableSearchParams.page=1,this.tableSearchParams.limit=e},handleCurrentChange:function(e){this.tableSearchParams.page=e},onSelectionChange:function(e){this.selectionList=e},onClickRow:function(e){this.selectId=e.id,this.dialogTitle="查看",this.handelDialogSetData(e),this.kwList=[{code:"5A-1-02",name:"测试1",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试2",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试3",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试4",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试5",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试6",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试7",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试8",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试9",number:1,ckName:"仓库1",ckCode:"123124"},{code:"5A-1-01",name:"测试10",number:1,ckName:"仓库1",ckCode:"123124"}],this.dialogTableVisible=!0},onHandle:function(e){var t=this;Object(c["d"])(e.id).then((function(e){2e4===e.code?(t.dialogTitle="查看",t.dialogIsLook=!0,t.handelDialogSetData(e.data),t.isShowDialog=!0):t.$message.error(e.msg)})).catch((function(e){}))},handelDialogSetData:function(e){var t=this;this.$nextTick((function(){t.dialogFormData=JSON.parse(JSON.stringify(e)),t.dialogFormData=Object(l["a"])({},e)}))}}},u=s,m=(a("488f"),a("2877")),d=Object(m["a"])(u,n,r,!1,null,"7f8ee4d0",null);t["default"]=d.exports}}]);