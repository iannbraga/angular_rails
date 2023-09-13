# frozen_string_literal: true

require 'test_helper'

class AutenticacaoControllerTest < ActionDispatch::IntegrationTest
  test 'should get logar' do
    get autenticacao_logar_url
    assert_response :success
  end

  test 'should get cadastrar' do
    get autenticacao_cadastrar_url
    assert_response :success
  end
end
