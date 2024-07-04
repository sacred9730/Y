    // 이미지출처 https://unblast.com/10-free-space-background-images-jpg/ 
    /* 동영상 가상 API start */
    function v_1(){ // im 선택자 //
    var js_im = document.querySelectorAll(".im")[1]; // im 선택자 html 출력//
    /* 가상 영상 정보들*/
    var videoinfo = {
        strong: "안녕하세요 이것은 가상 스크립트 내장된 API 입니다 현재는 API v_1",
        p: "채널명 v_1",
        a: "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg",
        view: 1000,
        upload: "2023-12-31T12:00:00Z",
        link : "https://youtu.be/DpTe4ai10ek?list=RDMMDpTe4ai10ek",
        t: 60,
    };

    /*날짜 출력 포맷 변경*/
    var fvc = vc(videoinfo.view);
    var js_span = "조회수: " + fvc + " &middot; 업로드: " + calcday(videoinfo.upload) + "일 전";

        js_im.querySelector(".im img").src = videoinfo.a;
        js_im.querySelector(".im-a img").src = videoinfo.a;

        js_im.querySelector(".im-b > strong").textContent = videoinfo.strong;
        js_im.querySelector(".im-b > p").textContent = videoinfo.p;
        js_im.querySelector(".im-b > span").innerHTML = js_span;

        js_im.querySelector("a").href = videoinfo.link;
        js_im.querySelector(".im-title > a").href = videoinfo.link;

        /* css var-time 동기화*/
        js_im.style.setProperty('--var-time',videoinfo.t);

        /*.im 호버할경우 재생시간 흘러가도록 만듬*/
    var js_i_t = js_im.querySelector('.icon.i-t');
    var timeleft = videoinfo.t;
    var timeinterval;
        js_im.addEventListener('mouseover', function(){
            timeinterval = setInterval(function(){
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
                /*점점 시간을뺴며 0미만일경우 원래시간으로 복귀*/
                timeleft--;
                if(timeleft < 0){
                timeleft = videoinfo.t;
                };                
            },950);
            
        });
        /* .im 호버해제할 경우 재생시간 초기화 */
        js_im.addEventListener('mouseout',function(){
            clearInterval(timeinterval);
            timeleft = videoinfo.t;
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
        });
    }; /* 가상 API End*/

    
    /* 동영상 가상 API start */
    function v_2(){ // im 선택자 //
    var js_im = document.querySelectorAll(".im")[2]; // im 선택자 html 출력//
    /* 가상 영상 정보들*/
    var videoinfo = {
        strong: "안녕하세요 이것은 가상 스크립트 내장된 API 입니다 현재는 API v_2",
        p: "채널명 v_2",
        a: "https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images-1536x1024.jpg",
        view: 5000,
        upload: "2022-12-31T12:00:00Z",
        link : "https://youtu.be/DpTe4ai10ek?list=RDMMDpTe4ai10ek",
        t: 90,
    };

    /*날짜 출력 포맷 변경*/
    var fvc = vc(videoinfo.view);
    var js_span = "조회수: " + fvc + " &middot; 업로드: " + calcday(videoinfo.upload) + "일 전";

        js_im.querySelector(".im img").src = videoinfo.a;
        js_im.querySelector(".im-a img").src = videoinfo.a;

        js_im.querySelector(".im-b > strong").textContent = videoinfo.strong;
        js_im.querySelector(".im-b > p").textContent = videoinfo.p;
        js_im.querySelector(".im-b > span").innerHTML = js_span;

        js_im.querySelector("a").href = videoinfo.link;
        js_im.querySelector(".im-title > a").href = videoinfo.link;

        /* css var-time 동기화*/
        js_im.style.setProperty('--var-time',videoinfo.t);

        /*.im 호버할경우 재생시간 흘러가도록 만듬*/
    var js_i_t = js_im.querySelector('.icon.i-t');
    var timeleft = videoinfo.t;
    var timeinterval;
        js_im.addEventListener('mouseover', function(){
            timeinterval = setInterval(function(){
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
                /*점점 시간을뺴며 0미만일경우 원래시간으로 복귀*/
                timeleft--;
                if(timeleft < 0){
                timeleft = videoinfo.t;
                };                
            },950);
            
        });
        /* .im 호버해제할 경우 재생시간 초기화 */
        js_im.addEventListener('mouseout',function(){
            clearInterval(timeinterval);
            timeleft = videoinfo.t;
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
        });
    }; /* 가상 API End*/

    /* 동영상 가상 API start */
    function v_3(){ // im 선택자 //
    var js_im = document.querySelectorAll(".im")[3]; // im 선택자 html 출력//
    /* 가상 영상 정보들*/
    var videoinfo = {
        strong: "안녕하세요 이것은 가상 스크립트 내장된 API 입니다 현재는 API v_3",
        p: "채널명 v_3",
        a: "https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-3-1536x1024.jpg",
        view: 8000,
        upload: "2022-06-31T12:00:00Z",
        link : "https://youtu.be/DpTe4ai10ek?list=RDMMDpTe4ai10ek",
        t: 120,
    };

    /*날짜 출력 포맷 변경*/
    var fvc = vc(videoinfo.view);
    var js_span = "조회수: " + fvc + " &middot; 업로드: " + calcday(videoinfo.upload) + "일 전";

        js_im.querySelector(".im img").src = videoinfo.a;
        js_im.querySelector(".im-a img").src = videoinfo.a;

        js_im.querySelector(".im-b > strong").textContent = videoinfo.strong;
        js_im.querySelector(".im-b > p").textContent = videoinfo.p;
        js_im.querySelector(".im-b > span").innerHTML = js_span;

        js_im.querySelector("a").href = videoinfo.link;
        js_im.querySelector(".im-title > a").href = videoinfo.link;

        /* css var-time 동기화*/
        js_im.style.setProperty('--var-time',videoinfo.t);

        /*.im 호버할경우 재생시간 흘러가도록 만듬*/
    var js_i_t = js_im.querySelector('.icon.i-t');
    var timeleft = videoinfo.t;
    var timeinterval;
        js_im.addEventListener('mouseover', function(){
            timeinterval = setInterval(function(){
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
                /*점점 시간을뺴며 0미만일경우 원래시간으로 복귀*/
                timeleft--;
                if(timeleft < 0){
                timeleft = videoinfo.t;
                };                
            },950);
            
        });
        /* .im 호버해제할 경우 재생시간 초기화 */
        js_im.addEventListener('mouseout',function(){
            clearInterval(timeinterval);
            timeleft = videoinfo.t;
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
        });
    }; /* 가상 API End*/

    /* 동영상 가상 API start */
    function v_4(){ // im 선택자 //
    var js_im = document.querySelectorAll(".im")[4]; // im 선택자 html 출력//
    /* 가상 영상 정보들*/
    var videoinfo = {
        strong: "안녕하세요 이것은 가상 스크립트 내장된 API 입니다 현재는 API v_4",
        p: "채널명 v_4",
        a: "https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-4-1536x1024.jpg",
        view: 10000,
        upload: "2021-06-31T12:00:00Z",
        link : "https://youtu.be/DpTe4ai10ek?list=RDMMDpTe4ai10ek",
        t: 150,
    };

    /*날짜 출력 포맷 변경*/
    var fvc = vc(videoinfo.view);
    var js_span = "조회수: " + fvc + " &middot; 업로드: " + calcday(videoinfo.upload) + "일 전";

        js_im.querySelector(".im img").src = videoinfo.a;
        js_im.querySelector(".im-a img").src = videoinfo.a;

        js_im.querySelector(".im-b > strong").textContent = videoinfo.strong;
        js_im.querySelector(".im-b > p").textContent = videoinfo.p;
        js_im.querySelector(".im-b > span").innerHTML = js_span;

        js_im.querySelector("a").href = videoinfo.link;
        js_im.querySelector(".im-title > a").href = videoinfo.link;

        /* css var-time 동기화*/
        js_im.style.setProperty('--var-time',videoinfo.t);

        /*.im 호버할경우 재생시간 흘러가도록 만듬*/
    var js_i_t = js_im.querySelector('.icon.i-t');
    var timeleft = videoinfo.t;
    var timeinterval;
        js_im.addEventListener('mouseover', function(){
            timeinterval = setInterval(function(){
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
                /*점점 시간을뺴며 0미만일경우 원래시간으로 복귀*/
                timeleft--;
                if(timeleft < 0){
                timeleft = videoinfo.t;
                };                
            },950);
            
        });
        /* .im 호버해제할 경우 재생시간 초기화 */
        js_im.addEventListener('mouseout',function(){
            clearInterval(timeinterval);
            timeleft = videoinfo.t;
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
        });
    }; /* 가상 API End*/

    /* 동영상 가상 API start */
    function v_5(){ // im 선택자 //
    var js_im = document.querySelectorAll(".im")[5]; // im 선택자 html 출력//
    /* 가상 영상 정보들*/
    var videoinfo = {
        strong: "안녕하세요 이것은 가상 스크립트 내장된 API 입니다 현재는 API v_5",
        p: "채널명 v_5",
        a: "https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-7-1536x1024.jpg",
        view: 100000,
        upload: "2020-06-31T12:00:00Z",
        link : "https://youtu.be/DpTe4ai10ek?list=RDMMDpTe4ai10ek",
        t: 240,
    };

    /*날짜 출력 포맷 변경*/
    var fvc = vc(videoinfo.view);
    var js_span = "조회수: " + fvc + " &middot; 업로드: " + calcday(videoinfo.upload) + "일 전";

        js_im.querySelector(".im img").src = videoinfo.a;
        js_im.querySelector(".im-a img").src = videoinfo.a;

        js_im.querySelector(".im-b > strong").textContent = videoinfo.strong;
        js_im.querySelector(".im-b > p").textContent = videoinfo.p;
        js_im.querySelector(".im-b > span").innerHTML = js_span;

        js_im.querySelector("a").href = videoinfo.link;
        js_im.querySelector(".im-title > a").href = videoinfo.link;

        /* css var-time 동기화*/
        js_im.style.setProperty('--var-time',videoinfo.t);

        /*.im 호버할경우 재생시간 흘러가도록 만듬*/
    var js_i_t = js_im.querySelector('.icon.i-t');
    var timeleft = videoinfo.t;
    var timeinterval;
        js_im.addEventListener('mouseover', function(){
            timeinterval = setInterval(function(){
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
                /*점점 시간을뺴며 0미만일경우 원래시간으로 복귀*/
                timeleft--;
                if(timeleft < 0){
                timeleft = videoinfo.t;
                };                
            },950);
            
        });
        /* .im 호버해제할 경우 재생시간 초기화 */
        js_im.addEventListener('mouseout',function(){
            clearInterval(timeinterval);
            timeleft = videoinfo.t;
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
        });
    }; /* 가상 API End*/

    /* 동영상 가상 API start */
    function v_6(){ // im 선택자 //
    var js_im = document.querySelectorAll(".im")[6]; // im 선택자 html 출력//
    /* 가상 영상 정보들*/
    var videoinfo = {
        strong: "안녕하세요 이것은 가상 스크립트 내장된 API 입니다 현재는 API v_6",
        p: "채널명 v_6",
        a: "https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-11-1536x1024.jpg",
        view: 1000000,
        upload: "2020-12-31T12:00:00Z",
        link : "https://youtu.be/DpTe4ai10ek?list=RDMMDpTe4ai10ek",
        t: 2000,
    };

    /*날짜 출력 포맷 변경*/
    var fvc = vc(videoinfo.view);
    var js_span = "조회수: " + fvc + " &middot; 업로드: " + calcday(videoinfo.upload) + "일 전";

        js_im.querySelector(".im img").src = videoinfo.a;
        js_im.querySelector(".im-a img").src = videoinfo.a;

        js_im.querySelector(".im-b > strong").textContent = videoinfo.strong;
        js_im.querySelector(".im-b > p").textContent = videoinfo.p;
        js_im.querySelector(".im-b > span").innerHTML = js_span;

        js_im.querySelector("a").href = videoinfo.link;
        js_im.querySelector(".im-title > a").href = videoinfo.link;

        /* css var-time 동기화*/
        js_im.style.setProperty('--var-time',videoinfo.t);

        /*.im 호버할경우 재생시간 흘러가도록 만듬*/
    var js_i_t = js_im.querySelector('.icon.i-t');
    var timeleft = videoinfo.t;
    var timeinterval;
        js_im.addEventListener('mouseover', function(){
            timeinterval = setInterval(function(){
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
                /*점점 시간을뺴며 0미만일경우 원래시간으로 복귀*/
                timeleft--;
                if(timeleft < 0){
                timeleft = videoinfo.t;
                };                
            },950);
            
        });
        /* .im 호버해제할 경우 재생시간 초기화 */
        js_im.addEventListener('mouseout',function(){
            clearInterval(timeinterval);
            timeleft = videoinfo.t;
            var hours = Math.floor(timeleft / 3600);
            var minutes = Math.floor((timeleft % 3600) / 60);
            var seconds = timeleft % 60;
            var displaytime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            js_i_t.textContent = displaytime;
        });
    }; /* 가상 API End*/

   


