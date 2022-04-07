INSERT INTO genre
    (genre)
    VALUES ('action'), ('adventure'),
    ('animation'), ('comedy'), ('crime & mystery'), ('cyberpunk & derivitives'),
    ('documentary'), ('drama'), ('fantasy'), ('historical'), ('historical fiction'), ('horror'), ('romance'), ('satire'), ('sci-fi'), ('speculative'), ('thriller'), ('western'), ('musical');

INSERT INTO director
    (fName, lName)
    VALUES ('Frank', 'Darabont'), ('David', 'Lynch'), ('Steven', 'Spielburg'), ('James', 'Cameron'), ('Robert', 'Zemicks'), ('George', 'Lucas'), ('Byron', 'Howard'), ('Nathan', 'Greno'), ('Rob', 'Minkoff'), ('Roger', 'Allers'), ('Christopher', 'Nolan'), ('Joe', 'Wright'), ('John', 'Musker'), ('Ron', 'Clements'), ('Brad', 'Bird'), ('Steven', 'Soderburgh'), ('Joel', 'Schumacher'), ('Juame', 'Collet-Serra'), ('Ridley', 'Scott');

INSERT INTO movies 
    (title, rating, director, year, user_rating)
    VALUES('shawshank redemption, the', 'R', 1, 1994, '3');

INSERT INTO movies
    (title, rating, director, year, user_rating)
    VALUES('dune', 'PG-13', 2, 1984, 1);

INSERT INTO movies
    (title, rating, director, year, user_rating)
    VALUES('jurassic park', 'PG-13', 3, 1993, 4),
    ('titanic', 'PG-13', 4, 1997, 5),
    ('forest gump', 'PG-13', 5, 1994, 5);

INSERT INTO movies
    (title, rating, director, year, user_rating)
    VALUES('a new hope', 'PG', 6, 1994, 5), ('tangled','PG', 7, 2010, 4), ('return of the jedi', 'PG', 3, 1983, 5), ('the lion king', 'G', 9, 1994, 5), ('inception', 'PG-13', 11, 2010, 4), ('pride & prejudice', 'PG', 12, 2005, 2), ('phantom menace, the', 'PG', 6, 1999, 1), ('princess and the frog, the', 'G', 13, 2009, 4), ('tomorrowland', 'PG', 15, 2015, 3), ("ocean's eleven", 'PG-13', 16, 2001, 4); 

INSERT INTO movies
    (title, rating, director, year, user_rating) 
    VALUES('batman & robin', 'PG-13', 17, 1997, 1), ('interstellar', 'PG-13', 11, 2014, 4), ('moana', 'PG', 14, 2016, 4), ('jungle cruise', 'PG-13', 18, 2021, 3), ('house of gucci', 'R', 19, 2021, 4);

INSERT INTO movies_to_genre
    (movies_id, genre_id)
    VALUES (1, 8);

--WAYS TO SELECT movies_to_genre DATA
SELECT * FROM movies_to_genre;
OR
SELECT m.title, g.genre
FROM movies
AS m
INNER JOIN genre AS g
INNER JOIN movies_to_genre
ON g.genre_id = movies_to_genre.genre_id
WHERE m.id = 1;

SELECT m.title, g.genre
FROM movies AS m
INNER JOIN genre AS g
INNER JOIN movies_to_genre AS mtg
ON g.genre_id = mtg.genre_id AND m.id = mtg.movies_id
ORDER BY m.id; 

INSERT INTO movies_to_genre 
    (movies_id, genre_id)
    VALUES (2, 1), (2, 2), (2, 15), (3, 2), (3, 15), (4, 8), (4, 13), (5, 4), (5, 8), (6, 1), (6, 2), (6, 5), (6, 9), (6, 15);

INSERT INTO movies_to_genre
    (movies_id, genre_id)
    VALUES (7, 13), (7, 3), (7, 4), (7, 2), (8, 1), (8, 2), (8, 5), (8, 9), (8, 15), (9, 3), (9, 19), (10, 1), (10, 8), (10, 15), (10, 17), (10, 2), (11, 8), (11, 13), (12, 1), (12, 15), (13, 2), (13, 3), (13, 9), (13, 4), (13, 13), (14, 2), (14, 15), (15, 1), (15, 2), (15, 4), (15, 17), (15, 5), (16, 1), (16, 9), (16, 5), (17, 2), (17, 8), (17, 15), (18, 1), (18, 2), (18, 3), (18, 4), (19, 1), (19, 2), (19, 3), (19, 9), (20, 5), (20, 8), (20, 17);


    INSERT INTO performer
    (fName, lName)
    VALUES ('morgan', 'freeman'), ('tim', 'robins'), ('william', 'sadler'), ('bob', 'gunton'), ('clancy', 'brown'), ('francesca', 'annis'), ('leonardo', 'climino'), ('brad', 'dourif'), ('patrick', 'stewart'), ('kyle', 'mclachlan'), ('sam', 'neill'), ('jeff', 'goldbloom'), ('laura', 'dern'), ('ariana', 'richards'), ('joseph', 'mazzello'), ('leonardo', 'di caprio'), ('kate', 'winslet'), ('billy', 'zane'), ('gloria', 'stewart'), ('frances', 'fisher'), ('tom', 'hanks'), ('robin', 'wright'), ('gary', 'sinise'), ('mykelti', 'williamson'), ('sally', 'field'), ('mark', 'hammil'), ('harrison', 'ford'), ('carrie', 'fisher'), ('alec', 'guinness'), ('peter', 'mayhew'), ('zachary', 'levi'), ('mandy', 'moore'), ('ron', 'perlman'), ('paul f', 'tompkins'), ('donna', 'murphy');

    INSERT INTO performer
    (fName, lName)
    VALUES ('jeremy', 'irons'), ('james earl', 'jones'), ('matthew', 'broderick'), ('nathan', 'lane'), ('rowan', 'atkinson'), ('moira', 'kelly'), ('joseph gordon', 'levitt'), ('tom', 'hardy'), ('cilian', 'murphy'), ('elliot', 'page'), ('kiera', 'knightly'), ('matthew', 'macfayden'), ('rosamund', 'pike'), ('carey', 'mulligan'), ('donald', 'sutherland'), ('natalie', 'portman'), ('liam', 'neesan'), ('ewan', 'mcgregor'), ('ray', 'park'), ('jake', 'lloyd'), ('anika noni', 'rose'), ('bruno', 'campos'), ('jennifer', 'cody'), ('keith', 'david'), ('micheal-leon', 'wooley'), ('george', 'clooney'), ('brit', 'robertson'), ('raffey', 'cassidy'), ('hugh', 'laurie'), ('thomas', 'robinson'), ('brad', 'pitt'), ('julia', 'roberts'), ('matt', 'damon'), ('andy', 'garcia'), ('chris', "o'donnell");

    INSERT INTO performer
    (fName, lName)
    VALUES ('arnold', 'schwartzenegger'), ('uma', 'thurman'), ('alicia', 'silverstone'), ('matthew', 'mcconaugh'), ('jessica', 'chastain'), ('michael', 'caine'), ('anne', 'hathaway'), ('aulii', 'cravalho'), ('dwayne', 'johnson'), ('jermaine', 'clement'), ('alan', 'tudyk'), ('rachel', 'house'), ('emily', 'blunt'), ('jack', 'whitehall'), ('jesse', 'plemons'), ('edgar', 'rameriez'), ('jared', 'leto'), ('lady', 'gaga'), ('adam', 'driver'), ('al', 'pacino'), ('salma', 'hayek');
    

    INSERT INTO movies_to_performer
    (movies_id, performer_id)
    VALUES (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (2, 6), (2, 7), (2, 8), (2, 9), (2, 10), (3, 11), (3, 12), (3, 13), (3, 14), (3, 15), (4, 16), (4, 17), (4, 18), (4, 19), (4, 20), (5, 21), (5, 22), (5, 23), (5, 24), (5, 25);

    INSERT INTO movies_to_performer
    (movies_id, performer_id)
    VALUES (6, 26), (6, 27), (6, 28), (6, 29), (6, 30), (7, 31), (7, 32), (7, 33), (7, 34), (7, 35), (8, 26), (8, 27), (8, 28), (8, 29), (8, 30), (9, 36), (9, 37), (9, 38), (9, 39), (9, 40), (10, 16), (10, 41), (10, 42), (10, 43), (10, 44), (11, 45), (11, 46), (11, 47), (11, 48), (11, 49), (12, 45), (12, 50), (12, 51), (12, 52), (12, 53), (12, 54);

    INSERT INTO movies_to_performer
    (movies_id, performer_id) 
    VALUES (13, 55), (13, 56), (13, 57), (13, 58), (13, 59), (14, 60), (14, 61), (14, 62), (14, 63), (14, 64), (15, 60), (15, 65), (15, 66), (15, 67), (15, 68), (16, 60), (16, 69), (16, 70), (16, 71), (16, 72), (17, 67), (17, 73), (17, 74), (17, 75), (17, 76), (18, 77), (18, 78), (18, 79), (18, 80), (18, 81), (19, 78), (19, 82), (19, 83), (19, 84), (19, 85), (20, 86), (20, 87), (20, 88), (20, 89), (20, 90);

--SELECt MOVIE TITLE, RATING, PERFORMER FNAME, PERFORMER LNAME
SELECT m.title, m.rating, p.fName, p.lName
FROM movies AS m
INNER JOIN performer AS p
INNER JOIN movies_to_performer AS mtp
ON m.id = mtp.movies_id AND p.performer_id = mtp.performer_id;

INSERT INTO producer
    (fName, lName)
    VALUES ('charles', 'brackett'), ('dino', 'de laurenitis'), ('rafaella', 'de laurenitis'), ('liz', 'gloster'), ('kathleen', 'kennedy'), ('david v', 'lester'), ('nikki', 'marvin'), ('jose lopez', 'rodero'), ('lata', 'ryan'), ('steven', 'spielburg'), ('wendy', 'finerman'), ('steven', 'tisch'), ('steve', 'starkey'), ('gary', 'kurtz'), ('roy', 'conli'), ('howard', 'kazanjian'), ('rick', 'mcallum'), ('don', 'hahn'), ('christopher', 'nolan'), ('emma', 'thomas'), ('eric', 'fellner'), ('tim', 'bevan'), ('paul', 'webster'), ('peter', 'del vecho'), ('damon', 'lindelof'), ('brad', 'bird'), ('jeffery', 'chernov'), ('jerry', 'weintraub'), ('peter', 'macgregor-scott'), ('linda', 'obst'), ('osnat', 'shurer'), ('dwayne', 'johnson'), ('dany', 'garcia'), ('hiram', 'garcia'), ('ridley', 'scott'), ('giananina', 'facio'), ('mark', 'huffan');

INSERT INTO movies_to_producer 
    (movies_id, producer_id) 
    VALUES (1, 4), (1, 7), (1, 6), (2, 2), (2, 3), (2, 8), (3, 9), (3, 10), (3, 5), (4, 1), (5, 11), (5, 12), (5, 13), (6, 14), (7, 15), (8, 16), (8, 17), (9, 18), (10, 19), (10, 20), (11, 21), (11, 22), (11, 23), (12, 16), (12, 17), (13, 24), (14, 25), (14, 26), (14, 27), (15, 28), (16, 29), (17, 19), (17, 30), (17, 20), (18, 31), (19, 32), (19, 33), (19, 34), (20, 35), (20, 36), (20, 37);

SELECT m.id, m.title, p.fName, p.lName
FROM movies AS m
INNER JOIN producer AS p  
INNER JOIN movies_to_producer AS mtp
ON m.id = mtp.movies_id AND p.producer_id = mtp.producer_id;
--WHERE p.fName = 'dwayne' AND p.lName = 'johnson';


SELECT m.title, m.rating, g.genre, p.lName
FROM movie AS m
INNER JOIN genre AS g
INNER JOIN performer AS p
INNER JOIN movie_to_performer AS mtp
INNER JOIN movie_to_genre AS mtg
ON m.id = mtp.movie_id AND g.genre_id = mtg.genre_id AND p.performer_id = mtp.performer_id AND m.id = mtg.movie_id
WHERE p.lName = 'Depardieu';