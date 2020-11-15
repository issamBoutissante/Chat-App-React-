const users = [];
const addUser = ({ id, name, room }) => {
  if (!name || !room) return { error: "you have to enter a name and room" };
  name = name.trim().toLowerCase();
  let user = users.find((user) => user.name === name && user.room == room);
  if (user) {
    return { error: "this user already exist" };
  }
  user = { name, id, room };
  users.push(user);
  return { user };
};
const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  if (!user) return { error: "this user doesnt exist" };
  return { user };
};
const removeUser = (id) => {
  const index = users.indexOf((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
};
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
