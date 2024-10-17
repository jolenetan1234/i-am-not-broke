# i-am-not-broke Backend
## Endpoints
### `/api/expt/admin`
View and manage all expenditures. For admins only.

1. `GET /`: Gets all expenditures.
2. `GET /:exptId`: Get expenditure by `exptId`.
3. `POST /`: Creates an expenditure.
4. `PUT /:exptId`: Updates an expenditure.
5. `DELETE /:exptId`: Deletes an expenditure.

### `api/expt/user`
View and manage individual user expenditures.
1. `GET /:userId`: Gets all expenditures of user `userId`.

Rest of the routes same as for admins (will refactor soon to avoid redundancy!!)