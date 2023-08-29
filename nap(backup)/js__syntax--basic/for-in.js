/**
 * Loop over plain objects ({}).
 */

let lunch = {
  sandwich: "ham",
  snack: "chips",
  drink: "soda",
  desert: "cookie",
  guests: 3,
  alcohol: false,
};

// logs "sandwich", "ham", "snack", "chips", "drink", "soda", "desert", "cookie", "guests", 3, "alcohol", false
for (let key in lunch) {
  console.log(key); // key
  console.log(lunch[key]); // value
}
