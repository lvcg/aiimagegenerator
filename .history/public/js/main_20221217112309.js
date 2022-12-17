function onSubmit(e) {
    e.preventDefault();

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if (prompt === '') {
        alert('Please add some text');
        return;
    }

    generateImageRequest(prompt, size);
}

async function generateImageRequest(prompt, size){

}

function showSpinner(){
    document.querySelector('.spinner').classList.add('show');
}

function showSpinner(){
    document.querySelector('.spinner').classList.add('show');
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);