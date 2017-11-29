const mongoose = require('mongoose')
const model = {
    user: {
        'name': {
            'type': String,
            'require': true
        },
        'pwd': {
            'type': String,
            'require': true
        }
    }

}


for (let item in model) {
    mongoose.model(item, new mongoose.Schema(model[item]))
}
module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}