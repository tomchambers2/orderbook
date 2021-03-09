# To run the app

```
cd backend
yarn start
cd ../frontend
yarn start
```

Now running on http://localhost:8080

# Test

```
cd backend
yarn test
cd ../frontend
yarn test
```

# If I had more time I would...

1. Add integration tests for routes as well as unit tests for each endpoint - perhaps with supertest with an in-memory server
2. Handle potential DB errors in controllers
3. Form validation
4. Performance - paginate the requests to the backend/lazy loading infinite scroll
5. Live updating - ideally using websockets for successful/failed data. I considered optimistically updating the state but this didn't seem right for a financial application where certainty is important
6. Simple DB doesn't work well for querying
7. More frontend tests - only had time to test the User component - would write tests for the others as well

# Other small things to do

1. Webpack look for jsx as a module
2. ~Set mode to dev/production~
3. ~add hot reload~
4. webpack size limit warnings
5. code splitting

# Points of note

1. Started writing DB as a class for simpler testing, but jest doesn't mock it properly if called not within a tested function, used a module temporarily
