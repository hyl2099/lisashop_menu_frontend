window.onload = function(){
    getAbout();
}

var requestApi = "http://localhost:8080";

var referrer = document.referrer;

function LoadFunction() {
    $("#d1").html('Loading...');
}
function erryFunction() {
    alert("error...");
}

function getAbout() {
    let url = requestApi + "/bienvenido";
    $.ajax({
        type: 'GET',
        url: url,
        timeout: 1000,
        beforeSend: LoadFunction, //加载执行方法
        error: erryFunction, //错误执行方法
        success: loadAbout //成功执行方法
    })
}

function loadAbout(tt) {
    var json = eval(tt); //数组
    // $("#aboutBody").val(json[0].body);
    document.getElementById("aboutBody").innerText = json[0].body;

}

