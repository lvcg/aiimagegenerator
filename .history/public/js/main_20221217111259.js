function onSubmit(e) {
    e.preventDefault();

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#s').value;
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);