const users = [];
const rooms = [];
 const addUser = ({ name, id, room }) => {
  users.filter((user) => (user.name = name), (user.room = room));
  users.push({ name: name, id: id, room });
};

module.exports addUser;