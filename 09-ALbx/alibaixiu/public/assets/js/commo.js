  //为退出按钮绑定点击事件
  $('#logout').on('click',function(){
    // 弹出确认框，confirm返回布尔值
    var isConfirm=confirm('确定退出吗')
    //判断用户是否退出
    if(isConfirm) {
      //发送ajax请求
      $.ajax({
        type:'post',
        url:'/logout',
        success:function(){
          location.href='login.html'
        },
        error:function(){
          alert('退出失败')
        }
      })
    }
  })