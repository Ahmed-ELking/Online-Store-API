# The database schema and and API route information
## API route information
### Products

| Method | Route          | HTTP Verb |Token Required|
| :---:  |     :---:      |    :---:  | :---: |
| INDEX  | ('/products')  |[GET]      |:x:|
| SHOW   | ('/products/:id')|[GET]    |:x: |
|CREATE  |('/products')   |[POST]     |:heavy_check_mark:|
|UPDATE  |('/products')|[PUT]         |:heavy_check_mark:|
|DELETE  |('/products/:id')|[DELETE]  |:heavy_check_mark:|
|Products By Category|('/products?category=')|[GET]|:x:|

### Users


| Method | Route          | HTTP Verb |Token Required|
| :---:  |     :---:      |    :---:  | :---: |
| INDEX  | ('/users')  |[GET]      |:heavy_check_mark:|
| SHOW   | ('/users/:id')|[GET]    |:heavy_check_mark: |
|CREATE  |('/users')   |[POST]     |:x:|
|UPDATE  |('/users')|[PUT]         |:heavy_check_mark:|
|DELETE  |('/users/:id')|[DELETE]  |:heavy_check_mark:|
|Authenticate|('/users/authenticate')|[POST]|:heavy_check_mark:|

### Orders

| Method | Route          | HTTP Verb |Token Required|
| :---:  |     :---:      |    :---:  | :---: |
| INDEX  | ('/orders')  |[GET]      |:heavy_check_mark:|
| SHOW   | ('/orders/:id')|[GET]    |:heavy_check_mark:|
|CREATE  |('/orders')   |[POST]     |:heavy_check_mark:|
|UPDATE  |('/orders')|[PUT]         |:heavy_check_mark:|
|DELETE  |('/orders/:id')|[DELETE]  |:heavy_check_mark:|
|Completed Orders|('/orders/completedOrders/:id')|[GET]|:heavy_check_mark:|

### Dashboards


| Method |     Route          | HTTP Verb |
| :---:  |     :---:          |    :---:  |
| Get all products in orders|('/products_in_orders')|[GET]|
| Get all users that have made orders|('/users-with-orders')|[GET]|
|Get the 5 most expensive products|('/five-most-expensive')|[GET]|
|Get Top 5 most popular products|('/top-five')|[GET]|

## Database Schema

### Products Table

| Columns      | Data Type |
| :---:     | :---: |
| id        | PRIMARY KEY |
| name      | VARCHAR(50) |
|description|VARCHAR(255)|
|price      |NUMERIC(17, 2)|
|category   |VARCHAR(50)|

### Users Table

| Columns      | Data Type |
| :---:     | :---: |
|id|PRIMARY KEY|
|user_name|VARCHAR(100)| 
|first_name|VARCHAR(100)|
|last_name|VARCHAR(100)|
|password_digest|VARCHAR|

### Orders Table

| Columns      | Data Type |
| :---:     | :---: |
|id|PRIMARY KEY|
|user_id|foreign key to users table|
|status|VARCHAR(64)|

### Order-Products [Join Table]

| Columns      | Data Type |
| :---:     | :---: |
|id|PRIMARY KEY|
|quantity|INTEGER|
|product_id|foreign key to products table|
|order_id|foreign key to orders table|
