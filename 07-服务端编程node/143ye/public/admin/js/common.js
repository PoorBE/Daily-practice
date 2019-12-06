function serializeToJson(form) {
    var result={}
    var f=form.serializeArray()
    for (var i=0;i<f.length;i++) {
        result[f[i].name]=f[i].value
    }
    return result
}
