class Api::V1::CategoriesController < ApplicationController

    def index 
        categories = Category.all
        options = {include: [:movies]}
        render json: CategorySerializer.new(categories, include: [:movies])
    end

    private
    
    def category_params
        params.require(:category).permit(:name, :category_id)
    end
end
