CREATE TABLE "pizza" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"price" NUMERIC (20, 2) NOT NULL,
	"image_path" VARCHAR(1000) NOT NULL
);

INSERT INTO "pizza" ("name", "description", "price", "image_path")
VALUES ('Tomato Soup','If you like pizza, but you hate the toppings, the cheese, and the crust, you''ll love this! Grilled Cheese not included.',12.99,'https://www.inspiredtaste.net/wp-content/uploads/2023/09/Roasted-Tomato-Soup-Recipe-Video.jpg'),
('Onomatopizza','We start with a WHOMP of dough, SPLAT some marinara on it, PLOP enough cheese on there to make a mouse PEEP. Top it off with some SIZZLING bacon, and BOOM there it is! We guarantee you''ll SMACK your lips.',14.99,'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/Triple-Bacon-Pizza-compressed.jpg'),
('Pepperoni','Classic pizza with cheese and pepperoni. Baked with a traditional crust in our brick oven.',14.99,'https://sipbitego.com/wp-content/uploads/2021/08/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg'),
('Over the Rainbow','Taste the rainbow! One ingredient of each color: pepperoni, doritos, pineapple, olives, cheese, peppers and onion. Complimentary water served in a spray bottle to taste an actual rainbow.',19.99,'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ymsbwtzd/31e0ee0b-03ee-44b3-8720-78d4b8af36ae.jpeg'),
('Chinese Firedragon','Pepperoni, pineapple and banana peppers.',15.99,'https://pbs.twimg.com/media/Ebooy47XkAAZMfQ.jpg:large'),
('Bad Date','Garlic, Onion and Pepperoni.',24.99,'https://cookinwithchris.files.wordpress.com/2015/03/img_1830.jpg'),
('Another Little Pizza My Heart', 'Cheese Pizza. Personal size only.', 5.99,'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg');

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"customer_name" VARCHAR (1000) NOT NULL,
	"street_address" VARCHAR(1000) NOT NULL,
	"city" VARCHAR(1000) NOT NULL,
	"zip" VARCHAR(20) NOT NULL,
	"type" VARCHAR(100) NOT NULL,
	"total" NUMERIC (20, 2) NOT NULL,
	"time" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE "line_item" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INT REFERENCES "orders" ON DELETE CASCADE,
	"pizza_id" INT REFERENCES "pizza",
	"quantity" INT NOT NULL
);
