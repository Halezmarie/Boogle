# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# add an about section to describe which one means for the users
# choose which category BEST fits this movie, we already know this is Boogle and it is a scary movie website

# family = Category.create(name: "Family Friendly")
serial = Category.create(name: "Serial Killer")
supernatural = Category.create(name: "Supernatural")
thriller = Category.create(name: "Thriller") # suspense, maybe I will add horror here for thriller/horror slash 
scifi = Category.create(name: "Science Fiction")
# horror = Category.create(name: "Horror") # it is a scary movie site, it is expected 

# def seed_images(image)
#     File.open(File.join(Rails.root, "/backend/public/seed_images/#{image}.jpg"))
# end

# backend\public\seed_images\Childs_Play.jpg
# C:\Users\teach\boogle\backend\public\seed_images\Childs_Play.jpg

goosebumps = Movie.create(title: "Goosebumps👹", year: "2015", rating: "PG", length: "1h 43m", image: "https://images.moviesanywhere.com/900a6b2658575a7b7b53d7b379d4a3cc/4de0a76e-2b19-4c09-a69a-dfc37007a39b.jpg", description: "Upset about moving from the big city to a small town, young Zach Cooper (Dylan Minnette) finds a silver lining when he meets his beautiful neighbor Hannah (Odeya Rush). The teen is surprised to learn that Hannah's mysterious father is R.L. Stine (Jack Black), the famous author of the best-selling Goosebumps series. When Zach accidentally unleashes the monsters from the fantastic tales, it's up to Stine, his daughter and Cooper to return the beasts back to the books where they belong.", watch: "https://www.justwatch.com/us/movie/goosebumps", category: supernatural)


coraline = Movie.create(title: "Coraline🧵", year: "2009", rating: "PG", length: "1h 36m", image: "https://m.media-amazon.com/images/I/81-h4FsEVqL._SY445_.jpg", description: "While exploring her new home, a girl named Coraline (Dakota Fanning) discovers a secret door, behind which lies an alternate world that closely mirrors her own but, in many ways, is better. She rejoices in her discovery, until Other Mother (Teri Hatcher) and the rest of her parallel family try to keep her there forever. Coraline must use all her resources and bravery to make it back to her own family and life", watch: "https://www.justwatch.com/us/movie/coraline", category: supernatural)


clovehitch = Movie.create(title: "The Clovehitch Killer🔪", year: "2018", rating: "Unrated", length: "1h 49m", image: "https://m.media-amazon.com/images/M/MV5BNDBhYzMzZGQtYTIxOC00YjJhLWExZTEtOTUxN2JlNGQwMGZkXkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_.jpg", description: "A picture-perfect family is torn apart after Tyler finds a cache of disturbing images in his father's possession. He begins to suspect that the man he trusts most in the world may be responsible for the murder of 13 girls ten years prior.", watch: "https://www.justwatch.com/us/movie/the-clovehitch-killer", category: serial)

hannibal = Movie.create(title: "Hannibal🍗", year: "2001", rating: "R", length: "2h 11m", image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Hannibal_movie_poster.jpg", description: "Seven years have passed since Dr. Hannibal Lecter (Anthony Hopkins) escaped from custody. The doctor is now at large in Europe. Mason Verger (Gary Oldman) remembers Lecter too, and is obsessed with revenge. Verger was Dr. Lecter's sixth victim, and though horribly disfigured, has survived. Verger realizes that to draw the doctor into the open, he must use someone as bait: Clarice Starling (Julianne Moore).", watch: "https://www.justwatch.com/us/movie/hannibal", category: serial)

child = Movie.create(title: "Child's Play🩸", year: "1988", rating: "R", length: "1h 27m", image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Childs_Play.jpg", description: "A single mother gives her son a beloved doll for his birthday, only to discover that it is possessed by the soul of a serial killer.", watch: "https://www.justwatch.com/us/movie/childs-play-1988", category: supernatural)

candyman = Movie.create(title: "Candyman🍭", year: "1992", rating: "R", length: "1h 39m", image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Candymanposter.jpg/220px-Candymanposter.jpg", description: "The Candyman, a murderous soul with a hook for a hand, is accidentally summoned to reality by a skeptic grad student researching the monster's myth.", watch: "https://www.justwatch.com/us/movie/candyman", category: supernatural)

quiet = Movie.create(title: "A Quiet Place🤫", year: "2018", rating: "PG-13", length: "1h 31m", image: "https://m.media-amazon.com/images/I/A1zV1fxtMEL._SL1500_.jpg", description: "A family is forced to live in silence while hiding from creatures that hunt by sound.", watch: "https://www.justwatch.com/us/movie/a-quiet-place", category: scifi)

getout = Movie.create(title: "Get Out🙃", year: "2017", rating: "R", length: "1h 44m", image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png", description: "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.", watch: "https://www.justwatch.com/us/movie/get-out", category: thriller)

alien = Movie.create(title: "Alien👽", year: "1979", rating: "R", length: "1h 57m", image: "https://static.wikia.nocookie.net/horrormovies/images/a/af/Alien_poster_1979_cut.jpg/revision/latest?cb=20111114062148", description: "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.", watch: "https://www.justwatch.com/us/movie/alien", category: scifi)

