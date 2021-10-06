class Api::V1::MoviesController < ApplicationController

    # setting it up to communicate to the frontend and the backend and using CORS. 

    def index 
        # do not need instance variable because we are not rendering views/ not referencing it outside 
        movies = Movie.all
        organized_movies = movies.order(:title)
        render json: MovieSerializer.new(organized_movies)
    end

    def show 
        movie = Movie.find(params[:id])
        render json: movie.to_json(except: [:created_at, :updated_at], include: {category: {only: [:name]}})
    end

    def create 
        movie = Movie.new(movie_params)
        if movie.save
            render json: MovieSerializer.new(movie)
        end
    end

    def destroy 
        # finding by the id itself
        movie = Movie.find_by_id(params[:id])
        if movie.destroy
            render json: {message: "👻You successfully deleted #{movie.title}!"}
        end
    end
    
    private
    
    def movie_params
        params.require(:movie).permit(:title, :year, :rating, :length, :description, :watch, :category_id)
    end
    
end