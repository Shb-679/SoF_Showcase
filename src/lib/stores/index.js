// Application state
// There is a placeholder for a "special thanks" section at the bottom of the home page.
// This is optional, and is generally reserved for the band boosters to give an extra
// shout out.
const appState = {
	eventDate: new Date('September 19, 2026'),
	bandDirector: 'Jonathan Schiffler',
	principle: 'Tania N. Brown',
	specialThanks: ''
};

// Freedom HS Band Boosters
const boosters = {
	executiveBoard: [
		{ name: 'Janelle Irrgang', position: 'President' },
		{ name: 'Laura McGarry', position: 'VP Operations' },
		{ name: 'JongSun Lee', position: 'VP Logistics' },
		{ name: 'Catalina Gomoloka and Rachael Bingham', position: 'VP Colorguard' },
		{ name: 'Matt McGarry', position: 'VP Drumline' },
		{ name: 'James Gould', position: 'Treasurer' },
		{ name: 'Becky Wilhelm', position: 'Secretary' }
	],
	showcaseCoordinators: [
		'Setup/Takedown - Manny Ramirez',
		'Parking - James Irrgang',
		'Band Registration - Kristen Fegan',
		'Hydration Station - Erin Sterling',
		'Hospitality - Kristen Keffer',
		'Concessions - Becky and Dan Wilhelm',
		'Volunteer Check-in - Catalina Gomolka',
		'Ticket Sales - Maria Ryan',
		'Air Grams - Megan Jacoby',
		'Ushers & Stadium Helpers - Jay Herrera',
		'Band Entrance Gate - Mike Cattafesta',
		'Runners - Laura and Matt McGarry',
		'Pit Crew - Rachael Bingham and Matt McGarry',
		'Prop Crew - JongSun Lee',
		'Finance Manager - James Gould'
	]
};

export { appState, boosters };
