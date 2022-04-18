$(document).ready(function() {
    $('.header__burger').click(function(e) {
        $('.header__burger, .header__menu').toggleClass('active');
    })
});
$(document).ready(function() {

    $(".block__item__ads").hover(function() {
        $(".block__item__ads .ramka").css("display", "none");
        $(".hover__block__ads").css("display", "block");
    }, function() {
        $(".hover__block__ads").css("display", "none");
        $(".block__item__ads .ramka").css("display", "flex");
    });

    $(".block__item__poly").hover(function() {
        $(".block__item__poly .ramka").css("display", "none");
        $(".hover__block__poly").css("display", "block");
    }, function() {
        $(".hover__block__poly").css("display", "none");
        $(".block__item__poly .ramka").css("display", "flex");
    });

    $(".block__item__web").hover(function() {
        $(".block__item__web .ramka").css("display", "none");
        $(".hover__block__web").css("display", "block");
    }, function() {
        $(".hover__block__web").css("display", "none");
        $(".block__item__web .ramka").css("display", "flex");
    });

    $(".block__item__smm").hover(function() {
        $(".block__item__smm .ramka").css("display", "none");
        $(".hover__block__smm").css("display", "block");
    }, function() {
        $(".hover__block__smm").css("display", "none");
        $(".block__item__smm .ramka").css("display", "flex");
    });
    $(".block__item__1c").hover(function() {
        $(".block__item__1c .ramka").css("display", "none");
        $(".hover__block__1c").css("display", "block");
    }, function() {
        $(".hover__block__1c").css("display", "none");
        $(".block__item__1c .ramka").css("display", "flex");
    });

    // slider header
    $('.slide').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });
    // slider client
    $('.slider__clients').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // slide video
    $('.viedo__slider').slick({
        arrows: true,
        autoPlay: false,
        dots: true
    });
    // slide comment
    $('.block_user_slide').slick({
        dots: true
    });

    // hover-client-soc

    $(".slidehov1").hover(function() {
        $(".slidehov1 .hover-soc").css("display", "block");
        $(".slhv").css("opacity", "0.2");
    }, function() {
        $(".slidehov1 .hover-soc").css("display", "none");
        $(".slhv").css("opacity", "1");
    });


});

// modal windows js


// mleft menu click page{
function show(elementID) {
    let ele = document.getElementById(elementID);
    if (!ele) {
        alert("Not found");
        return;
    }
    let pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}

// modal window for 
let modal = document.querySelector(".modal");
let btn = document.querySelector(".myBtn");
let btn1 = document.querySelector(".myBtn1");
let close = document.querySelector("#close");
let cancel = document.getElementById("cancel");
let btnMobile = document.querySelector('.btn-mobile');

// Модальные окно для десктоп

btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}
cancel.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    } else if (e.target == modalMessaage) {
        modalMessaage.style.display = "none";
    }
}

// Модальные окно спасибо
let modalMessaage = document.querySelector('.modal-message');
let modalSub = document.querySelector('#Sub');
let intName = document.querySelector('.int-name');
let intNumber = document.querySelector('.int-num');
let closer = document.querySelector('#closer');
let zakryt = document.querySelector('.can');

modalSub.onclick = function(event) {
    if (intName.value === "" || intName.value < "3") {
        intName.style.border = "1px solid red";
    } else if (intNumber.value === "") {
        intNumber.style.border = "1px solid red";
    } else {
        modalMessaage.style.display = "block";
        modal.style.display = "none";

    }
}
intName.oninput = function(e) {
    if (intName.value > "3") {
        intName.style.border = "1px solid black";
    }
}
intNumber.oninput = function(e) {
    if (intNumber.value >= 10) {
        intNumber.style.border = "1px solid black";
    }
}
zakryt.onclick = function() {
    modalMessaage.style.display = "none";

}