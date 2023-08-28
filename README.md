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

Technologies Used
Node.js
Express.js
PostgreSQL
Socket.io

