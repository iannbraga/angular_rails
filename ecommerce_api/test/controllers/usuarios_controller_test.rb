# frozen_string_literal: true

require 'test_helper'

class UsuariosControllerTest < ActionDispatch::IntegrationTest
  test 'should get login' do
    get usuarios_login_url
    assert_response :success
  end

  test 'should get cadastrar' do
    get usuarios_cadastrar_url
    assert_response :success
  end
end
