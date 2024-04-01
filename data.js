const fs = require("fs/promises");

async function readData() {
  const d = await fs.readFile("./data.json");
  return JSON.parse(d);
}

async function updateUser({ username, newData }) {
  const d = await readData();
  for (let i = 0; i < d.length; i++) {
    if (username == d[i].username) {
      const update = { ...d[i], ...newData };

      d[i] = update;

      fs.writeFile("./data.json", JSON.stringify(d, undefined, 2));
      return d[i];
    }
  }
  return null;
}

async function deleteUser({ username }) {
  const d = await readData();
  for (let i = 0; i < d.length; i++) {
    if (username == d[i].username) {
      d.splice(i , 1);
      fs.writeFile("./data.json", JSON.stringify(d, undefined, 2));
      return d[i];
    }
  }
  return null;
}

async function getUser({ username }) {
  const d = await readData();
  for (let i = 0; i < d.length; i++) {
    if (username == d[i].username) {
      return d[i];
    }
  }

  return null;
}

async function addUser({username, name, password, email}){
  let u = await getUser({username})
  if (u) {
    return null;
  }

  const d = await readData();
  u = { username, password, name, email, createdAt: new Date().toISOString() };
  d.push(u);
  delete u.password;
  fs.writeFile("./data.json", JSON.stringify(d, undefined, 2));
  return u;
}


module.exports = {
  addUser, updateUser, deleteUser, getUser
}