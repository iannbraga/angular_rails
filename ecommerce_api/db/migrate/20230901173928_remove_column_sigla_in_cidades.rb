class RemoveColumnSiglaInCidades < ActiveRecord::Migration[7.0]
  def change
    remove_column :cidades, :sigla
  end
end
