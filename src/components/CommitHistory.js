import React from 'react'

class CommitHistory extends React.Component {
  render() {
    return (
      <div class="section">
        <h3>My Commit History</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Number of commits</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>September 1</td>
              <td>3</td>
            </tr>
            <tr>
              <td>September 2</td>
              <td>1</td>
            </tr>
            <tr>
              <td>September 3</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CommitHistory
