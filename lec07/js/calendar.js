
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,

        dateClick: function (info) {
            console.log("Clicked event occurs : date = " + info.dateStr);
        }

    });
    calendar.render();
});
