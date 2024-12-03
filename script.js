document.addEventListener("DOMContentLoaded", function() {
    const holidayStatus = document.getElementById('holiday-status');
    const currentDate = new Date();
    const holidays = [
'2024-01-01', // New Year's Day
'2024-04-08', // Eid Al-Fitr (approx. start)
'2024-04-09', // Eid Al-Fitr (approx. second day)
'2024-04-10', // Eid Al-Fitr (approx. third day)
'2024-06-16', // Arafat Day (approx.)
'2024-06-17', // Eid Al-Adha (approx. start)
'2024-06-18', // Eid Al-Adha (approx. second day)
'2024-07-07', // Islamic New Year (Hijri New Year, approx.)
'2024-09-15', // Prophet Muhammad's Birthday (approx.)
'2024-12-02', // UAE National Day
'2024-12-03'  // UAE National Day (second day)
    ];

    // Get current date in 'YYYY-MM-DD' format
    const today = currentDate.toLocaleDateString('en-GB');  // Using 'en-GB' ensures the date format is DD/MM/YYYY

    // Adjust format to YYYY-MM-DD to match the format in holidays array
    const todayFormatted = today.split('/').reverse().join('-');  // Convert to 'YYYY-MM-DD'

    if (holidays.includes(todayFormatted)) {
        holidayStatus.innerText = "Yes, today is a holiday!";
    } else {
        holidayStatus.innerText = "No, today is not a holiday.";
    }
});
