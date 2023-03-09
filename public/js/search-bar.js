let resultContainer;

window.addEventListener('click', () => {
    resultContainer.innerHTML = ''
    resultContainer.style.display = 'none'

    
})

window.addEventListener('DOMContentLoaded', () => {
    resultContainer = document.querySelector('#search-menu-container')
    resultContainer.style.display = 'none';
    resultContainer.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    const searchInput = document.querySelector('#search-input');
    let ref;

    searchInput.addEventListener('input', (e) => {
        if(e.target.value === '') {
            resultContainer.style.display ='none'
            return
        } else {
            const value = e.target.value;
            if(ref) {
                clearTimeout(ref);
            }
            ref =setTimeout(() => {
                axios.get(`/user?search=${value}`)
                    .then(response => {
                        resultContainer.style.display = 'block';
                        resultContainer.innerHTML = response.data;
                    })
                    .catch(error => console.log(error))
            }, 1000)
        } else {
            resultContainer.style.display = 'none'
        }
        
    })
})