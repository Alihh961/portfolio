document.addEventListener('DOMContentLoaded', ()=> {
    console.log('script.js file works');

    const title = document.querySelector('title').textContent;


    window.onscroll = function () {
        changeHeaderStyleInScrolling()
    };

    // to always go to the top of the page when the DOM is loaded
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }


    if (title === 'Home') {

        const welcomeSection = document.querySelector('.welcome-section');

        // document.body.style.overflow = 'hidden';

        const goContainer = document.querySelector('.container-arrow');
        const projectsSection = document.querySelector('.projects-section');

        goContainer.addEventListener('click', () => {
            document.body.style.overflow = 'visible';
            welcomeSection.classList.add('scroll-up');


        });



    }


    //used to change the header style
    function changeHeaderStyleInScrolling() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector("header").classList.add('scroll')
        } else {
            document.querySelector("header").classList.remove('scroll')

        }
    }

    function scrollToSection(target) {


        const targetOffsetTop = target.offsetTop;

        window.scrollTo({
            top: targetOffsetTop,
            behavior: 'smooth'
        });
    }


});


