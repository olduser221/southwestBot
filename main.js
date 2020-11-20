const Southwest = require('./src/southwest');
const southwest = new Southwest(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);

console.log(southwest);

(async () => {
    await southwest.wait();
})();