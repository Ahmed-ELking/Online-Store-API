## API Endpoints 
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

#### Products
- INDEX Route: ('/products') [GET] 
- SHOW Route: ('/products/:id') [GET]
- CREATE Route: ('/products') [POST] [token required]
- UPDATE Route: ('/products') [PUT] [token required]
- DELETE Route: ('/products/:id') [DELETE] [token required]
- Products By Category Route: ('/products?category=') [GET]


#### Users
- INDEX Route: ('/users') [GET] [token required]
- SHOW Route: ('/users/:id') [GET] [token required]
- CREATE Route: ('/users') [POST]
- UPDATE Route: ('/users') [PUT] [token required]
- DELETE Route: ('/users/:id') [DELETE] [token required]
- Authenticate Route: ('/users/authenticate') [POST] [token required]

#### Orders
- INDEX Route: ('/orders') [GET] [token required]
- SHOW Route: ('/orders/:id') [GET] [token required]
- CREATE Order Route: ('/orders') [POST] [token required]
- UPDATE Route: ('/orders') [PUT] [token required]
- DELETE Route: ('/orders/:id') [DELETE] [token required]
- Completed Orders by user Route ('/orders/completedOrders/:id') [GET] [token required]


#### Dashboards
- Get all products in orders Route: ('/products_in_orders') [GET]
- Get all users that have made orders Route: ('/users-with-orders') [GET]
- Get the 5 most expensive products Route: ('/five-most-expensive') [GET]
- Get Top 5 most popular products Route: ('/products/') [GET]



## Data Shapes

#### Products Table
- id: [PRIMARY KEY]
- name: [VARCHAR(50)]
- description: [VARCHAR(255)]
- price: [NUMERIC(17, 2)] Limit price to 15 digits before decimal, and two after
- category: [VARCHAR(50)]

#### Users Table
- id: [PRIMARY KEY]
- user_name: [VARCHAR(100)] 
- first_name: [VARCHAR(100)]
- last_name: [VARCHAR(100)]
- password_digest: [VARCHAR]

#### Orders Table
- id: [PRIMARY KEY]
- user_id: [foreign key to users table]
- status: [VARCHAR(64)]

#### Order-Products [Join Table]
- id: [PRIMARY KEY]
- quantity: [INTEGER]
- product_id: [foreign key to products table]
- order_id: [foreign key to orders table]

#### .env variables
- POSTGRES_HOST=localhost
- POSTGRES_DB=full_stack_dev
- POSTGRES_TEST_DB=full_stack_dev_test
- POSTGRES_USER=full_stack_user
- POSTGRES_PASSWORD=123
- ENV=test
- BCRYPT_PASSWORD=your_secret_password
- SALT_ROUNDS=10
- TOKEN_SECRET=ahmed123