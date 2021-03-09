# To run the app

# If I had more time I would...
1. Add integration tests for routes as well as unit tests for each endpoint - perhaps with supertest with an in-memory server
2. Handle potential DB errors in controllers

# Points of note
1. Started writing DB as a class for simpler testing, but jest doesn't mock it properly if called not within a tested function, used a module temporarily