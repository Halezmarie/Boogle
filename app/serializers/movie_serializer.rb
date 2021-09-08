class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :year, :rating, :length, :image, :description, :watch, :category_id, :movietitle
end
