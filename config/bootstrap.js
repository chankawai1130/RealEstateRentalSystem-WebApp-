/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  //   if (await Estate.count() > 0) {
  //     return done();
  //   }

  //   await Estate.createEach([
  //     {
  //       title: "home", image: "data:image/jpeg;base64,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",
  //       name: "Festival City", bedrooms: 3, area: 700, tenants: 1, rent: 18000, highlighted: "on"
  //     },
  //     {
  //       title: "house", image: "https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg",
  //       name: "Tin Ma Court", bedrooms: 3, area: 550, tenants: 1, rent: 12000, highlighted: "on"
  //     },
  //   ]);

  // };

  sails.bcrypt = require('bcryptjs');
  const saltRounds = 10;

  if (await Estate.count() > 0) {
    return generateUsers();
  }


  await Estate.createEach([
    {
      title: "home", image: "data:image/jpeg;base64,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",
      name: "Festival City", bedrooms: 3, area: 700, tenants: 1, rent: 18000, highlighted: "on"
    },
    {
      title: "house", image: "https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg",
      name: "Tin Ma Court", bedrooms: 3, area: 550, tenants: 1, rent: 12000, highlighted: "on"
    },
  ]);

  return generateUsers();

  async function generateUsers() {

    if (await User.count() > 0) {
      return;
    }

    const hash = await sails.bcrypt.hash('123456', saltRounds);

    await User.createEach([
      { username: "admin", password: hash, role: "admin"},
      { username: "client1", password: hash, role: "client"},
      { username: "client2", password: hash, role: "client"}
      // etc.
    ]);

    const home = await Estate.findOne({ title: "home" });
    const house = await Estate.findOne({ title: "house" });
    const client1 = await User.findOne({ username: "client1" });
    const client2 = await User.findOne({ username: "client2" });

    await User.addToCollection(client1.id, 'owns').members(home.id);
    await User.addToCollection(client2.id, 'owns').members([home.id, house.id]);
    
  }

}