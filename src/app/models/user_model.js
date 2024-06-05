class User {
  constructor(_id,firstname,lastname, email, password,role,branch) {
    this._id=_id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.role = role;
    this.branch= branch;
  }
}

export default User;
