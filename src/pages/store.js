import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';

const japan =
  'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1337,c_fill,g_auto,h_752,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121226-japan---travel-destination---shutterstock-230107657.jpg';
const barcelona =
  'https://hotellacasadelsol-y66kjun72isdzyjss4l39vf.netdna-ssl.com/wp-content/uploads/2018/01/barcelona-cultura-historia.jpg';

const style = city => ({
  backgroundImage: `URL(
    ${city}
  )`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

const SecondPage = () => (
  <Layout>
    <div className="container">
      <h1>Rewards</h1>
      <p>Welcome to Rewards</p>
      <div class="row">
        <div class="col s6">
          <div class="card">
            <div
              class="card-image waves-effect waves-block waves-light hidden-overflow reward"
              style={style(japan)}
            >
              >
              {/* <img
                class="activator"
                src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1337,c_fill,g_auto,h_752,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121226-japan---travel-destination---shutterstock-230107657.jpg"
                alt="japan"
              /> */}
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Japan
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                {/* eslint-disable-next-line */}
                <a href="#">300 coins</a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Japan
                <i class="material-icons right">close</i>
              </span>
              <p>Round-trip</p>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
        <div class="col s6">
          <div class="card">
            <div
              class="card-image waves-effect waves-block waves-light hidden-overflow reward"
              style={style(barcelona)}
            >
              {/* <img
                class="activator"
                src="https://hotellacasadelsol-y66kjun72isdzyjss4l39vf.netdna-ssl.com/wp-content/uploads/2018/01/barcelona-cultura-historia.jpg"
                alt="barcelona"
              /> */}
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Barcelona
                <i class="material-icons right">more_vert</i>
              </span>
              <p>
                {/* eslint-disable-next-line */}
                <a href="#">210 coins</a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Barcelona
                <i class="material-icons right">close</i>
              </span>
              <p>Round-trip</p>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default SecondPage;
