
$(document).ready(function () {
    $("#loader").fadeOut(1000)
});

// sidenav
$(".nav-menu .fa-bars").on("click", function () {
    $(".fa-bars").toggleClass("fa-xmark");
    $(".nav").toggleClass("rev-expanded");
    $(".nav-links").toggleClass("expanded");
    $(".nav-links .links ul li").animate({ "paddingTop": "25px", "opacity": "1" }, 1000);
})



$('#search').on("input", e => {
    searchMovies(e.target.value);
    if(e.target.value == "")
    {
        getMovies("movie/now_playing");
    }
});

$(".now-playing").on("click", function () {
    getMovies()
});

$(".popular").on("click", function () {
    getPopularMovies()
});

$(".top-rated").on("click", function () {
    getTopRatedMovies()
});

$(".trending").on("click", function () {
    getTrendingMovies()
});

$(".upcoming").on("click", function () {
    getUpComingMovies()
});



function cardHoverIn() {
    $(this).find($('.overLayer')).css({ "opacity": "1", "visibility": "visible" });
    $(this).find($('.overLayer .title')).removeClass('animate__slideOutLeft');
    $(this).find($('.overLayer .title')).addClass('animate__fadeInDown animate__delay-0s');
    $(this).find($('.overLayer .descript')).removeClass('animate__slideOutLeft');
    $(this).find($('.overLayer .descript')).addClass('animate__flipInX animate__delay-0s');
    $(this).find($('.overLayer .date')).removeClass('animate__slideOutLeft');
    $(this).find($('.overLayer .date')).addClass('animate__fadeInUp animate__delay-0s');
    $(this).find($('.overLayer .rate')).removeClass('animate__slideOutLeft');
    $(this).find($('.overLayer .rate')).addClass('animate__fadeInUp animate__delay-0s');
    $(this).find($('.cardImage img')).addClass("animate");
}


function cardHoverOut() {
    $(this).find($('.overLayer')).css({ "opacity": "0", "visibility": "hidden" });
    $(this).find($('.overLayer .title')).removeClass('animate__fadeInDown animate__delay-0s');
    $(this).find($('.overLayer .title')).addClass('animate__slideOutLeft');
    $(this).find($('.overLayer .descript')).removeClass('animate__flipInX animate__delay-0s');
    $(this).find($('.overLayer .descript')).addClass('animate__slideOutLeft');
    $(this).find($('.overLayer .date')).removeClass('animate__fadeInUp animate__delay-0s');
    $(this).find($('.overLayer .date')).addClass('animate__slideOutLeft');
    $(this).find($('.overLayer .rate')).removeClass('animate__fadeInUp animate__delay-0s');
    $(this).find($('.overLayer .rate')).addClass('animate__slideOutLeft');
    $('.cardImage img').removeClass("animate");
}




// get now-playing 
async function getMovies() {
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
    const response = await fetch(apiUrl, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNThkZjY1OGVjYzc1YWE0NDdjMjJjYzk4OWFmMDQ1NCIsIm5iZiI6MTcyMTQ3NjUxNy45MTAwNjMsInN1YiI6IjY2OWI5ZGQ3ZTdkNWE1NGM5NmM1M2M2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KYeE0dpgRoozDo7Hg_BpAOGgIhO5RonXPDo9pu3rcgY",
            "accept": "application/json",
        }
    });
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const { results } = data;
        console.log(results);
        display(results)
    }
}
getMovies()

// search
async function searchMovies() {
    const apiKey = "058df658ecc75aa447c22cc989af0454";
    // const apiUrl = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNThkZjY1OGVjYzc1YWE0NDdjMjJjYzk4OWFmMDQ1NCIsIm5iZiI6MTcyMTQ3NjUxNy45MTAwNjMsInN1YiI6IjY2OWI5ZGQ3ZTdkNWE1NGM5NmM1M2M2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KYeE0dpgRoozDo7Hg_BpAOGgIhO5RonXPDo9pu3rcgY",
            "accept": "application/json",
        }
    });
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const { results } = data;
        console.log(results);
        display(results)
    }
}
// searchMovies()


// get popular 
async function getPopularMovies() {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const response = await fetch(apiUrl, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNThkZjY1OGVjYzc1YWE0NDdjMjJjYzk4OWFmMDQ1NCIsIm5iZiI6MTcyMTQ3NjUxNy45MTAwNjMsInN1YiI6IjY2OWI5ZGQ3ZTdkNWE1NGM5NmM1M2M2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KYeE0dpgRoozDo7Hg_BpAOGgIhO5RonXPDo9pu3rcgY",
            "accept": "application/json",
        }
    });
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const { results } = data;
        // console.log(results);
        display(results)
    }
}


// get top-rated 
async function getTopRatedMovies() {
    const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const response = await fetch(apiUrl, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNThkZjY1OGVjYzc1YWE0NDdjMjJjYzk4OWFmMDQ1NCIsIm5iZiI6MTcyMTQ3NjUxNy45MTAwNjMsInN1YiI6IjY2OWI5ZGQ3ZTdkNWE1NGM5NmM1M2M2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KYeE0dpgRoozDo7Hg_BpAOGgIhO5RonXPDo9pu3rcgY",
            "accept": "application/json",
        }
    });
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const { results } = data;
        // console.log(results);
        display(results)
    }
}

// get trending 
async function getTrendingMovies() {
    const apiKey = "058df658ecc75aa447c22cc989af0454";
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US&include_adult=false`);
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const { results } = data;
        // console.log(results);
        display(results)
    }
}

// get upcoming 
async function getUpComingMovies() {
    const apiUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const response = await fetch(apiUrl, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNThkZjY1OGVjYzc1YWE0NDdjMjJjYzk4OWFmMDQ1NCIsIm5iZiI6MTcyMTQ3NjUxNy45MTAwNjMsInN1YiI6IjY2OWI5ZGQ3ZTdkNWE1NGM5NmM1M2M2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KYeE0dpgRoozDo7Hg_BpAOGgIhO5RonXPDo9pu3rcgY",
            "accept": "application/json",
        }
    });
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const { results } = data;
        // console.log(results);
        display(results)
    }
}



function display(arr) {
    let bBox = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        bBox += `<div class="col-lg-4 col-md-6 col-sm-12 animate__animated">
                <div class=" item  overflow-hidden position-relative ">
                    <div class="cardImage "> 
                        <img src="https://image.tmdb.org/t/p/w780/${arr[i].poster_path}" class="w-100" alt="">
                    </div>
                    <div class="overLayer overflow-hidden position-absolute top-0 start-0 end-0 bottom-0  ">
                        <h1 class=" text-center title animate__animated ">
                        ${arr[i].name ? arr[i].name : arr[i].title}
                        </h1>
                        <p class="descript animate__animated ">
                        ${arr[i].overview.split(" ").slice(0, 20).join(" ")}
                        </p>
                        <p class="date animate__animated ">
                            <span>
                                Release Date
                                <span> : ${arr[i].release_date ? arr[i].release_date : arr[i].first_air_date}</span>
                            </span>
                        </p>
                        <h3 class="rate animate__animated ">
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-regular fa-star-half-stroke text-warning fs-6"></i> 
                        </h3>
                        <h3 class="d-flex justify-content-center align-items-center rate vote animate__animated ">
                        ${arr[i].vote_average.toFixed(1) ? arr[i].vote_average.toFixed(1) : arr[i].first_air_date.toFixed(1)}
                        </h3>
                    </div>
                </div>
            </div>`

    }
    document.getElementById("rowMovies").innerHTML = bBox
    $('#hero .row div').addClass("animate__fadeIn");
    $('#hero .item ').mouseenter(cardHoverIn);
    $('#hero .item').mouseleave(cardHoverOut);
}



// contact
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let age = document.getElementById("age");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");
let sendBtn = document.getElementById("send-btn");


function validateFormInputs(ele) {
    console.log(ele.id, ele.value);
    let regex = {
        userName: /^[a-zA-z\s]{1,30}$/,
        email: /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{3}$/,
        phone: /^(002){0,1}01[0-25][0-9]{8}$/,
        age: /^(1[6-9]|[2-9][0-9]|100)$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        // repassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    };

    let isValid = regex[ele.id].test(ele.value);

    if (isValid || ele.value == "") {
        ele.nextElementSibling.classList.replace("d-block", "d-none");
        $('.send-btn').removeClass('animate__shakeX bg-danger buttonFormActive');
    } else {
        ele.nextElementSibling.classList.replace("d-none", "d-block");
        $('.send-btn').addClass('animate__shakeX bg-danger buttonFormActive');
    }
    return isValid;

}


userName.addEventListener("input", function () {
    validateFormInputs(this)
})
email.addEventListener("input", function () {
    validateFormInputs(this)
})
phone.addEventListener("input", function () {
    validateFormInputs(this)
})
age.addEventListener("input", function () {
    validateFormInputs(this)
})
password.addEventListener("input", function () {
    validateFormInputs(this)
})

repassword.addEventListener("input", function () {
    if (repassword.value == "" || (repassword.value == password.value)) {
        repassword.nextElementSibling.classList.replace("d-block", "d-none");
        $('.send-btn').removeClass('animate__shakeX bg-danger buttonFormActive');
    } else {
        repassword.nextElementSibling.classList.replace("d-none", "d-block");
        $('.send-btn').addClass('animate__shakeX bg-danger buttonFormActive');
    }
    validateFormInputs(this)
})

$("#password").focus(function () {
    $(".showPass").css("opacity", 1);
    $(".showPass").css("bottom", 10);
})

$(".showPass").click(function () {
    if ($("#password").attr("type") == "text") {
        $("#password").attr("type", "password");
        $(".showPass").html('<i data-show="show" class="fa-solid fa-eye-slash"></i>');
    } else {
        $("#password").attr("type", "text");
        $(".showPass").html('<i data-show="show" class="fa-solid fa-eye"></i>');
    }
})

$(document).click(function (e) {
    // console.log(e.target);
    if ($(e.target)[0] == $('#password')[0] || $(e.target).attr('data-show') == $('.showPass i').attr('data-show')) {
        $(".showPass").css("opacity", 1);
        $(".showPass").css("bottom", 10);
    }
    else {
        $(".showPass").css("opacity", 0);
        $(".showPass").css("bottom", -20);
    }
})



// to-top
$(window).scroll(function () {
    const scrollPosition = $(window).scrollTop();
    console.log(scrollPosition);
    if (scrollPosition >= 105) {
        $('#toTop').css({ "display": "flex" });
    } else {
        $('#toTop').css({ "display": "none" });
    }
})
$("#toTop").on("click", function () {
    // $(window).scrollTop(0)
    $("html, body").animate({scrollTop: 0},2000);
})

