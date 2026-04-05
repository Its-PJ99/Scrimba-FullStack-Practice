/*
	Select the maximum retail price
		where sold is true
	Use most_expensive as an alias
*/

SELECT MAX(price) AS most_expensive FROM cars
	WHERE sold IS TRUE;