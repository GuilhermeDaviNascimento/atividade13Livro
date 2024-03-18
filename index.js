const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, 'views'));

let livros = [{
    "ID": 1,
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J.K. Rowling",
    "year": 1997
},
{
    "ID": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "year": 1960
},
{
    "ID": 3,
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
},
{
    "ID": 4,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
},
{
    "ID": 5,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "year": 1951
},
{
    "ID": 6,
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "year": 1954
},
{
    "ID": 7,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "year": 1813
},
{
    "ID": 8,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": 1937
},
{
    "ID": 9,
    "title": "The Chronicles of Narnia",
    "author": "C.S. Lewis",
    "year": 1950
},
{
    "ID": 10,
    "title": "The Hitchhiker's Guide to the Galaxy",
    "author": "Douglas Adams",
    "year": 1979
},
{
    "ID": 11,
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "year": 1851
},
{
    "ID": 12,
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "year": 1818
},
{
    "ID": 13,
    "title": "Alice's Adventures in Wonderland",
    "author": "Lewis Carroll",
    "year": 1865
},
{
    "ID": 14,
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "year": 1932
},
{
    "ID": 15,
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "year": 1890
}]

function pesquisarArray(pesquisa, array, propriedade) {
    const regex = new RegExp(pesquisa, 'i');
    return array.filter(objeto => regex.test(objeto[propriedade]));
}

app.get("/", (req, res) => res.render('index', {lista: livros}));

app.get("/pesquisar", (req, res) => {
    let titulo = req.query?.titulo || '';
    let pesquisa = pesquisarArray(titulo, livros, 'title')
    let listafiltrada = [];
    pesquisa.forEach(livro => {
        listafiltrada.push(livro)
    });
    res.render('index', { lista: listafiltrada });
})

app.get(`/pesquisar/:ano`, (req, res) => {
    let ano = req.params?.ano || '';
    let listafiltrada = [];
    livros.forEach(livro => {
        if (livro.year === ano) {
            listafiltrada.push(livro)
        }
    });
    res.render('index', { lista: listafiltrada });
})
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
