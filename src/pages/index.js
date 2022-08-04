import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import ecommerceImage from '../assets/projects_screenshot/ecommerce-project.png';
import parcelNerdImage from '../assets/projects_screenshot/parcel-nerd-application.png'
import coinHawkerImage from '../assets/projects_screenshot/coin-hawker.jpg'

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About Me</h2>
            <p className="text-white-50">
              Hello there! I go by Alex and I'm passionate about building things for the web!
              I'm currently studying Busines Information Technology at Haaga-Helia Univeristy, majoring in Software Engineering. In addition, I am also training in a
              5 months intensive full-stack program at Integrify, where I've got a chance to enhance and test my skillsets in various modules and projects.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">My techstack</h2>
            <div className="tech-section bg-black">
              <ul className='tech-list'>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>TypeScript</li>
              </ul>
              <ul className='tech-list'>
                <li>React</li>
                <li>ReactNative</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
              </ul>
              <ul className='tech-list'>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Java</li>
                <li>Springboot</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <a href='https://funshopping.netlify.app'><img className="img-fluid mb-3 mb-lg-0" src={ecommerceImage} alt="" /></a>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Funshopping: A E-commerce Application</h4>
              <p className="mb-0 text-white-50">
                Funshopping is a frontend project built with React, TypeScript, Redux.
                The application is a 'replicate' of a E-commerce website (implementing Platzi Fake Store API)
                where users could browse for products and add them to the shopping cart. The application also allows admin users to perform tasks like: Delete or update products, view lists of active users.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <a href="https://github.com/alexh0810/parcel-nerd"><img className="img-fluid" src={parcelNerdImage} alt="" /></a>
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Parcel Nerd: A Fullstack Parcel Tracking Application</h4>
                  <p className="mb-0 text-white-50">
                    A fullstack parcel tracking application built with Java, Springboot (backend), Thymeleaf (frontend). This is one of the very first fullstack projects that I've done during my studies in Haaga-Helia.
                    This application is a parcel tracking management system, it features basic CRUD functions and a CSV export function. The app also has authentication which seperates users into different views based on their credential's role.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <a href="https://github.com/alexh0810/coinhawker"><img className="img-fluid" src={coinHawkerImage} alt="" /></a>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">CoinHawker: Cryptocurrency tracking mobile application</h4>
                  <p className="mb-0 text-white-50">
                    CoinHawker is a cryptocurrency tracking application built with React Native,
                    compatible with both IOS and Android. The app allows users to watch the trends of their favorite cryptocurrencies hourly, daily, monthly, add them to their watchlist as well as
                    create their own portfolio to buy/sell cryptos. The app uses localstorage, so as long as the user doesn't delete the application, the data stored in the app is available.

                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
