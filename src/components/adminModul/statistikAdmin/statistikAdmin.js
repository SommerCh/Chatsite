
import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import Sitebar from '../sitebar/sitebar';
import './statistik.style.css';
export default class  Statistik extends Component {

  constructor(props) {
    super(props);

    this.updateCharts = this.updateCharts.bind(this)

    this.state = {
      optionsMixedChart: {
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            endingShape: 'arrow'
          }
        },
        stroke: {
          width: [4, 5, 0],
        },
        xaxis: {
          categories: ['Online', 'Offline', 'Timeout', 'Banned', 'Slettet']
        },
        markers: {
          size: 6,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8
          }
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 100
        }
      },
      seriesMixedChart: [{
        name: 'Brugere',
        type: 'line',
        data: [30, 40, 25, 40, 4]
      }],
      
      optionsBar: {
        chart: {
          stacked: true,
          stackType: '100%',
          toolbar: {
            show: false    // download bar
           
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        dataLabels: {
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 0   //   overflow:hidden
        },
        xaxis: {
          categories: ['Samlede brugere'],
          labels: {
            show: false
          },
          
          axisTicks: {
            show: false   // border-buttom, går streg  
        
          }
        },
      },

    seriesBar: [{
        name: 'Online',
        data: [32]
      }, {
        name: 'Offline',
        data: [41]
      }, {
        name: 'Timeout',
        data: [12]
      }, {
        name: 'Banned',
        data: [65]
      },
      {
        name: 'Slettet',
        data: [20]
      }]
    }
  }

  updateCharts() {
    const max = 90;
    const min = 30;
    const newMixedSeries = [];
    const newBarSeries = [];

    this.state.seriesMixedChart.map((s)=>{
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      newMixedSeries.push({ data: data, type: s.type })
    })

    this.state.seriesBar.map((s)=>{
      const data = s.data.map(()=>{
        return Math.floor(Math.random() * (180 - min + 1)) + min
      })
      newBarSeries.push({ data, name: s.name })
    })


    this.setState({
      seriesMixedChart: newMixedSeries,
      seriesBar: newBarSeries
    })
  }

  render() {

    return (
      <div className="statistik">
          <Sitebar />

          <div className="seriewrap">
              <div className="div1">
                  <Chart options={this.state.optionsMixedChart} series={this.state.seriesMixedChart} type="line"
                      width="1300" height="400"/>
              </div>

              <div className="div2">
                  <Chart options={this.state.optionsBar} height={250} series={this.state.seriesBar} type="bar"
                      width={1300} />
              </div>
          </div>

          <div>
        <input className="opdatedata" type="button" onClick={this.updateCharts} value="Opdater Data"/>
        </div>
      </div>
    );
  }
}



