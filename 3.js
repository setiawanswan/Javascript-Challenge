

const csvFilePath = '<yoi.csv>'
const csv = require('csvtojson')
csv()
.fromFile('./yoi.csv')
.then((jsonObj) => {
    console.log(jsonObj);
})
// async function to(){
//     const jsonArray = await csv().fromFile(yoi.csv);
//     console.log(jsonArray)
// }
// to()

