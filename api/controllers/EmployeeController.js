/* eslint-disable indent */
module.exports = {
    list: async function (req, res) {
        // Retrieve employees from localStorage or any client-side storage
        let employees = JSON.parse(localStorage.getItem('employees')) || [];
        return res.view('pages/employee/list', { employees });
    },

    add: async function (req, res) {
        try {
            // Add employee to localStorage or any client-side storage
            let employees = JSON.parse(localStorage.getItem('employees')) || [];
            let newEmployee = req.body; // Assuming form data is sent via POST body
            employees.push(newEmployee);
            localStorage.setItem('employees', JSON.stringify(employees));
            return res.redirect('/employee/list'); // Redirect to employee list page after adding
        } catch (error) {
            return res.serverError(error);
        }
    },

    update: async function (req, res) {
        // Update employee in localStorage or any client-side storage
        let employees = JSON.parse(localStorage.getItem('employees')) || [];
        let updatedEmployee = req.body;
        let index = employees.findIndex(e => e.empid === updatedEmployee.empid);
        if (index !== -1) {
            employees[index] = updatedEmployee;
        }
        localStorage.setItem('employees', JSON.stringify(employees));
        return res.redirect('/employee/list');
    },

    delete: async function (req, res) {
        // Delete employee from localStorage or any client-side storage
        let employees = JSON.parse(localStorage.getItem('employees')) || [];
        let empidToDelete = req.params.id;
        employees = employees.filter(e => e.empid !== parseInt(empidToDelete));
        localStorage.setItem('employees', JSON.stringify(employees));
        return res.redirect('/employee/list');
    },
};
