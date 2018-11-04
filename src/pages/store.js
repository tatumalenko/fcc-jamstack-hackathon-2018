import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';

const tokyo =
  'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1337,c_fill,g_auto,h_752,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121226-japan---travel-destination---shutterstock-230107657.jpg';
const barcelona =
  'https://hotellacasadelsol-y66kjun72isdzyjss4l39vf.netdna-ssl.com/wp-content/uploads/2018/01/barcelona-cultura-historia.jpg';

const paris =
  'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72';

const riodejaneiro =
  'https://downloads.thompsons.co.za/tsdata/images/i/58da0ebd9ffd2095118737-lg.jpg';

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
      <p>Welcome to Rewards (Sponsored by Expedia... we wish!)</p>
      <h5>
        You have <i class="fas fa-coins" /> 300 coins
      </h5>
      <div class="row">
        <div class="col s6">
          <div class="card">
            <div
              class="card-image waves-effect waves-block waves-light hidden-overflow reward"
              style={style(tokyo)}
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
                Tokyo
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                {/* eslint-disable-next-line */}
                <a href="#">
                  <i class="fas fa-coins" />
                  300 coins
                </a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Tokyo
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
                <a href="#">
                  <i class="fas fa-coins" />
                  210 coins
                </a>
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
        <div class="col s6">
          <div class="card">
            <div
              class="card-image waves-effect waves-block waves-light hidden-overflow reward"
              style={style(paris)}
            >
              {/* <img
                class="activator"
                src="https://hotellacasadelsol-y66kjun72isdzyjss4l39vf.netdna-ssl.com/wp-content/uploads/2018/01/barcelona-cultura-historia.jpg"
                alt="barcelona"
              /> */}
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Paris
                <i class="material-icons right">more_vert</i>
              </span>
              <p>
                {/* eslint-disable-next-line */}
                <a href="#">
                  <i class="fas fa-coins" />
                  250 coins
                </a>
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
        <div class="col s6">
          <div class="card">
            <div
              class="card-image waves-effect waves-block waves-light hidden-overflow reward"
              style={style(riodejaneiro)}
            >
              {/* <img
                class="activator"
                src="https://hotellacasadelsol-y66kjun72isdzyjss4l39vf.netdna-ssl.com/wp-content/uploads/2018/01/barcelona-cultura-historia.jpg"
                alt="barcelona"
              /> */}
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Rio de Janeiro
                <i class="material-icons right">more_vert</i>
              </span>
              <p>
                {/* eslint-disable-next-line */}
                <a href="#">
                  <i class="fas fa-coins" />
                  180 coins
                </a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Rio de Janeiro
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
