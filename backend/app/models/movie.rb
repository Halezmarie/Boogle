class Movie < ApplicationRecord
    belongs_to :category
    # validates :title, presence: true
    # validates :year, presence: true
    # validates :rating, presence: true
    # validates :length, presence: true
    # validates :description, presence: true
    # validates :watch, presence: true

    # capitalize movie title
    def movietitle
        self.title.upcase
    end
end