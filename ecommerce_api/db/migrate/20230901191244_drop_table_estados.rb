class DropTableEstados < ActiveRecord::Migration[7.0]
  def change
    drop_table :estados
  end
end
