class Api::V1::MoviesController < ApplicationController

    def index 
        @movies = Movie.order(:created_at)
        render json: @movies, status: 200
    end

    private

    def movie_params
        params.require(:movie).permit(:title, :year, :rating, :length, :image, :description, :watch, category_ids: [])
    end
end
