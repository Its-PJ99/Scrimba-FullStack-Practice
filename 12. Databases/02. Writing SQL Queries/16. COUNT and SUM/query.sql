/*
	Count the number of cars
		where sold is true
*/

SELECT COUNT(*) AS total_sold FROM cars
	WHERE sold IS TRUE;