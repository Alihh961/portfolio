console.log('script.js file works');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("header").classList.add('scroll')
    } else {
        document.querySelector("header").classList.remove('scroll')

    }
}