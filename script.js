const installBtn = document.getElementById('install');

var i = 0;

installBtn.addEventListener('click', () =>{
    document.querySelector('.on-install').style.display ='block';
    setInterval(() => {
        document.getElementById('per').innerText = i;

        if (i < 100) {
            i += 1;
        }
        else{
            i = 100;
        }

        installBtn.innerText = 'cancel';
        installBtn.style.background = 'gray';

    }, 100);


})
