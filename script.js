const apiUrl = "https://api.thecatapi.com/v1/images/search"; // URL correta da API

// Função que faz a requisição e exibe a imagem do gato
function fetchCatImage() {
    fetch(apiUrl, {
        headers: {
            'x-api-key': 'live_YTxTpUkgPettZLom38asDYT9U8DxbPCRSgdXVYSlGpVMFWb8wIoTggieIEBraI1N' // Insere sua chave de API aqui
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const catImageUrl = data[0].url;
        document.getElementById('cat-image').src = catImageUrl;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Adiciona um event listener ao botão que chama a função fetchCatImage quando clicado
document.getElementById('load-cat').addEventListener('click', fetchCatImage);
