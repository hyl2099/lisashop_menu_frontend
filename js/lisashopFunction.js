$(function() {
    var requestApi = "http://locahost:8080";

    function LoadFunction() {
        $("#d1").html('Loading...');
    }
    function erryFunction() {
        alert("error...");
    }


    // 发送 psot message 请求
    $("#sendMessage").click(function() {
        let messageName = $("#messageName").val();
        let messageEmail = $("#messageEmail").val();
        let messageTel = $("#messageTel").val();
        let messageContent = $("#messageContent").val();

        var nowTime = Date.now();
        let url = requestApi + "/message/add";
        let parm = {
            name:messageName,
            email:messageEmail,
            tele:messageTel,
            message:messageContent,
            time:nowTime
        };
        postData(url,parm);
    });

    // 发送 psot suscribir 请求
    $("#suscribir").click(function() {
        let suscribirEmail = $("#suscribirEmail").val();
        let url = requestApi + "/suscribir/add";
        var nowTime = Date.now();
        parm = {
            email:suscribirEmail,
            time:nowTime
        };
        postData(url);
    });


});


function postData(url,parm){
    $.ajax({
        type: 'POST',
        url: url,
        parm:parm
    })
        .done(function(data, status, xhr) {
            onpageshow("Y enviado!");
        })
        .fail(function(xhr, status, err) {
            if (xhr.status === 401) {
            }
        });
}

