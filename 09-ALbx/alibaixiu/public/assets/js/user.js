// 添加用户功能
// 为表单绑定提交事件
$('#userForm').on('submit',function(){
  // 利用jq的serialize方法来自动收集表单信息
  var formdata=$(this).serialize()
  //发送ajax请求
  $.ajax({
    type:'post',
    url:'/users',
    data:formdata,
    success:function(res){
      location.reload()//刷新当前页面，清空表单数据，重洗渲染用户列表
    },
    error:function(res){
      alert(res.responseText.message)
    }
  })
})
//展示用户功能
$.ajax({
  type:'get',
  url:'/users',
  success:function(res){
    var html=template('userTpl',{list:res})
   $('tbody').html(html)
  }
})
// 上传头像功能  为上传文件表单绑定改变事件
$('#modifyBox').on('change','#avatar',function(){
  var fd=new FormData()
  fd.append('avatar',this.files[0])
  $.ajax({
    type:'post',
    url:'/upload',
    data:fd,
    processData:false,//让jq中的$.ajax在发送请求的时候不在对数据进行打包，就不用转成key=value&key=value的形式
    contentType:false,
    success:function (res) {
      $('#myimg').val(res[0].avatar)
      $('#preview').attr('src',res[0].avatar)
    }
  })
})
//编辑用户信息功能，利用事件委托给编辑按钮绑定点击事件
$('tbody').on('click','.edit',function () {
  //获取编辑按钮的自定义属性，获取id值
  var id=$(this).attr('data-id')
  // 发送ajax请求
  $.ajax({
    type:'get',
    url:'/users/'+id,//id为占位符
    success:function (res) {
      var html=template('modifyTpl',res)
      $('#modifyBox').html(html)
    },
    error:function (res) {
      console.log(res)
    }
  })
  
})
//提交修改用户信息，利用委托事件绑定提交事件
$("#modifyBox").on('submit','#modifyForm',function () {
    // 获取id值
    var id=$(this).attr('data-id')
    var data=$(this).serialize() //自动收集表单信息
    $.ajax({
      type:'put',
      url:"/users/"+id,
      data,
      success:function (res) {
        location.reload()  //刷新页面
      }
    })
    return false//阻止表单默认行为
})




