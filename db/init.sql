CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    password TEXT NOT NULL,
    email VARCHAR(50) NOT NULL,
    profile_pic TEXT DEFAULT 'https://i.insider.com/5b169a601ae6624f008b48dd?width=1100&format=jpeg&auto=webp'
);

INSERT INTO users (username, password, email)
VALUES
('carlos123', '123', 'carlos@123.net'),
('frodo_b', 'dotheygandalf', 'wrathbait@onering.me');

CREATE TABLE memes (
    meme_id SERIAL PRIMARY KEY,
    img_url TEXT NOT NULL,
    rating INT DEFAULT 0,
    user_id INT REFERENCES users(user_id)
);

INSERT INTO memes(img_url, user_id)
VALUES
('https://i.redd.it/mxm3itpzl2i41.jpg', 2);
('https://images7.memedroid.com/images/UPLOADED163/558354a59c113.jpeg', 1);
('https://i.kym-cdn.com/photos/images/original/001/271/161/d9e.jpg', 2);


CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id INT REFERENCES users(user_id),
    meme_id INT REFERENCES memes(meme_id)
);

INSERT INTO comments(comment, user_id, meme_id)
VALUES
('lol, my face is so jacked up', 2, 2),
('nah, bruhh it aint thaaatt baaadd', 1, 2);