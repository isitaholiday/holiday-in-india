document.addEventListener("DOMContentLoaded", function() {
    const holidayStatus = document.getElementById('holiday-status');
    const currentDate = new Date();
    const holidays = [
        '2024-01-01', // New Year's Day
        '2024-01-26', // Australia Day
        '2024-04-07', // Good Friday
        '2024-04-10', // Easter Monday
        '2024-04-25', // Anzac Day
        '2024-06-12', // Queen's Birthday (most states)
        '2024-10-02', // Labour Day (most states)
        '2024-12-02', // Christmas Day
        '2024-12-26'  // Boxing Day
    ];

    const today = currentDate.toISOString().split('T')[0];
    
    if (holidays.includes(today)) {
        holidayStatus.innerText = "Yes, today is a holiday!";
    } else {
        holidayStatus.innerText = "No, today is not a holiday.";
    }
});
