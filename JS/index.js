let btn = document.getElementsByClassName('hamburge')[0];
let navItem = document.getElementsByClassName('nav-items')[0];
let click = false;

btn.addEventListener('click', () => {
    if (!click) {
        btn.classList.add('click');
        navItem.classList.add('click');
        click = true;
        if(btn.classList.contains('close'))
        {
            btn.classList.remove('close');
            navItem.classList.remove('close');
        }
    }
    else {
        btn.classList.remove('click');
        btn.classList.add('close');
        navItem.classList.add('close');
        navItem.classList.remove('click');
        click = false;
    }
});

const homeCard1 = document.getElementsByClassName('home-card')[0];
const homeCard2 = document.getElementsByClassName('home-card')[1];
const homeCard3 = document.getElementsByClassName('home-card')[2];
const homeCardContainer = document.getElementsByClassName('home-card-container')[0];

homeCardFunction = () => {
    if(homeCard1.classList.contains('down')){
        homeCard1.classList.add('scroll1');
        homeCardContainer.classList.add('home-container');
    }
    if(homeCard2.classList.contains('down')){
        homeCard2.classList.add('scroll2');
    }
    if(homeCard3.classList.contains('down')){
        homeCard3.classList.add('scroll3');
    }

    homeCard1.classList.add('down');
    homeCard2.classList.add('down');
    homeCard3.classList.add('down');
};

const homeCardObserver = new IntersectionObserver(homeCardFunction);
homeCardObserver.observe(homeCard1);