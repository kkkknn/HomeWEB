layui.use(['layer','util'], function(){
    var layer = layui.layer
        ,$=layui.$
        ,util=layui.util;
    //跳转顶部
    util.fixbar({
        top:true
        , css: { right: 15, bottom: 50 }
        , bgcolor: '#2a96ff !important;display:block;'
        ,showHeight:100
        , click: function (type) {
            if (type === 'top') {
                $('.layui-body').animate({//主要代码
                    scrollTop: 0
                }, 200);
            }
        }
    });

    setInterval(function updateTime(){
        //底部倒计时
        var serverTime = new Date().getTime(); //假设为当前服务器时间，这里采用的是本地时间，实际使用一般是取服务端的
        var str=util.toDateString(serverTime,"yyyy-MM-dd HH:mm:ss");
        $('#thisTime').html('当前服务器时间：'+ str);
    },1000);


    layer.msg('只想弱弱提示');
});
