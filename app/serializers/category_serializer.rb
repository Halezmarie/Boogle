class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :movies
end
