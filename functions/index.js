// const functions = require("firebase-functions");


// const admin = require('firebase-admin');
// admin.initializeApp();

// exports.checkRole = functions.https.onCall((data, context) => {
//   //get user and provide Role
//   return admin.auth().getUserByEmail(data.email).then((user) => {
//     return admin.auth().setCustomUserClaims(user.uid, {
//       admin: true
//     });
//   }).then(() => {
//     return {
//       message: `Success! ${data.email} has given Role`
//     }
//   }).catch((err) => {
//     return err;
//   });
// });
