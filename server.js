const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HRMS', (err) => {
    if (!err)
        console.log('mongodb connected');
    else
        console.log('Error in mongo connection:' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;