# Repass
A reddit clone made with reactjs and nodejs, and postgresql as database.
[See live](http://devwrite.nareshbhusal.com)


## Installation
### Install dependencies
```
npm install && cd client && npm install && cd ../server && npm install
```

### Configure environment
#### Add env files
```
cd client && touch production.env development.env
cd server && touch production.env development.env
```

#### Set environment variables
##### In client/
```
URL=http://<server_host_address>:<server_api_port>
```

##### In server/
```
PORT=server_api_port
FILE_SERVER_PORT=port_to_serve_static_files_from
DB_NAME=database_name
DB_USER=postgresql_username
DB_PASS=postgresql_user_password
SESSION_SECRET=secret_character_string_for_redis
```

##### Database tables
Create database for repass and add tables. Database models are here -
```
cd server/src/models/ && ls
```

### Run dev mode
```
npm run dev
```

### Run in production mode
```
npm run prod
```

## Features

#### 1. Reddit-like comment system - 
   * Create, edit and delete posts and comments/replies
   * Upvote/downvote posts and comments
  
#### 2. Sub-communities
  * Create sub-communities
  * Follow different subs
  
#### 3. Dark theme
Toggle between dark and light theme

#### 4. Sorting
Posts can be sorted by ```new``` or ```top```.

#### 5. Search
Search gives an ability to search posts by posts' title keywords.
