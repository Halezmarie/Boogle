# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :movies, only: [:index, :create, :destroy, :update]
      resources :categories, only: [:index]
      # I do not want others to delete categories 
    end
  end
end
