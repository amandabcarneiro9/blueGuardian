function calculateDiscount(price, discount) {
	if (price <= 0 || discount <= 0) {
		return 'Invalid input';
	}
	return price - price * discount;
}
