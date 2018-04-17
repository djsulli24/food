import axios from 'axios';
import { Location , Permissions } from 'expo';
//import config from '../config';

const api = axios.create({
	baseURL: 'https://api.yelp.com/v3',
	headers: {
		Authorization: 'Bearer '
	}
});

class YelpService {
	getFoods(location) {
		return api
			.get('/businesses/search', {
				params: {
					latitude: location.latitude,
					longitude: location.longitude,
					limit: 5,
					radius: 1000,
					categories: 'recreation'
				}
			})
			.then(res =>
				res.data.businesses.map(business => ({
					id: business.id,
					name: business.name,
					image_url: business.image_url,
					categories: business.categories,
					phone: business.phone,
					price: business.price,
					rating: business.rating,
					coordinates: business.coordinates
				}))
			)
			.catch(error => console.error(error));
	}
}

export default new YelpService();
