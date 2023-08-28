# Chat Application Server

This is the backend server for the Chat Application project. It provides the necessary API endpoints and real-time communication capabilities for the chat application.

## Features

- User registration and login with JWT authentication
- Creation and management of chat rooms
- Real-time messaging using Socket.io
- Database integration with PostgreSQL

## Getting Started

1. Clone this repository to your local machine.

2. Install the required dependencies:
   npm install
3. Run the server:
   npm start
   
The server will start at http://localhost:3000.

API Endpoints
1. /auth/register: User registration
2. /auth/login: User login
3. /chat/createChatRoom": Create a new chat room
4. /chat/getChatRooms: List all chat rooms
5. /chat/getChatRoom: Private chat room of user
6. /chat//store-message: Store messages of a chat room in db
7. /chat/get-messages: Get Messages of a chat room from db
8. /chat/getUsers: Get All users
9. /chat/getUser: Get single user

## Tables to be created in PostgreSQL

1. chatrooms:
   -- Table: public.chatrooms

   -- DROP TABLE IF EXISTS public.chatrooms;
   
   CREATE TABLE IF NOT EXISTS public.chatrooms
   (
       room_id integer NOT NULL DEFAULT nextval('chatrooms_id_seq'::regclass),
       created_at timestamp without time zone NOT NULL DEFAULT now(),
       users character varying(255)[] COLLATE pg_catalog."default" NOT NULL,
       is_private boolean NOT NULL DEFAULT true,
       name character varying(255) COLLATE pg_catalog."default",
       CONSTRAINT chatrooms_pkey PRIMARY KEY (room_id)
   )
   
   TABLESPACE pg_default;
   
   ALTER TABLE IF EXISTS public.chatrooms
       OWNER to postgres;

2. messages:
   -- Table: public.messages

   -- DROP TABLE IF EXISTS public.messages;
   
   CREATE TABLE IF NOT EXISTS public.messages
   (
       id integer NOT NULL DEFAULT nextval('messages_id_seq'::regclass),
       room_id integer NOT NULL,
       message text COLLATE pg_catalog."default" NOT NULL,
       sender character varying(255) COLLATE pg_catalog."default" NOT NULL,
       created_at timestamp without time zone NOT NULL DEFAULT now(),
       CONSTRAINT messages_pkey PRIMARY KEY (id)
   )
   
   TABLESPACE pg_default;
   
   ALTER TABLE IF EXISTS public.messages
       OWNER to postgres;

3. users:
   -- Table: public.users

   -- DROP TABLE IF EXISTS public.users;
   
   CREATE TABLE IF NOT EXISTS public.users
   (
       username character varying(255) COLLATE pg_catalog."default" NOT NULL,
       password character varying(255) COLLATE pg_catalog."default" NOT NULL,
       firstname character varying(255) COLLATE pg_catalog."default" NOT NULL,
       lastname character varying(255) COLLATE pg_catalog."default" NOT NULL,
       email character varying(255) COLLATE pg_catalog."default" NOT NULL,
       created_at timestamp without time zone NOT NULL DEFAULT now(),
       CONSTRAINT users_pkey PRIMARY KEY (username)
   )
   
   TABLESPACE pg_default;
   
   ALTER TABLE IF EXISTS public.users
       OWNER to postgres;

Technologies Used
Node.js
Express.js
PostgreSQL
Socket.io

