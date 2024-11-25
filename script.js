document.addEventListener("DOMContentLoaded", function() {
    const holidayStatus = document.getElementById('holiday-status');
    const currentDate = new Date();
    const holidays = [
        '2023-01-01', // New Year's Day
        '2023-04-07', // Good Friday
        '2023-04-10', // Easter Monday
        '2023-05-01', // Labor Day
        '2023-05-18', // Ascension Day
        '2023-05-29', // Whit Monday
        '2023-10-03', // Day of German Unity
        '2023-12-25', // Christmas Day
        '2023-12-26'  // Boxing Day
    ];

    const today = currentDate.toISOString().split('T')[0];
    
    if (holidays.includes(today)) {
        holidayStatus.innerText = "Yes, today is a holiday!";
    } else {
        holidayStatus.innerText = "No, today is not a holiday.";
    }
});
