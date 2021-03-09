# To run the app

# If I had more time I would...
1. Add integration tests for routes as well as unit tests for each endpoint - perhaps with supertest with an in-memory server
2. Handle potential DB errors in controllers

# Other small things to do
1. Webpack look for jsx as a module
2. Set mode to dev/production
3. ~add hot reload~
4. webpack size limit warnings
5. code splitting

# Points of note
1. Started writing DB as a class for simpler testing, but jest doesn't mock it properly if called not within a tested function, used a module temporarily