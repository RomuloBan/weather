import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const pressures = cityData.list.map(weather => weather.main.pressure);

		return (<tr key={cityData.city.id}>
					<td>{cityData.city.name}</td>
					<td>{cityData.list[0].main.temp}</td>
					<td>{cityData.list[0].main.pressure}</td>
					<td>{cityData.list[0].main.humidity}</td>			
				</tr>);

	}
}


function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);