(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2387ec08"],{"278b":function(t,e,a){"use strict";a("5026")},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function u(t,e,a){var n=r(),i=t-n,u=20,s=0;e="undefined"===typeof e?500:e;var c=function(){s+=u;var t=Math.easeInOutQuad(s,n,i,e);o(t),s<e?l(c):a&&"function"===typeof a&&a()};c()}var s={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.currentPage=1,this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&u(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&u(0,800)}}},c=s,d=(a("bf15"),a("2877")),p=Object(d["a"])(c,n,i,!1,null,"430a81d8",null);e["a"]=p.exports},5026:function(t,e,a){},7754:function(t,e,a){"use strict";a.d(e,"i",(function(){return i})),a.d(e,"l",(function(){return l})),a.d(e,"b",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"f",(function(){return u})),a.d(e,"g",(function(){return s})),a.d(e,"k",(function(){return c})),a.d(e,"a",(function(){return d})),a.d(e,"c",(function(){return p})),a.d(e,"e",(function(){return m})),a.d(e,"h",(function(){return f})),a.d(e,"j",(function(){return b}));var n=a("b775");function i(t){return Object(n["a"])({url:"/v1/api/dict/type/list",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/v1/api/dict/type/save",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/v1/api/dict/type/save",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/v1/api/dict/type/delete",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/v1/api/dict/type/save",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/v1/api/dict/item/list",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/v1/api/dict/item/save",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/v1/api/dict/item/save",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/v1/api/dict/item/delete",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/v1/api/dict/item/save",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/v1/api/dict/items/",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/v1/api/dicts/multiple/",method:"get",params:t})}},"7d6f":function(t,e,a){},bf15:function(t,e,a){"use strict";a("7d6f")},d400:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"spp-table-group spp-theme-top spp-theme-pad"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"tableRef",staticClass:"spp-table spp-theme-top",staticStyle:{width:"100%"},attrs:{data:t.newFoldList,stripe:!0,"header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}}},[a("el-table-column",{attrs:{prop:"number",type:"index",label:"序号",width:"55"}}),a("el-table-column",{attrs:{prop:"name",label:"产品名称",width:"100"}}),a("el-table-column",{attrs:{prop:"isUse",label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(0==e.row.isUse?"下降":"上架")+" ")]}}])}),a("el-table-column",{attrs:{prop:"money",label:"价格",width:"100"}}),a("el-table-column",{attrs:{prop:"content",label:"介绍","min-width":"200"}}),a("el-table-column",{attrs:{label:"占位",width:"200"}}),a("el-table-column",{attrs:{label:"占位",width:"200"}}),a("el-table-column",{attrs:{label:"占位",width:"200"}}),a("el-table-column",{attrs:{label:"占位",width:"200"}}),a("el-table-column",{attrs:{label:"占位",width:"200"}}),a("el-table-column",{attrs:{label:"占位",width:"200"}}),a("el-table-column",{attrs:{label:"占位",width:"200"}}),a("el-table-column",{attrs:{label:"占位",width:"200"}}),a("el-table-column",{attrs:{label:"占位",width:"200"}}),a("el-table-column",{attrs:{label:"占位",width:"200"}}),a("el-table-column",{attrs:{label:"占位",width:"200"}}),a("el-table-column",{attrs:{label:"Actions",align:"center",fixed:"right",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(a){return t.newFoldList.splice(e.$index,1)}}},[t._v("Remove")])]}}])})],1)],1)])},i=[],l={components:{},props:{foldList:{type:Array,default:function(){return[]}}},data:function(){return{tableLoading:!1,newFoldList:[]}},watch:{foldList:{handler:function(t,e){this.newFoldList=t},immediate:!0}},created:function(){},methods:{}},o=l,r=(a("278b"),a("2877")),u=Object(r["a"])(o,n,i,!1,null,"07cf2fec",null);e["default"]=u.exports},dc66:function(t,e,a){"use strict";a.d(e,"i",(function(){return l})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return u})),a.d(e,"d",(function(){return s})),a.d(e,"h",(function(){return c})),a.d(e,"g",(function(){return d})),a.d(e,"e",(function(){return p})),a.d(e,"f",(function(){return m}));var n=a("b775"),i=a("7754");function l(t){return Object(n["a"])({url:"/v1/api/table/list",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/v1/api/table/save",method:"post",params:t})}function r(t){return Object(n["a"])({url:"/v1/api/table/delete",method:"post",params:t})}function u(t){return Object(n["a"])({url:"/v1/api/table/save",method:"post",params:t})}function s(t){return Object(n["a"])({url:"/v1/api/table/"+t,method:"get"})}function c(t){return Object(i["h"])({type:"level"})}function d(t){return Object(i["h"])({type:"leader"})}function p(t){return Object(i["h"])({type:"dept"})}function m(t){return Object(i["h"])({type:"deptTree"})}},fe27:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spp-theme-body spp-theme-pad"},[a("el-form",{staticClass:"spp-form-search spp-theme-top",attrs:{inline:!0,size:"small",model:t.queryParams}},[a("el-form-item",[a("span",{staticClass:"spp-form-label",staticStyle:{width:"80px"}},[a("i",{staticClass:"icon"}),a("i",{staticClass:"label"},[t._v("名称:")])]),a("el-input",{attrs:{maxlength:"20",placeholder:"请输入"},model:{value:t.queryParams.name1,callback:function(e){t.$set(t.queryParams,"name1",e)},expression:"queryParams.name1"}})],1),a("el-form-item",[a("el-button",{staticClass:"spp-form-btn",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onSearch()}}},[t._v("查询")])],1)],1),a("div",{staticClass:"spp-table-group spp-theme-top spp-theme-pad"},[a("div",{staticClass:"spp-table-btns"},[a("el-checkbox",{staticStyle:{padding:"3px 0"},on:{change:t.onChangeExpand},model:{value:t.isExpandAll,callback:function(e){t.isExpandAll=e},expression:"isExpandAll"}},[t._v("Unfold All")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"tableRef",staticClass:"spp-table spp-theme-top",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:!0,"header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}},on:{"selection-change":t.onSelectionChange,"expand-change":t.expandChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("TableFold",{attrs:{"fold-list":e.row.foldList},on:{change:t.onRemove}})]}}])}),a("el-table-column",{attrs:{prop:"number",type:"index",label:"序号"}}),a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"name1",label:"操作人",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{on:{click:function(a){return t.onClickRow(e.row)}}},[a("a",{staticStyle:{color:"#00a0e9","text-decoration":"underline"}},[t._v(t._s(e.row.name1))])])]}}])}),a("el-table-column",{attrs:{prop:"isUse",label:"启用"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(0==e.row.isUse?"停用":"启用")+" ")]}}])}),a("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"200"}}),a("el-table-column",{attrs:{prop:"money",label:"金额"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄"}}),a("el-table-column",{attrs:{prop:"createDate",label:"创建时间",width:"180"}}),a("el-table-column",{attrs:{prop:"updateDate",label:"更新时间",width:"180"}}),a("el-table-column",{attrs:{label:"操作",width:"120"}},[[a("el-button",{attrs:{size:"mini",icon:"el-icon-edit-outline"}}),a("el-button",{attrs:{size:"mini",icon:"el-icon-delete",type:"danger"}})]],2)],1),a("Pagination",{directives:[{name:"show",rawName:"v-show",value:t.tableTotal>0,expression:"tableTotal>0"}],attrs:{total:t.tableTotal,page:t.queryParams.page,limit:t.queryParams.limit},on:{"update:page":function(e){return t.$set(t.queryParams,"page",e)},"update:limit":function(e){return t.$set(t.queryParams,"limit",e)},pagination:t.requestList}})],1)],1)},i=[],l=(a("d3b7"),a("159b"),a("dc66")),o=a("333d"),r=a("d400"),u=a("96eb"),s={components:{Pagination:o["a"],TableFold:r["default"]},data:function(){return{tableTotal:0,tableLoading:!1,tableData:[],isExpandAll:!1,queryParams:{name1:"",page:1,limit:this.pageGroup.size},selectionList:[]}},mounted:function(){this.requestList()},methods:{requestList:function(){var t=this,e=this.queryParams;this.tableLoading=!0,Object(l["i"])(e).then((function(e){t.tableLoading=!1,2e4===e.code?(t.tableData=t.handleData(e.data),t.tableTotal=e.total,t.onChangeExpand()):t.$message.error(e.msg)})).catch((function(e){t.tableLoading=!1}))},handleData:function(t){for(var e=t,a=0;a<e.length;a++){var n=u.mock({"items|1-8":[{id:"@id",name:"产品名称"+a,money:"@float(0, 1000, 1, 2)","content|1-18":"这是产品描述","isUse|1":["0","1"]}]});e[a]["foldList"]=n.items}return e},onSearch:function(){this.queryParams.page=1,this.requestList()},onSelectionChange:function(t){this.selectionList=t},onClickRow:function(t){this.$message.warning(t.name1)},onChangeExpand:function(){var t=this;this.$nextTick((function(){t.toggleRowExpansionAll(t.tableData,t.isExpandAll)}))},toggleRowExpansionAll:function(t,e){var a=this;t.forEach((function(t){a.$refs.tableRef.toggleRowExpansion(t,e)}))},onRemove:function(){},expandChange:function(t,e){var a=e.some((function(e){return e.id===t.id}));a&&this.getDetails(t.id)},getDetails:function(t){var e=this;this.tableLoading=!0,Object(l["d"])(t).then((function(t){e.tableLoading=!1,2e4===t.code?e.detailData=t.data:e.$message.warning("Failed to get table detail. Error details: "+t.msg)})).catch((function(t){e.$message.error("Failed to get table detail. Error details: ",t),e.tableLoading=!1}))}}},c=s,d=a("2877"),p=Object(d["a"])(c,n,i,!1,null,"24c4720f",null);e["default"]=p.exports}}]);