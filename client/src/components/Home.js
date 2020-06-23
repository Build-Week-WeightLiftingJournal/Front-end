import React from 'react';
import { Link } from 'react-router-dom';
import { MdCopyright } from 'react-icons/md';

import NavBar from './NavBar.js';

import './Styles/Home.css';

// images
import mockup from '../images/mockup.png';
import edit from '../images/edit.png';
import calendar from '../images/calendar.png';
import graph from '../images/graph.png';
import floating from '../images/floating.png';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='header'>
        <img src={mockup} alt='iphone mockup of this app' />
        <div className='header-right'>
          <h3>Finally an app that tracks your lifts fast.</h3>
          <p>
            Focus on your workout with with WeightLifting Journal. Surpass your
            limits with minimal distraction and clutter.
          </p>
          <Link to='/signup'>
            <button>Signup</button>
          </Link>
        </div>
      </div>
      <div className='middle'>
        <div className='section'>
          <img src={edit} alt='edit icon' />
          <div className='text'>
            <h4>Create your own exercises</h4>
            <p>
              Weightlifting Journal gives you total control and customization
              over your routines.
            </p>
          </div>
        </div>
        <div className='section'>
          <img src={calendar} alt='calendar icon' />
          <div className='text'>
            <h4>Track your Progress</h4>
            <p>
              We give you the ability to track your exercises, and it's totally
              up to you. Lift by lift, or set by set.
            </p>
          </div>
        </div>
        <div className='section'>
          <img src={graph} alt='graph icon' />
          <div className='text'>
            <h4>Analyze your Consistency</h4>
            <p>
              View your workout patterns and analyze how to keep improving your
              workouts!
            </p>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='bottom-left'>
          <h2>No distractions. Just focus.</h2>
          <p>
            Weightlifting Journal offers one of the fastest ways to create, log
            and track your workouts. Designed from the ground up to be a
            distraction-free experience, the minimalist interface helps you
            focus on your workout.
          </p>
          <Link to='/signup'>
            <button>Try for Free</button>
          </Link>
        </div>
        <img src={floating} alt='floating screenshot of app' />
      </div>
      <div className='footer'>
        <MdCopyright />
        <h3>Copyright 2020</h3>
      </div>
    </div>
  );
};

export default Home;
