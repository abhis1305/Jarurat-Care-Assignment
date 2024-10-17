# Healthcare Services API
This is a simple Node.js API using Express and MongoDB for managing healthcare services. It allows you to add, retrieve, update, and delete services.

## Features
- Add a new service: Add details including service name, description, and price.
- Get all services: Retrieve a list of all available services.
- Update a service: Modify the details of an existing service.
- Delete a service: Remove a service from the list.
## Prerequisites
- Node.js (v14 or above)
- MongoDB (Local or Cloud-based)
- Postman (for testing the API)
## Setup Instructions
1. Clone the Repository: 
2. cd healthcare-api
3. Install Dependencies:
6. Copy code
7. npm install
8. Set Up Environment Variables:

- Add the following line, replacing with your MongoDB connection string:


### Run the Server:
- npm start
- The server should be running at http://localhost:5000.

# API Endpoints
## Method	Endpoint	Description
- POST	/api/services	Add a new service
- GET	/api/services	Get all services
- PUT	/api/services/:id	Update an existing service
- DELETE	/api/services/:id	Delete a service by its ID

## Testing the API with Postman
### Add a New Service:

- POST http://localhost:5000/api/services

### Get All Services:

- GET http://localhost:5000/api/services

### Update an Existing Service:

- PUT http://localhost:5000/api/services/<service_id>

### Delete a Service:

- DELETE http://localhost:5000/api/services/<service_id>

- If MongoDB is not connecting, make sure your connection string is correct and MongoDB is running.
- For any errors, check the console logs for more details.
License
- This project is licensed under the MIT License.
