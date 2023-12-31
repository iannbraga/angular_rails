# frozen_string_literal: true

class CreateProdutos < ActiveRecord::Migration[7.0]
  def change
    create_table :produtos do |t|
      t.string :titulo
      t.string :descricao
      t.float :valor
      t.integer :quantidade

      t.timestamps
    end
  end
end
