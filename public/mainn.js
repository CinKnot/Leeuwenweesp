var app = new Vue({
	el: "#app",
	data: {
		url: "https://api.myjson.com/bins/14hs20",
		activities: [],
		data: {},
		CalendarApp: {},

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
				app.CalendarApp = 
//					app.getCalendarApp("Sunday 4 August");

				})
				.catch(error => console.log(error))
		},
		getCalendarApp(date) {

			if (!(date instanceof Date)) {
				date = new Date();
			}

			this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			this.quotes = ['Hello', 'Hi', 'Activities', 'Drinks'];
			this.apts = [
				{
					name: 'Finish this web app',
					endTime: new Date(2016, 4, 30, 23),
					startTime: new Date(2016, 4, 30, 21),
					day: new Date(2016, 4, 30).toString()
    },
				{
					name: 'My Birthday!',
					endTime: new Date(2016, 4, 1, 23, 59),
					startTime: new Date(2016, 4, 1, 0),
					day: new Date(2016, 4, 1).toString()
    },

  ];

			this.aptDates = [new Date(2016, 4, 30).toString(), new Date(2016, 4, 1).toString()];
			this.eles = {};
			this.calDaySelected = null;

			this.calendar = document.getElementById("calendar-app");

			this.calendarView = document.getElementById("dates");

			this.calendarMonthDiv = document.getElementById("calendar-month");
			this.calendarMonthLastDiv = document.getElementById("calendar-month-last");
			this.calendarMonthNextDiv = document.getElementById("calendar-month-next");

			this.dayInspirationalQuote = document.getElementById("inspirational-quote");

			this.todayIsSpan = document.getElementById("footer-date");
			// this.eventsCountSpan = document.getElementById("footer-events");
			this.dayViewEle = document.getElementById("day-view");
			this.dayViewExitEle = document.getElementById("day-view-exit");
			this.dayViewDateEle = document.getElementById("day-view-date");
			this.addDayEventEle = document.getElementById("add-event");
			this.dayEventsEle = document.getElementById("day-events");

			this.dayEventAddForm = {
				cancelBtn: document.getElementById("add-event-cancel"),
				addBtn: document.getElementById("add-event-save"),
				nameEvent: document.getElementById("input-add-event-name"),
				startTime: document.getElementById("input-add-event-start-time"),
				endTime: document.getElementById("input-add-event-end-time"),
				startAMPM: document.getElementById("input-add-event-start-ampm"),
				endAMPM: document.getElementById("input-add-event-end-ampm")
			};
			this.dayEventsList = document.getElementById("day-events-list");
			this.dayEventBoxEle = document.getElementById("add-day-event-box");

			/* Start the app */
			this.showView(date);
			this.addEventListeners();
			this.todayIsSpan.textContent = "Today is " + this.months[date.getMonth()] + " " + date.getDate();
		}
	}

});



//
//var calendar = new CalendarApp();
//console.log(calendar);

