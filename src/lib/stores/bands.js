const bands = [
	
	{
		id: 'skyview',
		school: 'Skyview High School',
		name: 'Aviators',
		location: 'Herndon, VA',
		groupNumber: 'Group 1',
		logoUrl: '/images/schools/skyviewhs.webp',
		productionName: 'The Dream of Flight',
		drumMajors: [''],
		directors: ['Alan P. Johnson'],
		songs: [
			{ title: 'Sogno di Volare', composer: 'Christopher Tin' },
			{ title: 'Cadillac of the Skies', composer: 'John Williams' },
			{ title: 'Flight', composer: 'Hans Zimmer' },
			{ title: 'Top Gun Anthem', composer: 'Harold Faltemeyer' }
		]
	},
	{
		id: 'clarkecounty',
		school: 'Clarke County High School',
		name: "Screamin' Eagles",
		location: 'Berryville, VA',
		groupNumber: 'Group 1',
		logoUrl: '/images/schools/clarkecounty.webp',
		productionName: 'Our Favorite Things',
		drumMajors: ['Kaleia Garcia'],
		directors: ['Mark Curry', 'Averie Jackson'],
		songs: [{ title: 'My Favorite Things (The Sound of Music)', composer: 'Richard Rodgers' },
				{ title: 'Robin Hood, Prince of Thieves', composer: 'Michael Kamen, Original Movie Soundtrack' },
				{ title: 'This is Me (The Greatest Showman)', composer: 'Benj Pasek and Justin Paul' },
				{ title: 'Empire State of Mind', composer: 'Alicia Keys' }
		]
	},
	{
		id: 'loudounvalley',
		school: 'Loudoun Valley High School',
		name: 'Marching Vikings',
		location: 'Purcellville, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/loudounvalley.webp',
		productionName: 'Balance',
		drumMajors: ['Sam Seipt, Hailey Shields'],
		directors: ['Megan Stallings'],
		songs: [{ title: 'Everything In Its Right Place', composer: 'Radiohead' },
				{ title: 'Bolero', composer: 'Ravel' },
				{ title: 'JOY!', composer: 'RAYE' }
		]
	},
	{
		id: 'tuscarora',
		school: 'Tuscarora High School',
		name: 'Marching Huskies',
		location: 'Leesburg, VA',
		groupNumber: 'Group 2',
		logoUrl: '/images/schools/tuscarora.webp',
		productionName: 'I AM',
		drumMajors: ['Aidan Spessard, Dayton Lee'],
		directors: ['McKenzie Durgin'],
		songs: [
			{ title: 'Steampunk Suite', composer: 'Erika Svanoe' },
			{ title: 'Riften Wed', composer: 'Julie Giroux' },
			{ title: 'Rise Up', composer: 'Andra Day' },
			{ title: 'Confident', composer: 'Demi Lovato' },
			{ title: 'Barbie World', composer: 'Nicki Minaj, all arranged by M. Arboldea and E. Steele' }
		]
	},
		{
		id: 'parkview',
		school: 'Park View High School',
		name: 'Patriots',
		location: 'Sterling, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/ParkView.webp',
		productionName: 'Uncharted',
		drumMajors: ['Keylin Marroquin, Melanie Natareno Hernandez'],
		directors: ['Claude LeGrand Jr'],
		songs: [
			{ title: '4 Movements; New World Symphony', composer: 'Antonín Dvořák' },
			{ title: 'A Million Dreams (The Greatest Showman)', composer: 'Benj Pasek and Justin Paul' },
			{ title: 'Unstoppable', composer: 'Sia' },
			{ title: 'Largo Theme (New World)', composer: 'Antonín Dvořák' },
			{ title: 'Hymn from Jupiter 4th Movement', composer: 'Gustav Holst' }
		]
	},
	{
		id: 'woodgrove',
		school: 'Woodgrove High School',
		name: 'Wolverines',
		location: 'Purcellville, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/Woodgrovehs.webp',
		productionName: 'Infectious',
		drumMajors: ['Kai Shah'],
		directors: ['Ryan Dempsey'],
		songs: [
			{ title: 'Toxic', composer: 'Britney Spears' },
			{ title: 'Okay with Crazy', composer: 'Thomas Newman' },
			{ title: 'Kiss from a Rose', composer: 'Seal' }
		]
	},
	{
		id: 'manassaspark',
		school: 'Manassas Park High School',
		name: 'Cougars',
		location: 'Manassas Park, VA',
		groupNumber: 'Group 3',
		logoUrl: '/images/schools/ManassassParkhs.webp',
		productionName: 'Rhythms of Rio',
		drumMajors: ['Drum Major - Kira Hargest, Commanding Officer - Irvin Cruz'],
		directors: ['Molly Broklaski'],
		songs: [
			{ title: 'Rythms of Rio', composer: 'David Bennett' }
		]
	},
	{
		id: 'justice',
		school: 'Justice High School',
		name: 'Wolves',
		location: 'Falls Church, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/justicehs.webp',
		productionName: 'Dia de los Muertos',
		drumMajors: ['No DM, Leads: TJ Basin, Brooke Ehman-Jone, Jaime Matildes, Nathan Jackson Silvia Smith, Elinor Sonet'],
		directors: ['Brian Thomas'],
		songs: [
			{ title: 'Dia de los Muertos', composer: 'Randall Standridge' }
		]
	},
	{
		id: 'herndon',
		school: 'Herndon High School',
		name: 'Fighting Hornets',
		location: 'Herndon, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/Herndonhornet.webp',
		productionName: 'Steal the Show - Art Heist',
		drumMajors: ['Jonathan Mauricio Lopez, Theo Cuadro'],
		directors: ['Brian Fisher'],
		songs: [
			{ title: '"Hatching the plan" Ballet of the Unhatched Chicks / Mission Impossible', composer: 'Modest Mussorgsky, Lalo Schifrin' },
			{ title: '"The Theft" Old Castle / Skyfall', composer: 'Modest Mussorgsky, Adele & Paul Epworth' },
			{ title: '"The Chase" Baba Yaga / Live and Let Die', composer: 'Modest Mussorgsky, Paul & Linda McCartney' },
			{ title: '"Finale" Smooth Criminal / Great Gate', composer: 'Michael Jackson, Modest Mussorgsky' }
		]
	},
		{
		id: 'westpotomac',
		school: 'West Potomac High School',
		name: 'Marching Wolverines',
		location: 'Alexandria, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/westpotomac.webp',
		productionName: 'Distorted',
		drumMajors: ['Lexi Zwerdling, Tyler Williams'],
		directors: ['Joe Antonucci'],
		songs: [
			{ title: 'Fugue in G Minor', composer: 'Johann Sebastian Bach' },
			{ title: 'If I Fell', composer: 'The Beatles' },
			{ title: 'Everything In Its Right Place', composer: 'Radiohead' }
		]
	},
	{
		id: 'fairfax',
		school: 'Fairfax High School',
		name: 'Lions',
		location: 'Fairfax, VA',
		groupNumber: 'Group 4',
		logoUrl: '/images/schools/fairfaxhs.webp',
		productionName: 'Immortal',
		drumMajors: ['Connor Kim, Nari Kim'],
		directors: ['Noah Freeman'],
		songs: [
			{ title: 'Toccata and Fugue in G Minor', composer: 'Johann Sebastian Bach' },
			{ title: 'Danse Macabre', composer: 'Camille Saint-Saëns' },
			{ title: 'My Immortal', composer: 'Evanescence' },
			{ title: 'Bring Me To Life', composer: 'Evanescence' }
		]
	},
	{
		id: 'rockridge',
		school: 'Rock Ridge High School',
		name: 'Phoenix',
		location: 'Ashburn, VA',
		groupNumber: 'Group 5',
		logoUrl: '/images/schools/rockridge.webp',
		productionName: 'Bright Idea!',
		drumMajors: ['Ryann, Leeyu, Netiri, Shravya, Anushka'],
		directors: ['Justin D. Ratcliff'],
		songs: [
			{ title: 'Requiem for a Dream', composer: 'Clint Mansell' },
			{ title: 'Primacy of Number', composer: 'Philip Glass' },
			{ title: 'Dancer in the Dark', composer: 'Björk' },
			{ title: 'See the Light (Tangled)', composer: 'Alan Menken' },
			{ title: 'Maniac from Flash Dance', composer: 'Michael Sembello' },
			{ title: 'My Songs Know What You Did in the Dark', composer: 'Fall Out Boy' },
			{ title: 'Power', composer: 'Kanye West' }
		]
	},
	{
		id: 'lightridge',
		school: 'Lightridge High School',
		name: 'Marching Storm',
		location: 'Aldie, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/Lightridge.webp',
		productionName: 'POP!',
		drumMajors: ['Ragnea Ganjoo, TC Haries, Serwaa Boateng, Ulemj Boldbaatar'],
		directors: ['Jonathan Philip, Jamieson Carr, Alison Hoganson'],
		songs: [
			{ title: 'Pop Goes the Weasel', composer: 'Traditional' },
			{ title: 'Kingfishers Catch Fire', composer: 'John Mackey' },
			{ title: 'Pop!', composer: 'NSYNC*' },
			{ title: 'Sing', composer: 'Pentatonix' }
		]
	},
	{
		id: 'johnchampe',
		school: 'John Champe High School',
		name: 'Marching Knights',
		location: 'Aldie, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/johnchampe.webp',
		productionName: 'The Flip Side',
		drumMajors: ['Jamie Byun, Sriya Godavarthi, Ranson Thayambath'],
		directors: ['Adam Foreman', 'Jason Miller'],
		songs: [
			{ title: 'TBD', composer: 'TBD' }
		]
	},
	{
		id: 'independence',
		school: 'Independence High School',
		name: 'Tigers',
		location: 'Ashburn, VA',
		groupNumber: 'Group 6',
		logoUrl: '/images/schools/independence.webp',
		productionName: 'Spark',
		drumMajors: ['Evie Thrift, Juleana Molina'],
		directors: ['Kyle Harrington, Amanda Young'],
		songs: [
			{ title: 'Breath of Souls', composer: 'Paul Lovatt-Cooper' },
			{ title: 'La Chancla', composer: 'Dennis Llinas' },
			{ title: 'Adagio from Spartacus', composer: 'Aram Khachaturian' },
			{ title: 'Familiarity', composer: 'Punch Brothers' },
			{ title: 'Original Music', composer: 'Kyle Harrington and Nick Merrilat' }
		]
	},
	{
		id: 'freedom',
		school: 'Freedom High School',
		name: 'Spirit of Freedom',
		location: 'South Riding, VA',
		groupNumber: 'Exhibition',
		logoUrl: '/images/schools/freedom.webp',
		productionName: 'If Left Were Right and Down Was Up',
		drumMajors: ['Bea Elliot, Mercedes Chin'],
		directors: ['Jonathan Schiffler'],
		songs: [
			{ title: 'Guitar Sound', composer: 'Ronald Jenkees' },
			{ title: 'Disorganized Fun', composer: 'Ronald Jenkees' },
			{ title: 'Energy Never Dies, It Just Transforms', composer: 'The Midnight' },
			{ title: 'Crazy', composer: 'Seal' }
		]
	}
];

export { bands };
