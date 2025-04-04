// utils.js
function uploadPhoto() {
  return new Promise((resolve, reject) => {
    const response = { status: 200, body: 'photo-profile-1' };
    resolve(response); // Simulating success
  });
}

function createUser() {
  return new Promise((resolve, reject) => {
    const user = { firstName: 'Guillaume', lastName: 'Salva' };
    resolve(user); // Simulating success
  });
}

module.exports = { uploadPhoto, createUser };
