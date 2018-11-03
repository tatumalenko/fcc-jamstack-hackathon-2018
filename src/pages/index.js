import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import CommitHistory from '../components/CommitHistory'
//import Image from '../components/image'

function Clear(){
    if(this.value === '') {
  document.getElementById('githubusername').value = '';
  document.getElementById('gitlab-username').value = '';
  
    }
  }

function handleChange(event) {
  console.log(event.currentTarget.value)
  if(event.currentTarget.value === '') {
    console.log('cleared!!');
    var name = document.getElementById('githubusername').value;
    console.log(name);
    document.getElementById('githubusername').value = '';
    document.getElementById('gitlab-username').value = '';
  }
  
}


const IndexPage = () => (

  <Layout>
    <div class="container">
      <div class="section">
        <h3 class="red-text">Enter your Git Accounts</h3>
        <form>
          Username:
          <input type="text" name="username" onChange={handleChange}/>
          <br />
          Github Username:
          <input id='githubusername' /> 
          {/* type="text" name="github-username" /> */}
          <br />
          Gitlab Username:
          <input id='gitlab-username' /> 
          {/* <input type="text" name="gitlab-username" /> */}
          <br />
          <button class="btn waves-effect waves-light" type="submit" >

            Submit
          </button>
          {/* <button class="btn waves-effect waves-light" type="forgot password" onsubmit={}> */}
          
          {/* Forgot Password? */}
          {/* </button> */}
        </form>
      </div>

      <CommitHistory />
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
