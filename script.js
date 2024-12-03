document.addEventListener("DOMContentLoaded", function() {
    const holidayStatus = document.getElementById('holiday-status');
    const currentDate = new Date();
    const holidays = [
'2024-01-26', // Republic Day
'2024-03-25', // Holi
'2024-04-10', // Ram Navami
'2024-04-08', // Eid Al-Fitr (approx. start)
'2024-08-15', // Independence Day
'2024-10-02', // Gandhi Jayanti
'2024-10-13', // Dussehra (Vijayadashami)
'2024-11-01', // Diwali (Deepavali)
'2024-11-15', // Govardhan Puja
'2024-12-25'  // Christmas Day

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
