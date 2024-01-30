import { createPool } from "mysql2"

/*Create a MySQL Pool*/
const pool = createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '45752350',
  database: 'sisgea',
  waitForConnections: true,
  connectionLimit: 0,
  queueLimit: 0
})

const promisePool = pool.promise()

export default promisePool