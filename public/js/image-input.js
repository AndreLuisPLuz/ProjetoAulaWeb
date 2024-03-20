const photo = document.getElementById('imgFoto');
const file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
});

file.addEventListener('click', () => {
    if (file.files.length == 0) {
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file.files[0]);

    reader.onload = () => {
        photo.src = reader.result;
    };
});