DROP DATABASE IF EXISTS `movies`;
CREATE DATABASE `movies`;
USE `movies`;

CREATE TABLE genre 
    (
        genre_id TINYINT AUTO_INCREMENT,
        genre VARCHAR(30) NOT NULL,
        CONSTRAINT pk_genre PRIMARY KEY (genre_id)
    );

CREATE TABLE director
    (
        director_id INT UNSIGNED AUTO_INCREMENT,
        fName VARCHAR(30),
        lName VARCHAR(30) NOT NULL,
        last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT pk_director PRIMARY KEY (director_id)
);

CREATE TABLE producer
    (
        producer_id INT UNSIGNED AUTO_INCREMENT,
        fName VARCHAR(30),
        lName VARCHAR(30) NOT NULL,
        last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT pk_producer PRIMARY KEY (producer_id)
    );

CREATE TABLE performer_id
    (
        perfomer_id MEDIUMINT AUTO_INCREMENT,
        fName VARCHAR(30),
        lName VARCHAR(30),
        alias VARCHAR(30),
        last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT pk_performer PRIMARY KEY (performer_id)
    );


CREATE TABLE movies
    (
        id INT UNSIGNED AUTO_INCREMENT,
        title VARCHAR(50) NOT NULL,
        rating ENUM('G', 'PG', 'PG-13', 'R', 'NC-17', 'TV-Y', 'TV-7', 'TV-14', 'TV-MA', 'NR') DEFAULT 'NR',
        year YEAR NOT NULL,
        director INT UNSIGNED NOT NULL,
        user_rating ENUM('1', '2', '3', '4', '5') DEFAULT '1',
        run_time TIME,
        CONSTRAINT pk_id PRIMARY KEY (id),
        CONSTRAINT fk_director_id FOREIGN KEY (director) REFERENCES director (director_id)
); 

--ALTER TABLE movie
--ADD column last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP, alias VARCHAR(50);

ALTER TABLE movies
    ADD alias VARCHAR(50),
    ADD last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

    ALTER TABLE movies
        MODIFY last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

    ALTER TABLE movies
        ADD COLUMN created_at
            TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

    SELECT m.title, d.fName, d.lName FROM movies AS m INNER JOIN director AS d ON d.director_id = m.director
    ORDER BY m.title;

CREATE TABLE movies_to_genre 
    (
        movies_id INT UNSIGNED,
        genre_id TINYINT,
        CONSTRAINT fk_movie_id FOREIGN KEY (movies_id) REFERENCES movies (id),
        CONSTRAINT fk_genre_id FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
    );

CREATE TEMPORARY TABLE genre_list 
    (
        title VARCHAR(50),
        genre_1 VARCHAR(30),
        genre_2 VARCHAR(30),
        genre_3 VARCHAR(30),
        genre_4 VARCHAR(30),
        genre_5 VARCHAR(30),
        genre_6 VARCHAR(30)
    );


CREATE TABLE performer
    (
        performer_id MEDIUMINT AUTO_INCREMENT,
        fName VARCHAR(30),
        lName VARCHAR(30),
        alias VARCHAR(30),
        last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT pk_performer PRIMARY KEY (performer_id)
    );

CREATE TABLE movies_to_performer 
    (
        movies_id INT UNSIGNED,
        performer_id MEDIUMINT,
        CONSTRAINT fk_film_id FOREIGN KEY (movies_id) REFERENCES movies (id),
        CONSTRAINT fk_actor_id FOREIGN KEY (performer_id) REFERENCES performer (performer_id)
    );


CREATE TABLE movies_to_producer
    (
        movies_id INT UNSIGNED,
        producer_id INT UNSIGNED,
        CONSTRAINT fk_theseMovies_id FOREIGN KEY (movies_id) REFERENCES movies (id), 
        CONSTRAINT fk_producers_id FOREIGN KEY (producer_id) REFERENCES producer (producer_id)
    );



ALTER TABLE movies   
    DROP FOREIGN KEY fk_actor_id;

    ALTER TABLE movies 
    DROP COLUMN performer;

DROP TABLE IF EXISTS performer; 

