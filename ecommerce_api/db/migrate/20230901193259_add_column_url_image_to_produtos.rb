class AddColumnUrlImageToProdutos < ActiveRecord::Migration[7.0]
  def change
    add_column :produtos, :url_image, :string
  end
end
