import { createPool } from 'mysql'

export default createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'hidenseek',
  timezone: '+3:00'
})
