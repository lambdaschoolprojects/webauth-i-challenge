const db = require("../user-helpers");

describe("user-helpers.js", () => {
  it("gets users from the database", async () => {
    const users = await db.getUsers();

    expect(users).not.toBeNull();
  });

  it("adds a user to the database", async () => {
    const user = { username: "TestUser", password: "password" };
    const result = await db.addUser(user);
    db.getUser(result).then(async newUser => {
      expect(newUser.username).toEqual(user.username);

      await db.deleteUser(newUser.id);
    });
  });

  it("gets a user by id", async () => {
    db.getUsers().then(users => {
      const randomId = users[getRandom(users.length)].id;
      db.getUser(randomId).then(user => {
        expect(user).not.toBeNull();
      });
    });
  });

  it("deletes a user from the database", async () => {
    const user = { username: "TestUser", password: "password" };
    db.addUser(user).then(newUser => {
      db.deleteUser(newUser).then(result => {
        expect(result).not.toBe(0);
      });
    });
  });
});

// helpers

const getRandom = max => {
  return Math.floor(Math.random() * max);
};
