// const Realm = require("realm");
// const app = new Realm.App({ id: "<Your App ID>" }); // create a new instance of the Realm.App
// async function run() {

//   // login with an anonymous credential
//   await app.logIn(Realm.Credentials.anonymous());

//   const DogSchema = {
//       name: "Dog",
//       properties: {
//         _id: 'int',
//         name: "string",
//         age: "int",
//       },
//       primaryKey: '_id'
//   };

//   const realm = await Realm.open({
//     schema: [DogSchema],
//     sync: {
//       user: app.currentUser,
//       partitionValue: "myPartition",
//     },
//   });

//   // The myPartition realm is now synced to the device. You can
//   // access it through the `realm` object returned by `Realm.open()`

//   // write to the realm
// }
// run().catch(err => {
//   console.error("Failed to open realm:", err)
// });
//index.html's js
var button = document.getElementById('myButton');
var bsButton = new bootstrap.Button(button);
var buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
  var button = new bootstrap.Button(button)
  button.toggle();
});