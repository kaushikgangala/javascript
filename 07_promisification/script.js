// regular callback
const addScriptToDOM = (src, callback) => {
  const newScriptTag = document.createElement("script");
  newScriptTag.src = src;

  newScriptTag.onload = () => callback(null, newScriptTag);
  newScriptTag.onerror = (error) => callback(error);

  document.head.appendChild(newScriptTag);
};

const myCallback = (error, script) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("script loaded", script);
};

// addScriptToDOM("test.js", myCallback);

// promisification
const promisify = (fn) => {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result);
      });
    });
  };
};

const scriptAdder = promisify(addScriptToDOM);

scriptAdder("test.js");
