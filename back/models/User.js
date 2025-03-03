class User {
    constructor(id, name, lastname, email, phone, password, role) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.role = role;
    }
}
module.exports = User;
