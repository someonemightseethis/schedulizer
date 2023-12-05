const mongoose = require('mongoose');
async function DbConnect(url){
    return await mongoose.connect(url)
    // Check database connected or not
.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})
    
}


module.exports = DbConnect;