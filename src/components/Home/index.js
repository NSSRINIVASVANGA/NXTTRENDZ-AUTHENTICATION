import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <Header />
        <div className="details-con">
          <div className="text-container">
            <div className="up">
              <h1 className="heading"> Clothes That Get YOU Noticed </h1>
              <div className="img-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                  alt="clothes that get you noticed"
                  className="clothes"
                />
              </div>
              <p className="content">
                Fashion is part of the daily airandit does not quite help that
                it changes all the time. Clothes have always been a maker of the
                era and we are in a revolution. Your fashion makes you been seen
                and heard that way you are. So, celebrate the seasons new and
                excition fashion in your own way
              </p>
              <button className="button" type="button">
                {' '}
                Shop Now{' '}
              </button>
            </div>
            <div className="img-con-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="clothes that get you noticed"
                className="clothes"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
