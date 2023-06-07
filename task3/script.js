function deepCopyObject(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object" || obj === null) {
      reject("Invalid argument: expected an object");
    } else {
      try {
        const copiedObj = JSON.parse(JSON.stringify(obj));
        resolve(copiedObj);
      } catch (err) {
        reject("Error occurred during deep copy");
      }
    }
  });
}

async function example() {
  try {
    const originalObj = { foo: "bar", nestedObj: { baz: "qux" } };
    const copiedObj = await deepCopyObject(originalObj);
    console.log(copiedObj);
  } catch (err) {
    console.error(err);
  }
}

example();
