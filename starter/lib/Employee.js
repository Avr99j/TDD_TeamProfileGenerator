// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        this.email;
    }

    getRole() {
        return 'Employee';
    }

}

// Exporting the Employee class
module.exports = Employee;
