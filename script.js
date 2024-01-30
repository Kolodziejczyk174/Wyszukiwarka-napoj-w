const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = e => {
    const text = e.target.value.toLowerCase();

    li.forEach(e1 => {        
        if (e1.textContent.toLowerCase().indexOf(text) !== -1){
            e1.style.display = 'block';
        } else{
            e1.style.display = 'none';
        }
    });
}

search.addEventListener('keyup', searchEngine);