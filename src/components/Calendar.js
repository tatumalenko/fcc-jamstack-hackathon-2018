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
      github: [],
      gitlab: [],
    };
  }

  componentDidMount() {
    // this.fetchAll();

    getAllUserCommitsForContributionCalendar_github(this.props.githubUsername)
      .then(data => {
        this.setState({ github: data });
        return getAllUserCommitsForContributionCalendar_gitlab(
          this.props.gitlabUsername
        );
      })
      .then(data => {
        console.log('Gitlab data', data);
        this.setState({ gitlab: data }, () =>
          this.setState({
            allData: this.state.github.concat(this.state.gitlab),
          })
        );
      });
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
