function main() {
    if (document.querySelector('input[name="pesquisaParametro"]:checked').value === 'titulo') {
        const titulo = document.querySelector('#titulo').value
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titulo: titulo })
        };
        fetch('/pesquisarTitulo', options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao fazer requisição: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                document.querySelector('#lista').innerHTML = data.mensagem
                if(data.mensagem === ''){
                    document.querySelector('#lista').innerHTML = 'Livro não encontrado'
                }
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        const ano = document.querySelector('#ano').value
        fetch(`/pesquisarAno?ano=${ano}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao fazer requisição: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                document.querySelector('#lista').innerHTML = data.mensagem
                if(data.mensagem === ''){
                    document.querySelector('#lista').innerHTML = 'Livro não encontrado'
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}
