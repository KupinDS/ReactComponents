import React, { Component } from 'react';
import './ClassCount.css';

class ClassCount extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    // this.onStatePlus = this.onStatePlus.bind(this)
  }

  // Чтобы менять стейт можно создать метод при помощи стрелочной функции и повесить на обработчик событий с this
  onStateMinus = () => {
    this.setState(({ count }) => {
      return {
        count: count - 1
      }
    })
  }

  // Чтобы менять стейт можно создать метод и привязать к событию при помощи вызова анонимной стрелочной функции. В таком случае нужнопоставить круглые скобочки для вызова функции
  onStatePlus() {
    this.setState(({ count }) => {
      return {
        count: count + 1
      }
    })
  }

  render() {
    const { count } = this.state;

    return (
      <div className="uk-card uk-card-default uk-card-body uk-width-1-4@m">
        <h3 className="uk-card-title">Class Counter:</h3>
        <div>{count}</div>
        <button
          className="uk-button uk-button-danger uk-margin-small-top"
          onClick={this.onStateMinus}
        >-</button>
        <button
          className="uk-button uk-button-primary uk-margin-small-top"
          onClick={() => this.onStatePlus()}
        >+</button>
      </div>
    );
  }
}

export default ClassCount;