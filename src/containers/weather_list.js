import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';


class WeatherList extends Component {

  renderWeather(cityData){

    const name =  cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    //console.log(name);
      return(

          <tr key= { name }>
            <td> { name } </td>
             <td>
               <Sparklines width = {150} height = {180} data={temps}>
                <SparklinesLine color = "red" />
               </Sparklines>

            </td>
             <td>
               <Sparklines width = {150} height = {180} data={pressure}>
                <SparklinesLine color = "green" />
               </Sparklines>
               
            </td>
             <td>
               <Sparklines width = {150} height = {180} data={humidity}>
                <SparklinesLine color = "blue" />
               </Sparklines>
               
            </td>
          </tr>

      );
    }

    render() {
        return (
          <table className = "table table-hover">
              <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
              </tr>

              {this.props.weather.map(this.renderWeather)}
          </table>
        );
      }
    }

function mapStateToProps({weather}){
  return {weather};
}

export default connect (mapStateToProps)(WeatherList);
