# **REVIEW II** #


## UmbeMemeble
<ul>
MVP
<li>login functionality
<li>post memes
<li>add comments to memes
<li>full crud
<li>users can rate memes
<ul>

## ***Client***
### *dependecies*
- axios
- react-router-dom
- redux
- react-redux
- redux-promise-middleware
- http-proxy-middleware

###  *routes*
- home (/)
- profile (/profile)
- login (/login)
- settings (/settings)

*ICEBOX*
<br/>
- sliding into the dms

### *file structure*

- src/
    - App.js
    - App.css
    - index.js
    - reset.css
    - redux/
        - store
        - reducer
    - components/
        - Header.js /.css
        - Login.js /.css
        - Account.js /.css
        - main.js /.css
    - setUpProxy.js


## ***Server***

 ### *dependecies*
- express-session
- massive
- express
- dotenv
- bcrypt
### *endpoints*
<br/>

auth:
- login: => /auth/login
- register: => /auth/register
- logout: => /auth/logout
- userSession: => /auth/user_session
<br/>

memeCtrl:
- (app.get) getAllMemes: => /api/get_memes
- (app.post) postMeme: => /api/post_meme
- (app.delete) deleteMeme: => /api/delete_meme/:id
- (app.put) addComment => /api/add_comment/:id
- (app.put) editRating: => /api/edit_rating/:id

## ***Database***

#### Users table
```sql
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    password TEXT NOT NULL,
    email VARCHAR(50) NOT NULL,
    profile_pic TEXT DEFAULT 'https://i.insider.com/5b169a601ae6624f008b48dd?width=1100&format=jpeg&auto=webp'
);
```
#### Memes table
```sql
CREATE TABLE memes (
    meme_id SERIAL PRIMARY KEY,
    img_url TEXT NOT NULL,
    rating INT DEFAULT 0,
    user_id REFERENCES users(user_id)
);
```

#### Comments table
```sql
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id REFERENCES users(user_id),
    meme_id REFERENCES memes(meme_id)
);
```