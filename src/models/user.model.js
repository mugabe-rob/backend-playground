const users = [];

module.exports = {
  create: (user) => {
    users.push(user);
    return user;
  },
  findByUsername: (username) => {
    return users.find((u) => u.username === username);
  }
};