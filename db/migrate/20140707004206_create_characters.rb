class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :char_name
      t.string :char_family
      t.text :char_description
      t.string :char_image
      t.string :char_acted

      t.timestamps
    end
  end
end
