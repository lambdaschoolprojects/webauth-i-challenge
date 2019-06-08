const db = require('../user-helpers');

describe('user-helpers.js', () => {
    it('gets users from the database', async () => {
        const users = await db.getUsers();

        expect(users).not.toBeNull();
    });
});