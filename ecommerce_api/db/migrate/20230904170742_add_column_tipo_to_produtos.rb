# frozen_string_literal: true

class AddColumnTipoToProdutos < ActiveRecord::Migration[7.0]
  def change
    add_column :produtos, :tipo, :string
  end
end
