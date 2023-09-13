# frozen_string_literal: true

Rails.application.routes.draw do
  post 'logar', to: 'autenticacao#logar', as: :logar
  get 'cadastrar', to: 'autenticacao#cadastrar', as: :cadastrar

  resources :produtos

  resources :usuarios

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
