// document.addEventListener("DOMContentLoaded", function () {
//   var calendarEl = document.getElementById("calendar");
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: "dayGridMonth",
//     timeZone: 'UTC',
//     events: [
//       {
//         id: '1',
//         title: 'YQM Country Fest',
//         start: '2023-08-25',
//         url : 'https://www.yqmcountryfest.ca/'
//       },

//       {
//         id: '2',
//         title: 'Craft Beer Festival',
//         start: '2023-03-11'
//       },

//       {
//         id: '3',
//         title: 'Brew Festival',
//         start: '2023-08-05'
//       },

//       {
//         id: '4',
//         title: 'Cooking Camp',
//         start: '2023-03-06'
//       },

//       {
//         id: '5',
//         title: 'Stone Soup Society',
//         start: '2023-02-27'
//       },

//       {
//         id: '6',
//         title: 'Craft Beer Dinner',
//         start: '2023-03-10'
//       },

//       {
//         id: '7',
//         title: 'Music Festival',
//         start: '2023-06-08'
//       },

//       {
//         id: '8',
//         title: 'Beer on the Bridge',
//         start: '2023-07-08'
//       },

//       {
//         id: '9',
//         title: 'Ballet by the Ocean',
//         start: '2023-07-05'
//       },

//       {
//         id: '10',
//         title: 'Cultural Festival',
//         start: '2023-06-24'
//       },

//       {
//         id: '11',
//         title: 'Songwriter circle',
//         start: '2023-03-09'
//       },

//       {
//         id: '12',
//         title: 'The Last Waltz',
//         start: '2023-04-08'
//       },
// ],

// eventClick: function(info) {
//   info.jsEvent.preventDefault(); 

//   if (info.event.url) {
//     window.open(info.event.url);
//   }
// }

//   });
//   calendar.render();
// });



// var event = calendar.getEventById('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12') // an event object!
// var start = event.start // a property (a Date object)
// console.log(start.toISOString()) // "2018-09-01T00:00:00.000Z"