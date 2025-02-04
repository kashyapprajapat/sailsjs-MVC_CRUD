/* eslint-disable linebreak-style */
/* eslint-disable indent */
// api/controllers/PageController.js

module.exports = {
    homepage: async function (req, res) {
        // Example data for demonstration
        let employees = [
            { empid: 1, empname: 'John Doe', salary: 50000, status: 'free' },
            { empid: 2, empname: 'Jane Smith', salary: 60000, status: 'learning' },
            // Add more employee objects as needed
        ];

        return res.view('pages/homepage', { employees });
    },
};
