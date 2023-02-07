// // console.log("ok");

const API = "https://jsonplaceholder.typicode.com";

// function callServer(ApiUrl, callback) {
//   let xhttp = new XMLHttpRequest();

//   xhttp.open("GET", ApiUrl, true);
//   xhttp.onreadystatechange = function (event) {
//     // if (xhttp.readyState === 0) {
//     //   console.log("evento en estado 0", xhttp.readyState);
//     // }
//     // if (xhttp.readyState === 1) {
//     //   console.log("evento en estado 1", xhttp.readyState);
//     // }
//     // if (xhttp.readyState === 2) {
//     //   console.log("evento en estado 2", xhttp.readyState);
//     // }
//     // if (xhttp.readyState === 3) {
//     //   console.log("evento en estado 3", xhttp.readyState);
//     // }

//     if (xhttp.readyState === 4) {
//       console.log("muestra en pantalla");
//       if (xhttp.status === 200) {
//         // console.log(xhttp.responseText);
//         callback(null, xhttp.responseText);
//       } else {
//         const error = new Error("algo ha salido mal");
//         return callback(error, null);
//       }
//       //   console.log("evento en estado 0", xhttp.readyState);
//     }
//   };
//   xhttp.send();
// }

// callServer(`${API}/posts`, function (err, data) {
//   if (err) {
//     return console.error(err);
//   }

//   //   console.log(data);

//   let dataInJson = JSON.parse(data);

//   //   console.log(dataInJson);

//   let post3 = dataInJson[2].id;

//   console.log(post3);

//   callServer(`${API}/comments/`, function (err, data) {
//     console.log(data);

//     if (err) {
//       return console.error(err);
//     }

//     let dataInJson2 = JSON.parse(data);
//     let postsArr = [];

//     dataInJson2.map((el) => {
//       if (el.postId === post3) {
//         postsArr.push(el);
//       }
//       console.log(postsArr);
//       //   return el.postId === post3;
//     });

// callServer(`${API}/user`, function (err, data) {});

// tendriamos que reformular para iterar sobre el monton de comments y buscar elq eu tiene postId = post3
//   });

//   console.log(data);
// });

// ----------------- PROMESAS

// Pendiente (pending) - Es el estado inicial al crear una promesa.
// Cumplido (fulfilled) - La operación se realizó con éxito, con algún resultado
// Rechazado (rejected) - La operación fue rechazada por un error.

// const isSuccess = true;

// const nameOfPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("La promesa se resolvió con exito");
//     } else {
//       reject("La promesa falló en algun momento");
//     }
//   }, 5000);
// });

// nameOfPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .then((value) => {
//     console.log("then three");
//   })
//   .then()
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("terminé");
//   });

// //   new Promise((resolve, reject)=>{
// //       ...comportamiento
// //   })

// function callServer(url) {
//   return fetch(url);
// }

// let arr = [];

// callServer(`${API}/posts`)
//   .then((response) => response.json())
//   .then((json) => {
//     // console.log(typeof json);
//     json.map((el) => {
//       if (el.userId === 4) {
//         arr.push(el);
//       }
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("terminé", arr);
//   });

// let isOk = true;
// function createPromise(content, timer) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isOk) {
//         resolve(content);
//       } else {
//         reject("algo salio mal");
//       }
//     }, timer);
//   });
// }

function createPromise(content, timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(content);
    }, timer);
  });
}

const funct1 = createPromise("Text1", 1000);
const funct2 = createPromise("Text2", 2000);
const funct3 = createPromise("Text3", 3000);
const funct4 = createPromise("Text4", 4000);
const funct5 = createPromise("Text5", 1500);

Promise.all([funct1, funct2, funct3, funct4, funct5])
  .then((value) => console.log(value))
  .catch((err) => console.log(err))
  .finally(() => console.log("termine"));

Promise.race([funct1, funct2, funct3, funct4, funct5])
  .then((value) => console.log(value))
  .catch((err) => console.log(err))
  .finally(() => console.log("termine"));

console.log("voy a llamar");
