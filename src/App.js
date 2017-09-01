import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import { FlexibleWidthXYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, DiscreteColorLegend } from 'react-vis';

class App extends Component {
  render() {
    const current_data = [
      {x: 'Aug 1, 2017', y: 7},
      {x: 'Aug 2, 2017', y: 7},
      {x: 'Aug 3, 2017', y: 6},
      {x: 'Aug 4, 2017', y: 6},
      {x: 'Aug 5, 2017', y: 5},
      {x: 'Aug 6, 2017', y: 5},
      {x: 'Aug 7, 2017', y: 4},
      {x: 'Aug 8, 2017', y: 5},
      {x: 'Aug 9, 2017', y: 4},
      {x: 'Aug 10, 2017', y: 3}
    ];

    const goal_data = [
      {x: 'Aug 1, 2017', y: 3},
      {x: 'Aug 2, 2017', y: 3},
      {x: 'Aug 3, 2017', y: 3},
      {x: 'Aug 4, 2017', y: 3},
      {x: 'Aug 5, 2017', y: 3},
      {x: 'Aug 6, 2017', y: 3},
      {x: 'Aug 7, 2017', y: 3},
      {x: 'Aug 8, 2017', y: 3},
      {x: 'Aug 9, 2017', y: 3},
      {x: 'Aug 10, 2017', y: 3}
    ]

    const discharge_data = [
      {x: 'Aug 1, 2017', y: 0},
      {x: 'Aug 2, 2017', y: 0},
      {x: 'Aug 3, 2017', y: 0},
      {x: 'Aug 4, 2017', y: 0},
      {x: 'Aug 5, 2017', y: 0},
      {x: 'Aug 6, 2017', y: 0},
      {x: 'Aug 7, 2017', y: 0},
      {x: 'Aug 8, 2017', y: 0},
      {x: 'Aug 9, 2017', y: 0},
      {x: 'Aug 10, 2017', y: 3}
    ]

    const legend_items = [
      {title: 'current', color: 'cyan'},
      {title: 'goal', color: 'blue'},
      {title: 'discharge', color: 'purple'}

    ];

    return (
      <div className="App">
        <FlexibleWidthXYPlot xType={'ordinal'} height={300}>
          <DiscreteColorLegend items={legend_items} orientation="horizontal" />
          <VerticalGridLines />
          <HorizontalGridLines />
          <VerticalBarSeries color='cyan' data={current_data} />
          <VerticalBarSeries color='blue' data={goal_data} />
          <VerticalBarSeries color='purple' data={discharge_data} />
          <XAxis title="Visit" tickTotal={10}/>
          <YAxis title="Ability Level"/>
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export default App;
