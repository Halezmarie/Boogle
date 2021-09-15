class Api::V1::MoviesController < ApplicationController

    def index 
        # do not need instance variable because we are not rendering views
        movies = Movie.all
        organized_movies = movies.order(:title)
        render json: MovieSerializer.new(organized_movies)
    end

    # Do I need to keep a show? ***
    def show 
        movie = Movie.find(params[:id])
        render json: movie.to_json(except: [:created_at, :updated_at], include: {category: {only: [:name]}})
    end

    def create 
        movie = Movie.new(movie_params)
        movie.category = Category.last # will change this when I work on my categories in the frontend
        # only if the movie saves then render json
        if movie.save
            render json: MovieSerializer.new(movie)
        else
            render json: {error: "👻 Oh no! You couldn't save #{movie.title}!"}
        end
    end

    def destroy 
        # finding by the id itself
        movie = Movie.find_by_id(params[:id])
        if movie.destroy
            render json: {message: "👻You successfully deleted #{movie.title}!"}
        else 
            render json: {error: "👻 Oh no! You couldn't delete #{movie.title}!"}
        end
    end

    def update 
        movie = Movie.find(params[:id])
        if movie.update(movie_params)
            render json: MovieSerializer.new(movie)
        else 
            render json: {error: "👻 Oh no! You couldn't update #{movie.title}!"}
        end
    end
        
    private

    # keep category ids?
    def movie_params
        params.require(:movie).permit(:title, :year, :rating, :length, :description, :watch)
    end
end

# took images out for now 
# and category ids []