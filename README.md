# Earth

Welcome to the Earth project! This project provides a simple API for retrieving manga information.

## API Endpoints

### Manga

- **Endpoint**: `/all-manga`
- **Method**: `GET`
- **Description**: Retrieve a list of all manga. You can paginate the results using the `page` query parameter.
- **Example** :
`GET http://localhost:3000/all-manga`
`GET http://localhost:3000/all-manga?page=${number}`


- **Endpoint**: `/most-populars`
- **Method**: `GET`
- **Description**: Retrieve a list of all with most views manga.
- **Example** :
`GET http://localhost:3000/most-populars`