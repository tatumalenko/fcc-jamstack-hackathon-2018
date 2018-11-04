import React from 'react'

class CommitHistory extends React.Component {
  render() {
    return (
      <div class="section">
        <h3>My Commit History</h3>
        <table class="striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Number of commits on Github</th>
              <th>Number of commits on Gitlab</th>
              <th>Total number of commits</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>September 1</td>
              <td>3</td>
              <td>3</td>
              <td>9</td>
            </tr>
            <tr>
              <td>September 2</td>
              <td>1</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>September 3</td>
              <td>5</td>
              <td>0</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CommitHistory
