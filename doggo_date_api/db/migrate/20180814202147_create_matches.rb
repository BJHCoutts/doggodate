class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :doggo_id, foreign_key: true
      # t.references :doggo, foreign_key: true
      t.integer :friend_id, foreign_key: true
      t.string :state, default: "pending"
      t.datetime :friended_at
      t.timestamps
    end
  end
end
