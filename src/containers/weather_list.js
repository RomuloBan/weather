import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>

				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>

			</table>
		);
	}

	renderWeather(cityData) {
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		return (<tr key={cityData.city.id}>
					<td>{cityData.city.name}</td>
					<td>
						<Chart data={temps} color='orange' units='K' />
					</td>
					<td>
						<Chart data={pressures} color='blue' units='hPa' />
					</td>
					<td>
						<Chart data={humidities} color='green' units='%' />
					</td>			
				</tr>);

	}
}


function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);