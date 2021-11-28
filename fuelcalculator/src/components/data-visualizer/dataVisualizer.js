import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './dataVisualizer.css';
import { calculateMileage, labelNames, convertDistance, convertVolume } from '../../utilities';
import LineChart from './lineChart/lineChart';

export default class DataVisualizer extends Component {
  constructor() {
    super();

    this.renderAverages = this.renderAverages.bind(this);
  }

  renderAverages() {
    const allEntries = this.props.entries;
    const normalEntries = allEntries.filter((entry) => !entry.Traffic);
    const TrafficEntries = allEntries.filter((entry) => entry.Traffic);
    const currentUnits = this.props.currentUnits;
    const labels = labelNames(currentUnits);

    const allDetails = {
      km: allEntries.reduce((total, entry) => total += parseFloat(convertDistance(entry.km, currentUnits)), 0),
      liters: allEntries.reduce((total, entry) => total += parseFloat(convertVolume(entry.liters, currentUnits)), 0),
      mpg: allEntries.reduce((total, entry) => {
        return total += parseFloat(calculateMileage(entry.liters, entry.km, currentUnits));
      }, 0) / allEntries.length
    }

    const normalDetails = {
      type: 'Normal',
      km: normalEntries.reduce((total, entry) => total += parseFloat(convertDistance(entry.km, currentUnits)), 0),
      liters: normalEntries.reduce((total, entry) => total += parseFloat(convertVolume(entry.liters, currentUnits)), 0),
      mpg: normalEntries.reduce((total, entry) => {
        return total += parseFloat(calculateMileage(entry.liters, entry.km, currentUnits));
      }, 0) / normalEntries.length
    }

    const TrafficDetails = {
      type: 'Traffic',
      km: TrafficEntries.reduce((total, entry) => total += parseFloat(convertDistance(entry.km, currentUnits)), 0),
      liters: TrafficEntries.reduce((total, entry) => total += parseFloat(convertVolume(entry.liters, currentUnits)), 0),
      mpg: TrafficEntries.reduce((total, entry) => {
        return total += parseFloat(calculateMileage(entry.liters, entry.km, currentUnits));
      }, 0) / TrafficEntries.length
    }

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Total {labels.distance}</th>
              <th>Total {labels.volume}</th>
              <th>Average {labels.mileage}</th>
            </tr>
            {normalEntries.length > 0 && TrafficEntries.length > 0 && buildRow(allDetails)}
            {normalEntries.length > 0 && buildRow(normalDetails)}
            {TrafficEntries.length > 0 && buildRow(TrafficDetails)}
          </tbody>
        </table>
      </div>
    )

    function buildRow(data) {
      return (
        <tr>
          <td>{data.type ? data.type : 'Combined'}</td>
          <td>{data.km.toFixed(2)}</td>
          <td>{data.liters.toFixed(2)}</td>
          <td>{data.mpg.toFixed(2)}</td>
        </tr>
      )
    }

  }

  render() {
    const numEntries = this.props.entries.length;
    return (
      <div className="DataVisualizer">
        <h4>Totals & Average Mileage for {this.props.vehicle.name}</h4>
        {numEntries > 0
          ?
            this.renderAverages()
          :
            <div>No entries yet for this vehicle. Add one!</div>
        }
        {numEntries > 1 && <LineChart entries={this.props.entries} currentUnits={this.props.currentUnits} />}
      </div>
    )
  }

  static propTypes = {
    vehicle: PropTypes.object.isRequired,
    entries: PropTypes.array.isRequired,
    currentUnits: PropTypes.string.isRequired
  }
}
