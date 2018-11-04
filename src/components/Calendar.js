import React from 'react';
import CalendarHeatMap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import '../css/heatmap.css';
import { getAllUserCommitsForContributionCalendar_gitlab } from '../services/gitlabContributions';
import { getAllUserCommitsForContributionCalendar_github } from '../services/githubContributions';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      allData: [],
    };
  }

  componentDidMount() {
    this.fetchAll();
  }

  async fetchAll() {
    const gitlabData = await getAllUserCommitsForContributionCalendar_gitlab(
      this.props.gitlabUsername
    );

    console.log('gitlabData', gitlabData);
    const githubData = await getAllUserCommitsForContributionCalendar_github(
      this.props.githubUsername
    );
    console.log('githubData', githubData);

    if (gitlabData && githubData) {
      this.setState({ allData: gitlabData.concat(githubData) });
    }
  }

  render() {
    console.log('Calendar state', this.state);
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
}

export default Calendar;
