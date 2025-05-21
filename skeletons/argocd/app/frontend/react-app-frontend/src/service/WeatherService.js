import axios from "axios";

const APP_URL = "https://springboot-route-${{ values.namespace }}.apps.cluster-${{ values.clusterid }}.dynamic.redhatworkshops.io/api/v1/weather";
const apiKey = '${{ values.apikey }}';
class WeatherService {

    async checkCityExists(cityName) {
        const WeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;
        try {
          const response = await axios.get(WeatherUrl);
          if (response.status === 200 && response.data) {
            return; // City exists, resolve the promise
          } else {
            throw new Error('City does not exist'); // City does not exist
          }
        } catch (error) {
          console.error('Error checking city existence:', error);
          throw new Error('City does not exist');
        }
    }

    getAllWeather() {
        return axios.get(APP_URL);
    }

    deleteWeather(id){
        return axios.delete(`${APP_URL}/${id}`);
    }

    createWeather(weather){
        return axios.post(APP_URL,weather);
    }
}

//eslint-disable-next-line
export default new WeatherService();
