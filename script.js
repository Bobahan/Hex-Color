function changeColor() {
    let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F'];
    let hexCode1 = '';
    let hexCode2 = '';

    for(let i = 0; i < 6 ; i++) {
        let random_index1 = Math.floor(Math.random() * array.length);
        hexCode1 += array[random_index1];
        
        let random_index2 = Math.floor(Math.random() * array.length);
        hexCode2 += array[random_index2];
    }
    document.body.style.background = `linear-gradient(to right, #${hexCode1}, #${hexCode2})`;
    document.querySelector('.hex_code1').innerHTML = hexCode1;
    document.querySelector('.hex_code2').innerHTML = hexCode2;
}       