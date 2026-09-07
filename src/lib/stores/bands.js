const bands = [
	
	{
		id: 'skyview',
		school: 'Skyview High School',
		name: 'XYZ',
		location: 'Herndon, VA',
		groupNumber: 'Group 1',
		logoUrl: '/images/schools/xyz.webp',
		productionName: 'XYZ',
		drumMajors: ['xyz', 'XYZ', 'XYZ'],
		directors: ['Alan P. Johnson'],
		songs: [
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' }
		]
	},
	{
		id: 'clarkecounty',
		school: 'Clarke County High School',
		name: "Screamin' Eagles",
		location: 'Berryville, VA',
		groupNumber: 'Group 1',
		logoUrl: '/images/schools/clarkecounty.webp',
		productionName: 'Breakout!',
		drumMajors: ['Annaliese Pledgie'],
		directors: ['Mark Curry', 'Averie Jackson'],
		songs: [{ title: 'Breakout!', composer: 'Randall Standridge' }]
	},
	{
		id: 'loudounvalley',
		school: 'Loudoun Valley High School',
		name: 'Marching Vikings',
		location: 'Purcellville, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/loudounvalley.webp',
		productionName: 'Wild, Wild Western Loudoun',
		drumMajors: ['Matt Hile', 'Richie Ring'],
		directors: ['Megan Stallings'],
		songs: []
	},
	{
		id: 'tuscarora',
		school: 'Tuscarora High School',
		name: 'Marching Huskies',
		location: 'Leesburg, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/tuscarora.webp',
		productionName: 'Common Sense',
		drumMajors: ['Aidan Spessard'],
		directors: ['McKenzie Durgin'],
		songs: [
			{ title: 'Toxic', composer: 'Britney Spears' },
			{ title: 'Adagio for Tron', composer: 'Daft Punk' },
			{ title: 'BANG', composer: 'AJR' },
			{ title: 'Close Encounters', composer: 'John Williams' }
		]
	},
		{
		id: 'parkview',
		school: 'Park View High School',
		name: 'XYZ',
		location: 'Sterling, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/xyz.webp',
		productionName: 'XYZ',
		drumMajors: ['xyz', 'XYZ', 'XYZ'],
		directors: ['Claude LeGrand Jr'],
		songs: [
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' }
		]
	},
	{
		id: 'woodgrove',
		school: 'Park View High School',
		name: 'XYZ',
		location: 'Purcellville, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/xyz.webp',
		productionName: 'XYZ',
		drumMajors: ['xyz', 'XYZ', 'XYZ'],
		directors: ['Ryan Dempsey'],
		songs: [
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' }
		]
	},
	{
		id: 'manassaspark',
		school: 'Manassas Park High School',
		name: 'XYZ',
		location: 'Manassas Park, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/xyz.webp',
		productionName: 'XYZ',
		drumMajors: ['xyz', 'XYZ', 'XYZ'],
		directors: ['Molly Broklaski'],
		songs: [
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' }
		]
	},
	{
		id: 'justice',
		school: 'Justice High School',
		name: 'XYZ',
		location: 'Falls Church, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/xyz.webp',
		productionName: 'XYZ',
		drumMajors: ['xyz', 'XYZ', 'XYZ'],
		directors: ['Brian Thomas'],
		songs: [
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' }
		]
	},
	{
		id: 'herndon',
		school: 'Herndon High School',
		name: 'XYZ',
		location: 'Herndon, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/xyz.webp',
		productionName: 'XYZ',
		drumMajors: ['xyz', 'XYZ', 'XYZ'],
		directors: ['Brian Fisher'],
		songs: [
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' }
		]
	},
		{
		id: 'westpotomac',
		school: 'West Potomac High School',
		name: 'Marching Wolverines',
		location: 'Alexandria, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/westpotomac.webp',
		productionName: 'Rock The Ring!',
		drumMajors: ['Colten Wright'],
		directors: ['Joe Antonucci'],
		songs: [
			{ title: 'Gonna Fly Now', composer: 'Bill Conti' },
			{ title: 'Punch Out' },
			{ title: 'We Will Rock You', composer: 'Queen' },
			{ title: 'We Are The Champions', composer: 'Queen' }
		]
	},
	{
		id: 'fairfax',
		school: 'Fairfax High School',
		name: 'XYZ',
		location: 'Fairfax, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/xyz.webp',
		productionName: 'XYZ',
		drumMajors: ['xyz', 'XYZ', 'XYZ'],
		directors: ['Noah Freeman'],
		songs: [
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' }
		]
	},
	{
		id: 'rockridge',
		school: 'Rock Ridge High School',
		name: 'XYZ',
		location: 'Ashburn, VA',
		groupNumber: 'Group 5',
		logoUrl: '/images/schools/rockridge.webp',
		productionName: 'XYZ',
		drumMajors: ['xyz', 'XYZ', 'XYZ'],
		directors: ['Justin D. Ratcliff'],
		songs: [
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' }
		]
	},
	{
		id: 'lightridge',
		school: 'Lightridge High School',
		name: 'Marching Storm',
		location: 'Aldie, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/xyz.webp',
		productionName: 'XYZ',
		drumMajors: ['xyz', 'XYZ', 'XYZ'],
		directors: ['Jonathan Philip, Jamieson Carr, Jacob Zerega'],
		songs: [
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' }
		]
	},
	{
		id: 'johnchampe',
		school: 'John Champe High School',
		name: 'Marching Knights',
		location: 'Aldie, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/johnchampe.webp',
		productionName: 'Knight Shades',
		drumMajors: ['Rithik Iyer', 'Jiya Patel', 'Alejandro Zayas-Rodriguez'],
		directors: ['Adam Foreman', 'Jason Miller'],
		songs: [
			{ title: 'Blinding Lights', composer: 'The Weeknd' },
			{ title: 'Blue Shades', composer: 'Frank Ticheli' },
			{ title: 'Sunglasses at Night', composer: 'Corey Hart' },
			{ title: 'The Light Fantastic', composer: 'Paul Lovatt-Cooper' }
		]
	},
	{
		id: 'independence',
		school: 'Independence High School',
		name: 'XYZ',
		location: 'Ashburn, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/independence.webp',
		productionName: 'XYZ',
		drumMajors: ['xyz', 'XYZ', 'XYZ'],
		directors: ['Kyle Harrington & Amanda Young'],
		songs: [
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' },
			{ title: 'XYZ', composer: 'XYZ' }
		]
	},
	{
		id: 'freedom',
		school: 'Freedom High School',
		name: 'Spirit of Freedom',
		location: 'South Riding, VA',
		groupNumber: 'Exhibition',
		logoUrl: '/images/schools/freedom.webp',
		productionName: 'In the Present',
		drumMajors: ['Abby Keenan', 'Josh Choi', 'Bea Elliot'],
		directors: ['Jonathan Schiffler'],
		songs: [
			{ title: 'Right Now', composer: 'Van Halen' },
			{ title: 'Simple Gifts', composer: 'Traditional' },
			{ title: 'Deciduous', composer: 'Viet Cuong' }
		]
	}
];

export { bands };
