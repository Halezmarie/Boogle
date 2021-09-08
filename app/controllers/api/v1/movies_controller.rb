class Api::V1::MoviesController < ApplicationController

    def index 
        # do not need instance variable because we are not rendering views 
        movies = Movie.all
        render json: MovieSerializer.new(movies)
    end

    # Do I need to keep a show?
    def show 
        movie = Movie.find(params[:id])
        render json: movie.to_json(except: [:created_at, :updated_at])
    end

    def create 
        movie = Movie.create(movie_params)
        # only if the movie saves then render json
        if movie.save
            render json: MovieSerializer.new(movie)
        end
    end

    def destroy 
        # finding by the id itself
        movie = Movie.find_by_id(params[:id])
        movie.destroy
        render json: {message: "👻You successfully deleted #{movie.title}!"}
        end

    def update 
        movie = Movie.find(params[:id])
        if movie update(movie_params)
            render json: MovieSerializer.new(movie)
        end
    end
        
    private
    def movie_params
        params.require(:movie).permit(:title, :year, :rating, :length, :image, :description, :watch, :category_ids)
    end


end
