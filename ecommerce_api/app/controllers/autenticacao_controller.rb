# frozen_string_literal: true

# app/controllers/autenticacao_controller.rb
class AutenticacaoController < ApplicationController
  def logar
    @usuario = Usuario.find_by(email: params[:email], senha: params[:senha])

    if @usuario
      render json: { message: 'Login bem sucedido', perfil: @usuario.perfil }
    else
      render json: { message: 'Credenciais inválidas' }, status: :unauthorized
    end
  end

  def cadastrar; end
end
