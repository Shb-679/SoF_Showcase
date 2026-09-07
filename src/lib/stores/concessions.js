const concessions = {
	categories: [
			{
			name: 'Combo Deal',
			items: [
				{
					name: "Pizza/Hot Dog/Cup o'Noodles",
					price: '10.00',
					description: 'Includes an entree, a drink (soda/water), chips, and candy',
					icon: '🍽️🥤🍫'
			},
				{
					name: "Nothing Bundt Cake with Drink",
					price: '10.00',
					description: 'Includes a tasty Bundtlet with a drink',
					icon: '🎂🥤'
			}
		]
		},
		{
			name: 'Food',
			items: [
				{
					name: 'Pizza',
					price: '5.00',
					description: 'Cheese or pepperoni',
					icon: '🍕'
				},
				{
					name: 'Hot Dog',
					price: '5.00',
					description: 'All-beef hot dog',
					icon: '🌭'
				},
				{
					name: "Cup o'Noodles",
					price: '5.00',
					description: 'Instant noodles',
					icon: '🍜'
				},
				{
					name: 'Pretzel',
					price: '3.00',
					description: 'Hot soft pretzel',
					icon: '🥨'
				},
				{
					name: 'Chips',
					price: '2.00',
					description: 'Assorted varieties',
					icon: '🥔'
				},
			]
		},
		{
			name: 'Drinks',
			items: [
				{
					name: 'Soda',
					price: '2.00',
					description: 'Coke, Diet Coke, Coke Zero, Sprite, Fanta',
					icon: '🥤'
				},
				{
					name: 'Bottled Water',
					price: '2.00',
					description: '',
					icon: '💧'
				},
				{
					name: 'Gatorade',
					price: '2.00',
					description: 'Assorted varieties',
					icon: '🧃'
				},
			]
		},
		{
			name: 'Treats & Candy',
			items: [
				{
					name: 'Nothing Bundt Cake',
					price: '8.00',
					description: 'Handcrafted bundt cake',
					icon: '🎂'
				},
				{
					name: 'Candy',
					price: '3.00',
					description: 'Your choice of M&Ms, MilkyWay, Nerds, Skittles, Snickers, Sour Patch Kids, and Twix',
					icon: '🍫'
				},
				{
					name: 'Airheads',
					price: '2.00',
					description: 'Popular taffy candy',
					icon: '🍬'
				}
			]
		}
	],
	paymentMethods: ['Cash', 'Credit', 'Debit', 'Apple Pay']
};

export { concessions };
