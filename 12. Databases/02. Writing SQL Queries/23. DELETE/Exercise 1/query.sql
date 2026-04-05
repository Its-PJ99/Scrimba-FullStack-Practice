/*
	Set the retail price to $72,000
		and the condition to 5
	where the brand is 'Porsche' and the model is '944 Turbo'
	in the cars table
*/

UPDATE cars SET
	price = 72000, condition = 5
WHERE brand = 'Porsche' AND model = '944 Turbo';