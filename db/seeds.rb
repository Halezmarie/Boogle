# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

family = Category.create(name: "Family Friendly")
serial = Category.create(name: "Serial Killer")
supernatural = Category.create(name: "Supernatural")
thriller = Category.create(name: "Thriller")
scifi = Category.create(name: "Science Fiction")
horror = Category.create(name: "Horror")


goosebumps = Movie.create(title: "Goosebumps", year: "2015", rating: "PG", length: "1h 43m", image: "https://images.moviesanywhere.com/900a6b2658575a7b7b53d7b379d4a3cc/4de0a76e-2b19-4c09-a69a-dfc37007a39b.jpg", description: "Upset about moving from the big city to a small town, young Zach Cooper (Dylan Minnette) finds a silver lining when he meets his beautiful neighbor Hannah (Odeya Rush). The teen is surprised to learn that Hannah's mysterious father is R.L. Stine (Jack Black), the famous author of the best-selling Goosebumps series. When Zach accidentally unleashes the monsters from the fantastic tales, it's up to Stine, his daughter and Cooper to return the beasts back to the books where they belong.", watch: "https://www.justwatch.com/us/movie/goosebumps")

goosebumps.categories << [family, supernatural]


coraline = Movie.create(title: "Coraline", year: "2009", rating: "PG", length: "1h 36m", image: "https://m.media-amazon.com/images/I/81-h4FsEVqL._SY445_.jpg", description: "While exploring her new home, a girl named Coraline (Dakota Fanning) discovers a secret door, behind which lies an alternate world that closely mirrors her own but, in many ways, is better. She rejoices in her discovery, until Other Mother (Teri Hatcher) and the rest of her parallel family try to keep her there forever. Coraline must use all her resources and bravery to make it back to her own family and life", watch: "https://www.justwatch.com/us/movie/coraline")

coraline.categories << [family, supernatural]

clovehitch = Movie.create(title: "The Clovehitch Killer", year: "2018", rating: "Unrated", length: "1h 49m", image: "https://m.media-amazon.com/images/M/MV5BNDBhYzMzZGQtYTIxOC00YjJhLWExZTEtOTUxN2JlNGQwMGZkXkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_.jpg", description: "A picture-perfect family is torn apart after Tyler finds a cache of disturbing images in his father's possession. He begins to suspect that the man he trusts most in the world may be responsible for the murder of 13 girls ten years prior.", watch: "https://www.justwatch.com/us/movie/the-clovehitch-killer")

clovehitch.categories << [serial, thriller, horror]

hannibal = Movie.create(title: "Hannibal", year: "2001", rating: "R", length: "2h 11m", image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Hannibal_movie_poster.jpg", description: "Seven years have passed since Dr. Hannibal Lecter (Anthony Hopkins) escaped from custody. The doctor is now at large in Europe. Mason Verger (Gary Oldman) remembers Lecter too, and is obsessed with revenge. Verger was Dr. Lecter's sixth victim, and though horribly disfigured, has survived. Verger realizes that to draw the doctor into the open, he must use someone as bait: Clarice Starling (Julianne Moore).", watch: "https://www.justwatch.com/us/movie/hannibal")

hannibal.categories << [serial, thriller, horror]

child = Movie.create(title: "Child's Play", year: "1988", rating: "R", length: "1h 27m", image: "https://m.media-amazon.com/images/M/MV5BNDBhYzMzZGQtYTIxOC00YjJhLWExZTEtOTUxN2JlNGQwMGZkXkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_.jpg", description: "A single mother gives her son a beloved doll for his birthday, only to discover that it is possessed by the soul of a serial killer.", watch: "https://www.justwatch.com/us/movie/childs-play-1988")

child.categories << [thriller, horror]