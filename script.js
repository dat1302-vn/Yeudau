
/* =================================
   CHUYỂN MÀN HÌNH
================================= */

function showScreen(number) {

    const screens =
        document.querySelectorAll(".screen");


    // Ẩn tất cả màn hình

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    // Tìm màn hình cần hiển thị

    const target =
        document.getElementById(
            "screen" + number
        );


    // Hiển thị màn hình

    if (target) {

        target.classList.add("active");

    }

}


/* =================================
   CHỜ TRANG HTML TẢI XONG
================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* =========================
           NÚT BẤM VÀO ĐÂY
        ========================= */

        const startButton =
            document.getElementById(
                "startButton"
            );


        if (startButton) {

            startButton.addEventListener(
                "click",
                function() {

                    showScreen(2);

                }
            );

        }


        /* =========================
           CÁC NÚT TIẾP THEO
        ========================= */

        const nextButtons =
            document.querySelectorAll(
                ".next-button"
            );


        nextButtons.forEach(
            function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        const nextScreen =
                            this.getAttribute(
                                "data-next"
                            );


                        showScreen(
                            nextScreen
                        );

                    }
                );

            }
        );

    }
);


/* =================================
   NÚT ĐỒNG Ý
================================= */

function yesLove() {

    // Chuyển sang màn hình cuối

    showScreen(5);


    // Tạo rất nhiều trái tim

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        setTimeout(
            function() {

                createHeart();

            },
            i * 80
        );

    }

}


/* =================================
   NÚT "ĐỂ EM SUY NGHĨ"
================================= */

function moveButton() {

    const button =
        document.querySelector(
            ".no-button"
        );


    if (!button) {

        return;

    }


    // Kích thước màn hình

    const maxX =
        window.innerWidth -
        button.offsetWidth -
        30;


    const maxY =
        window.innerHeight -
        button.offsetHeight -
        30;


    // Vị trí ngẫu nhiên

    const x =
        Math.random() *
        Math.max(maxX, 20);


    const y =
        Math.random() *
        Math.max(maxY, 20);


    // Cho nút chạy

    button.style.position =
        "fixed";


    button.style.left =
        x + "px";


    button.style.top =
        y + "px";

}


/* =================================
   TẠO TRÁI TIM BAY
================================= */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "heart"
    );


    // Danh sách trái tim

    const heartList = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💘",
        "💝"

    ];


    // Chọn ngẫu nhiên

    heart.innerHTML =
        heartList[
            Math.floor(
                Math.random() *
                heartList.length
            )
        ];


    // Vị trí ngang

    heart.style.left =
        Math.random() * 100 +
        "vw";


    // Kích thước

    heart.style.fontSize =
        15 +
        Math.random() * 30 +
        "px";


    // Tốc độ bay

    heart.style.animationDuration =
        4 +
        Math.random() * 5 +
        "s";


    // Thêm vào website

    document.body.appendChild(
        heart
    );


    // Xóa sau khi bay xong

    setTimeout(
        function() {

            heart.remove();

        },
        9000
    );

}


/* =================================
   TỰ ĐỘNG TẠO TRÁI TIM
================================= */

setInterval(
    function() {

        createHeart();

    },
    700
);