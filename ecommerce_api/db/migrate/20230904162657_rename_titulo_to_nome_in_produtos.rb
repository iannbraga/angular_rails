# frozen_string_literal: true

class RenameTituloToNomeInProdutos < ActiveRecord::Migration[7.0]
  def change
    rename_column :produtos, :titulo, :nome
    # Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
