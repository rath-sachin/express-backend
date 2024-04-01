function cleanUser(user) {
  delete user.password;
  return user;
}

module.exports={cleanUser}