AOS.init({
    duration: 1200,
    once: true
});

/****************** Super Investors Slider JS ********************/
function initSlider(){
    
    $('#super-investors-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
}

function initProgress(){
        
    let percentShow = document.querySelectorAll('.percentshow');
    let getPercentShow = Array.from(percentShow);

    let percent = document.querySelectorAll('.countbar');
    let getPercent = Array.from(percent);

    getPercentShow.map((viewPercen) => {
        let startCount = 0;
        let progressPercentCount = () => {
            startCount ++;
            
            if(startCount < viewPercen.dataset.percentnumber){
                viewPercen.innerHTML = `${startCount}%`;                
            }
            else{
                viewPercen.innerHTML = `${viewPercen.dataset.percentnumber}%`;
                clearInterval(percentStop);
            }
        }
        let percentStop = setInterval(() => {
            progressPercentCount();
        },20)
    })

    getPercent.map((viewline) => {
        
        let countStart = 0;
        let progressbar = () => {
            countStart ++;
            
            if(countStart < viewline.dataset.percentbarline) {
                viewline.style.width = `${countStart}%`;                
            }
            else{
                viewline.style.width = `${viewline.dataset.percentbarline}%`;
                clearInterval(viewlineStop);
            }
        }
        let viewlineStop = setInterval(() => {
            progressbar();
        },20)
    })

}
