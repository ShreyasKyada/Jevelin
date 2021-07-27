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