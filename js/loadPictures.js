window.onload = function(){
    load();
}

var requestApi = "http://localhost:8080";

function LoadFunction() {
    $("#d1").html('Loading...');
}
function erryFunction() {
    alert("error...");
}


function load() {
    let url = requestApi + "/matrixPhoto";
    $.ajax({
        type: 'GET',
        url: url,
        timeout: 1000,
        beforeSend: LoadFunction, //加载执行方法
        error: erryFunction, //错误执行方法
        success: loadPictures //成功执行方法
    })
}


function loadPictures(tt) {
    var json = eval(tt); //数组

    $.each(json, function (index, item) {
        //循环获取数据
        var image = json[index].image;

        var img = document.createElement("img");
        img.src = image;
        //
        // var div = document.createElement("div");
        // div.style = "background-image: url(" + image + ");"

        img.height = 400;
        img.width = 400;
        img.className = "img align-self-stretch";
        img.style = "background-image";
        // img.alt = 'Base64 encoded image';
        // document.getElementById("dPictures").append(img);

        var div1=document.createElement("div");
        var div2=document.createElement("div");
        var div3=document.createElement("div");

        div1.className = 'col-md-6 col-lg-3 ftco-animate';
        div2.className = "staff";
        div3.className = 'img-wrap d-flex align-items-stretch';
        div3.appendChild(img);
        div2.appendChild(div3);
        div1.appendChild(div2);

        // document.getElementById("dPictures").append(div2);

        // div_str = "<div className=col-md-6 col-lg-3 ftco-animate"><div className="staff"><div className="img-wrap d-flex align-items-stretch">
        // <img class="img align-self-stretch" style="background-image"  scr = "" + s1 + "></div> </div> </div></div>";

        $("#dPictures").append(img);
        // document.getElementById("dPictures").append(img)

    });

    document.getElementById("dPictures").append()
}


