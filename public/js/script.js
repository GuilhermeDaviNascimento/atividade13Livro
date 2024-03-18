function main() {
    if (document.querySelector('input[name="pesquisaParametro"]:checked').value === 'titulo') {
        const titulo = document.querySelector('#titulo').value
        window.location.assign('/pesquisar?titulo=' + titulo); 
    } else {
        const ano = document.querySelector('#ano').value
        window.location.assign('/pesquisar/' + ano); 
    }
}
