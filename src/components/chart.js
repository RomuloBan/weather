import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = (items) => {
	return _.round(_.sum(items)/items.length);
}

export default (props) => (
	<div>
		<Sparklines height={120} width={180} data={props.data}>
			<SparklinesLine color={props.color} />
			<SparklinesReferenceLine type="avg" />
		</Sparklines>
		<div>{average(props.data)} {props.units}</div>
	</div>
);

