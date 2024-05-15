document.addEventListener('DOMContentLoaded', ()=> {
    console.log('script.js file works');

    const title = document.querySelector('title').textContent;


    window.onscroll = function () {
        scrollFunction()
    };


    if (title === 'Home') {

        const welcomeSection = document.querySelector('.welcome-section');

        document.body.style.overflow = 'hidden';

        const goContainer = document.querySelector('.container-arrow');
        const projectsSection = document.querySelector('.projects-section');

        goContainer.addEventListener('click', () => {
            document.body.style.overflow = 'visible';
            welcomeSection.classList.add('scroll-up');


        })

    }

    function scrollFunction() {
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


