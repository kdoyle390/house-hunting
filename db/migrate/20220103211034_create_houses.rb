class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :house_name
      t.string :address
      t.integer :rent
      t.boolean :allows_pets
      t.string :city
      t.string :state
      t.integer :square_feet
      t.integer :num_beds
      t.integer :num_baths

      t.timestamps
    end
  end
end
