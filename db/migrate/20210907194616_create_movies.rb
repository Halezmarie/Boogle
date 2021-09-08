class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year
      t.string :rating
      t.string :length
      t.string :image
      t.string :description
      t.string :watch
      t.belongs_to :category, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
