# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

produtos = [
  {
    nome: 'Smartphone Samsung Galaxy S21',
    valor: 1999.99,
    quantidade: 50,
    url_image: 'https://imgs.search.brave.com/6jEbKctUv4iKqUSzOS5o1r_uNrRB2K7aRvGqKT_Vx4I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFYSTlJd0RQQ0wu/anBn',
    marca: 'Samsung',
    tipo: 'Smartphone'
  },
  {
    nome: 'Notebook Dell XPS 13',
    valor: 2499.99,
    quantidade: 20,
    url_image: 'https://imgs.search.brave.com/i8_DEGtk03oPciwwUilieF-kfgwzbDs_5If82YwIWCg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFUc2lxWTVFbkwu/anBn',
    marca: 'Dell',
    tipo: 'Notebook'
  },
  {
    nome: 'Smart TV LG OLED 4K',
    valor: 1499.99,
    quantidade: 30,
    url_image: 'https://imgs.search.brave.com/RFyxg990Led-nqo5KfNJscoB4AFSduUsdMydwLeWa4s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFXajdFWGQ5ZUwu/anBn',
    marca: 'LG',
    tipo: 'Smart TV'
  },
  {
    nome: 'Fones de Ouvido Sony WH-1000XM4',
    valor: 349.99,
    quantidade: 40,
    url_image: 'https://imgs.search.brave.com/SXRt6N4UOs3YDMqU2lladbNaNjXrCVXzI-txsxBVm1s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxTWJGT0llSlRM/LmpwZw',
    marca: 'Sony',
    tipo: 'Fones de Ouvido'
  },
  {
    nome: 'Câmera Canon EOS Rebel T7i',
    valor: 799.99,
    quantidade: 15,
    url_image: 'https://imgs.search.brave.com/-VZaAsiqGLE-sfweYHEsJQ6MmFThk110_g_c0cjlLqA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE5dGZ1RklrU0wu/anBn',
    marca: 'Canon',
    tipo: 'Câmera'
  },
  {
    nome: 'Console de Jogos Xbox Series X',
    valor: 499.99,
    quantidade: 25,
    url_image: 'https://imgs.search.brave.com/VzxdpaKc3eu_cnukIC0SF8qiBHBn3unaYXo3fPR0jMs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxWjF4QnM2R29M/LmpwZw',
    marca: 'Microsoft',
    tipo: 'Console de Jogos'
  },
  {
    nome: 'Impressora HP LaserJet Pro',
    valor: 299.99,
    quantidade: 10,
    url_image: 'https://m.media-amazon.com/images/I/61Djm6Rig9L._AC_SY450_.jpg',
    marca: 'HP',
    tipo: 'Impressora'
  }
]

produtos.each do |produto|
  Produto.create(produto)
end
