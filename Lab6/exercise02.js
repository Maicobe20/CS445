Array.prototype.removeDuplicatesAsync = function () {
    new Promise((resolve, reject) => {
      resolve(console.log(this.filter((a, b) => this.indexOf(a) === b)));
    });
  };
  
  async function removeDuplicatesAsync() {
    try {
      let n = await removeDuplicatesAsync();
      console.log(n);
    } catch (err) {
      console.log(err);
    }
  }
  console.log("start");
  [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
  console.log("end");






