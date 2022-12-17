function onSubmit(e) {
    e.preventDefault();

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if (prompt === '') {

    }
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);