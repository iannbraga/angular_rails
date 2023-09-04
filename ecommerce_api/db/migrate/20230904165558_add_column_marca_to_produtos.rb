# frozen_string_literal: true

class AddColumnMarcaToProdutos < ActiveRecord::Migration[7.0]
  def change
    add_column :produtos, :marca, :string
  end
end
