document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");



var currentUrl = window.location.toString();
console.log(currentUrl);
var newUrl = currentUrl.replace('profile','event/')
console.log(newUrl)



  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    timeZone: 'UTC',
    events: [
      {
        id: '1',
        title: 'YQM Country Fest',
        start: '2023-08-25',
        url: `${newUrl}1`
      },

      {
        id: '2',
        title: 'Craft Beer Festival',
        start: '2023-03-11',
        url: `${newUrl}2`
      },

      {
        id: '3',
        title: 'Brew Festival',
        start: '2023-08-05',
        url: `${newUrl}3`
      },

      {
        id: '4',
        title: 'Cooking Camp',
        start: '2023-03-06',
        url: `${newUrl}4`
      },

      {
        id: '5',
        title: 'Stone Soup Society',
        start: '2023-02-27',
        url: `${newUrl}5`
      },

      {
        id: '6',
        title: 'Craft Beer Dinner',
        start: '2023-03-10',
        url: `${newUrl}6`
      },

      {
        id: '7',
        title: 'Living Roots',
        start: '2023-06-08',
        url: `${newUrl}7`
      },

      {
        id: '8',
        title: 'Beer on the Bridge',
        start: '2023-07-08',
        url: `${newUrl}8`
      },

      {
        id: '9',
        title: 'Ballet by the Ocean',
        start: '2023-07-05',
        url: `${newUrl}9`
      },

      {
        id: '10',
        title: 'Cultural Festival',
        start: '2023-06-24',
        url: `${newUrl}10`
      },

      {
        id: '11',
        title: 'Songwriter circle',
        start: '2023-03-09',
        url:`${newUrl}11`
      },

      {
        id: '12',
        title: 'The Last Waltz',
        start: '2023-04-08',
        url: `${newUrl}12`
      },
      
      {
        id: '13',
        title: 'Powerlifting Championship',
        start: '2023-03-25',
        url: `${newUrl}13`
      },

      {
        id: '14',
        title: 'Shooting clinic',
        start: '2023-03-09',
        url: `${newUrl}14`
      },

      {
        id: '15',
        title: 'Zumba',
        start: '2023-02-23',
        url: `${newUrl}15`
      },

      {
        id: '16',
        title: 'Paddling Film',
        start: '2023-04-01',
        url: `${newUrl}16`
      },

      {
        id: '17',
        title: 'Monster Mania',
        start: '2023-06-17',
        url: `${newUrl}17`
      },

      {
        id: '18',
        title: 'Tech Hiring Event',
        start: '2023-03-17',
        url: `${newUrl}18`
      },

      {
        id: '19',
        title: 'Career Fair',
        start: '2023-04-12',
        url: `${newUrl}19`
      },

      {
        id: '20',
        title: 'Job Fair',
        start: '2023-04-21',
        url: `${newUrl}20`
      },

      {
        id: '21',
        title: 'Pittsburgh Career Fair',
        start: '2023-03-06',
        url: `${newUrl}21`
      },





    ],

    eventClick: function (info) {
      info.jsEvent.preventDefault();

      if (info.event.url) {
        window.open(info.event.url);
      }
    }
    
  });
  calendar.render();
  console.log(info.event.url)
});



var event = calendar.getEventById('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12') // an event object!
var start = event.start // a property (a Date object)
console.log(start.toISOString()) // "2018-09-01T00:00:00.000Z"
