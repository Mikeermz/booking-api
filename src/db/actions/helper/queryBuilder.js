exports.findWithPaginate = async (
	MODEL,
	{ size = 999999, page = 1 },
	name = 'data',
) => {
	try {
		const result = await MODEL.findAndCountAll({
			limit: size,
			offset: (page - 1) * size,
		});

		if (result.rows.length === 0) return { message: 'no data found' };

		return {
			[name]: result.rows,
			count: result.count,
			totalPages: Math.ceil(result.count / Number.parseInt(size, 10)),
		};
	} catch (error) {
		throw new Error('error');
	}
};
