class Movie < ApplicationRecord
    belongs_to :category

    # capitalize movie title
    def movietitle
        self.title.upcase
    end
end