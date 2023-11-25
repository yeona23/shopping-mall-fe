export const calculOrigingTotalPrice = (quantityArray, priceArray) => {
	if (quantityArray.length !== 0 && priceArray.length !== 0) {
		// Create a map to store prices based on id
		const priceMap = new Map();

		// Populate the map with prices from priceArray
		priceArray.forEach((item) => {
			priceMap.set(item.productId, item.originPrice);
		});

		// Multiply quantity with price for matching ids in array1
		const resultArray = quantityArray.map((item) => {
			const price = priceMap.get(item.productId);
			if (price !== undefined) {
				return { productId: item.productId, result: item.quantity * price };
			}
			return null; // or handle the case where there is no matching id
		});

		resultArray.filter((item) => item !== null);
		return resultArray
			.map((item) => item.result)
			.reduce((sum, add) => sum + add);
	}
	return;
};
