# frozen_string_literal: true

class RemoveColumnDescricaoToProdutos < ActiveRecord::Migration[7.0]
  def change
    remove_column :produtos, :descricao
  end
end
