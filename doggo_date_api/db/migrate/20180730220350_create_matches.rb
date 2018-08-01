class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.references :doggo1, foreign_key: true
      t.references :doggo2, foreign_key: true

      t.string :type

      t.timestamps
    end
  end
end
