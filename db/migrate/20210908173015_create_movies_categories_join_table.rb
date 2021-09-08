class CreateMoviesCategoriesJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :movies, :categories do |t|
       t.index :movie_id
       t.index :category_id
    end
  end
end
