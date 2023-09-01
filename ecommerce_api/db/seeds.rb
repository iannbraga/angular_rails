# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

produtos = [
  {
    :titulo => 'Smartphone Samsung Galaxy S21',
    :descricao => 'O mais recente smartphone da Samsung com câmera de 108MP e tela OLED de 6.2 polegadas.',
    :valor => 1999.99,
    :quantidade => 50
  },
  {
    :titulo => 'Notebook Dell XPS 13',
    :descricao => 'Notebook ultrafino com tela InfinityEdge, processador Intel Core i7 e 16GB de RAM.',
    :valor => 2499.99,
    :quantidade => 20
  },
  {
    :titulo => 'Smart TV LG OLED 4K',
    :descricao => 'TV OLED 4K de 55 polegadas com HDR, som Dolby Atmos e suporte para streaming.',
    :valor => 1499.99,
    :quantidade => 30
  },
  {
    :titulo => 'Fones de Ouvido Sony WH-1000XM4',
    :descricao => 'Fones de ouvido com cancelamento de ruído, som de alta qualidade e bateria de longa duração.',
    :valor => 349.99,
    :quantidade => 40
  },
  {
    :titulo => 'Câmera Canon EOS Rebel T7i',
    :descricao => 'Câmera DSLR com sensor APS-C de 24.2MP e vídeo Full HD.',
    :valor => 799.99,
    :quantidade => 15
  },
  {
    :titulo => 'Console de Jogos Xbox Series X',
    :descricao => 'Console de última geração da Microsoft com suporte a jogos em 4K e alta taxa de quadros.',
    :valor => 499.99,
    :quantidade => 25
  },
  {
    :titulo => 'Impressora HP LaserJet Pro',
    :descricao => 'Impressora laser monocromática de alta velocidade para uso profissional.',
    :valor => 299.99,
    :quantidade => 10
  }
]

produtos.each do |produto|
  Produto.create(produto)
end