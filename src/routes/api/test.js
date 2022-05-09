import db from '$lib/comp/db';

export async function get() {
	let { rows } = await db.query('SELECT * FROM product');

	console.log(rows);

	return { body: { rows } };
}
