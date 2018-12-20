var app = new Vue({
	el: "#app",
	data: {
		url: "https://api.myjson.com/bins/14hs20",
		activities: [],
		data: {},


	},
	created() {
		this.getActivitiesData();
	},

	methods: {
		getActivitiesData() {

			fetch(this.url, {
					method: "GET",
				})
				.then(r => r.json())
				.then(json => {
					app.data = json;
					console.log(app.data);

				})
				.catch(error => console.log(error))
		},

		var events = [

			{
				'Date': new Date(2018, 20, 12),
				'Title 1': 'Christmas Drink from 08:00 - 23:30 p.m.',
				'Link': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.3724830653286!2d5.040531215243318!3d52.309243179774846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60dbd7047fbf5%3A0x1b3a0461a9da1c7!2sCaf%C3%A9+Toeters+En+Bellen!5e0!3m2!1snl!2snl!4v1545126490115'
			},

			{
				'Date': new Date(2018, 22, 12),
				'Title 2': 'Kids Soccer Tournament from 13:00 - 17:00 p.m.',
				'Link': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.9796050915042!2d5.02797251524368!3d52.31637257977625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60db7f54ef115%3A0x5fb05e169e5b57ce!2sFC+Weesp!5e0!3m2!1snl!2snl!4v1545127607356'
			},

			{
				'Date': new Date(2019, 23, 01),
				'Title 3': 'Sustainable Neighborhood from 20:00 - 22:30 p.m.',
				'Link': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.1606133728874!2d5.043451315243551!3d52.31308797977559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60d95dceb5505%3A0x80b2a387ea0e7cfa!2sPylades+%7C+Microsoft+Gold+Partner!5e0!3m2!1snl!2snl!4v1545130394300'
			},

			{
				'Date': new Date(2019, 23, 02),
				'Title 3': 'Scavenger Hunt from 20:00 - 22:30 p.m.',
				'Link': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.949537299933!2d5.036180715243712!3d52.316918179776294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60db829c5d5cb%3A0x2044c88622863567!2sSportcomplex+Papelaan!5e0!3m2!1snl!2snl!4v1545130909259'
			},

			{
				'Date': new Date(2019, 23, 02),
				'Title 3': 'Scavenger Hunt from 20:00 - 22:30 p.m.',
				'Link': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.949537299933!2d5.036180715243712!3d52.316918179776294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60db829c5d5cb%3A0x2044c88622863567!2sSportcomplex+Papelaan!5e0!3m2!1snl!2snl!4v1545130909259'	
		},

			{
				'Date': new Date(2019, 22, 03),
				'Title 3': 'Spring is in the Air Drinks from 20:00 - 22:30 p.m.',
				'Link': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.3724830653286!2d5.040531215243318!3d52.309243179774846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60dbd7047fbf5%3A0x1b3a0461a9da1c7!2sCaf%C3%A9+Toeters+En+Bellen!5e0!3m2!1snl!2snl!4v1545126490115'	 
				 },

			{
				'Date': new Date(2019, 27, 04),
				'Title 3': 'Queens birthday Free Market from 09:00 - 12:30 p.m.',
				'Link': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.949537299933!2d5.036180715243712!3d52.316918179776294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60dbe9aee095f%3A0xd0bd883260732023!2sMediaLab+Marketing!5e0!3m2!1snl!2snl!4v1545132714414'	  
	
	},

			{
				'Date': new Date(2019, 25, 05),
				'Title 3': 'Family Tennis Tournament from 10:00 - 16:00 p.m.',
				'Link': '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.0484251134044!2d5.032258415243629!3d52.31512377977587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5dff5c706cebd%3A0x4c9a1b53641123b3!2sWeesper+Tennis+Club!5e0!3m2!1snl!2snl!4v1545133332396"'
];

	}

});
