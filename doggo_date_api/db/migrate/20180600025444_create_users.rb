class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, index: {unique: true}
      t.string :password_digest
      t.string :address
      t.float :longitude
      t.float :latitude
      t.string :api_key, index: {unique: true}
      t.boolean :admin, default: false

      t.timestamps
    end

    # add_index :users, :email, unique: true

  end
end