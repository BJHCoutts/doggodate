class CreateDoggos < ActiveRecord::Migration[5.2]
  def change
    create_table :doggos do |t|
      t.string :name
      t.string :breed
      t.string :sound
      t.string :meme_phrase
      t.string :age
      t.string :gender
      t.string :coat_length
      t.string :size

      t.timestamps
    end
  end
end
