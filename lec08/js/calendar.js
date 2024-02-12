
var calendar;

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        events: [{ id: "2023-09-14", start: "2023-09-14" }, { id: "2023-09-15", start: "2023-09-15" }],

        dateClick: function (info) {
            console.log("Clicked event occurs : date = " + info.dateStr);

            setCurrentDate(info.dateStr);
            loadcurrentTodo();
            // addEventToCalendar({ start: info.dateStr });
            // removeEventFromCalendar(info.dateStr);
        }

    });
    calendar.render();
});

function addEventToCalendar(event) {
    calendar.addEvent(event);
}

function removeEventFromCalendar(id) {
    var calendarEvent = calendar.getEventById("2023-09-14");
    calendarEvent.remove();
}