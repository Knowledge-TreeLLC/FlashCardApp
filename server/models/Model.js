const {Pool} = require('pg');
const myURI = 'postgres://bbrewdgm:gkQRwobY0h57jt4p3i4Kwv5k8HDSgaRd@kashin.db.elephantsql.com/bbrewdgm';

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: URI
});

module.exports = {
  query: (text, params, callback) =>{
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};