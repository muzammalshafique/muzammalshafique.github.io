// Set the start date of the experience (e.g., the date you started working)
const startDate = new Date('2023-08-15'); // Replace 'YYYY-MM-DD' with your actual start date

// Function to calculate the years of experience
function calculateExperience(startDate) {
    const today = new Date();
    let experience = today.getFullYear() - startDate.getFullYear();
    const monthDifference = today.getMonth() - startDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < startDate.getDate())) {
        experience--;
    }
    return experience;
}

// Insert the calculated experience into the HTML
document.getElementById('experience').textContent = calculateExperience(startDate);