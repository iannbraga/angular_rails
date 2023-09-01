class RemoveTableCidades < ActiveRecord::Migration[7.0]
  def change
    drop_table :cidades
  end
end
