const bcrypt=require('bcryptjs')

async function fn() {
    //生成一个随机字符串
    const salt=await bcrypt.genSalt(10)
    //与密码相连
    const str =await bcrypt.hash('123456',salt)
    console.log(str);
}
fn();
