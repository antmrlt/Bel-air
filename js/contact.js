function changeDisplay(id) {
    var leftButton = document.getElementById('left');
    var rightButton = document.getElementById('right');

    var form = document.getElementById('form');
    var cube = document.getElementById('cube');

    if (id === 'left') {
        leftButton.style.opacity = '1';
        rightButton.style.opacity = '0.4';

        form.style.display = 'flex';
        cube.style.display = 'none';
    } else if (id === 'right') {
        leftButton.style.opacity = '0.4';
        rightButton.style.opacity = '1';

        cube.style.display = 'flex';
        form.style.display = 'none';;
    }
}