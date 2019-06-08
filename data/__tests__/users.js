const db = require("../user-helpers");

describe("user-helpers.js", () => {
  it("gets users from the database", async () => {
    const users = await db.getUsers();

    expect(users).not.toBeNull();
  });

  it("adds a user to the database", async () => {
    const user = { username: "TestUser", password: "password" };
    const result = await db.addUser(user);
    const foundUser = await db.getUser(result.id);

    expect(foundUser.username).toBe(user.username);

    await db.deleteUser(foundUser.id);
  });

  it("gets a user by id", async () => {
    const users = await db.getUsers();
    const randomUser = getRandom(users.length);
    const randomId = randomUser.id;

    const user = db.getUser(randomId);

    expect(user).isEqual(randomUser);
  });

  it("deletes a user from the database", async () => {
    const user = { username: "TestUser", password: "password" };
    const newUser = await db.addUser(user);

    const result = await db.deleteUser(newUser.id);

    expect(result).not.toBe(0);
  });
});

// helpers

const getRandom = max => {
  return Math.floor(Math.random() * max);
};
