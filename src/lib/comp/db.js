import pkg from 'pg';
const { Pool } = pkg;
const db = new Pool({
	user: 'postgres',
	port: 5432,
	host: '192.168.1.40',
	database: 'postgres',
	password: 'example'
});

export default db;
