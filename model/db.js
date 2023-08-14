const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_MONGODB_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'nodeauth'
}).then(()=> {
    console.log('Koneksi ke database berhasil...');
}).catch((err)=> {
    console.log(err);
})