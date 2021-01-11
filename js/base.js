layui.use(['layer','util','element','form'], function(){
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
        $('#thisTime').html('当前服务器时间：'+ util.toDateString(new Date().getTime(),"yyyy-MM-dd HH:mm:ss"));
    },1000);


    layer.msg('只想弱弱提示');
});
