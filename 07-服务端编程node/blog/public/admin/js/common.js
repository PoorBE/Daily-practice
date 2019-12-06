function serializeToArr(form) {
    var arr=form.serializeArray() //吧表单对象序列化成一个数组[{name:'username',valuw:'password'}]
   var obj={}
   for (var i=0;i<arr.length;i++) {
       obj[arr[i].name]=arr[i].value
   }
   return obj
  }