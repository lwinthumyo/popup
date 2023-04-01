document.getElementById('open-menu').addEventListener('click', function() {
    document.getElementsByClassName('popup')[0].classList.add('active');
})

document.getElementById('dismiss-btn').addEventListener('click', function() {
    document.getElementsByClassName('popup')[0].classList.remove('active');
})