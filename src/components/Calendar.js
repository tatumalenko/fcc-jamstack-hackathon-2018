import React from 'react';
import CalendarHeatMap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import '../css/heatmap.css';
import { getAllUserCommitsForContributionCalendar } from '../services/gitlabContributions';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      allData: [],
    };
  }

  componentDidMount() {}

  async fetchAll() {
    const gitlabData = await getAllUserCommitsForContributionCalendar(
      this.props.gitlabUsername
    );
    const githubData = [];

    if (gitlabData && githubData) {
      this.setState({ allData: gitlabData.concat(githubData) });
    }
  }

  render() {
    if (this.state.gitlabData) {
      return (
        <CalendarHeatMap
          startDate={new Date('2018-01-01')}
          endDate={new Date('2018-12-31')}
          values={this.state.allData}
          classForValue={value => {
            if (!value) {
              return 'color-empty';
            }
            return `color-scale-${value.count}`;
          }}
        />
      );
    }
    return <div />;
  }
}

export default Calendar;
