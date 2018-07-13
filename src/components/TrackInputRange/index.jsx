import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import { formatSeconds } from '../../helpers/tracks';

import './index.scss';
import styled from 'styled-components';

const RangeWrapper = styled.div`
  .input-range__track--active,
  .input-range__slider {
    background: #f50057;
    border-color: #f50057;
  }
  .input-range__label--min,
  .input-range__label--value {
    display: none;
  }
  .input-range__label--max {
    color: #000;
  }
  .input-range__label--value {
    color: #000;
  }
  .currentTime {
    font-family: 'Helvetica Neue', san-serif;
    font-size: 0.8rem;
    display: block;
    margin-top: 5px;
    color: #000;
  }
`;

class TrackInputRange extends Component {

  changeCurrentTime(currentTime) {
    const { changeCurrentTime, onTimeUpdate } = this.props;

    onTimeUpdate(currentTime);
    changeCurrentTime(currentTime);
  }

  render() {
    const { player } = this.props;
    const { duration, currentTime } = player;

    return (
      <form className="form">
        <RangeWrapper>
          <InputRange
            slider={'red'}
            maxValue={duration > 0 ? duration : 1}
            minValue={0}
            formatLabel={currentTime => formatSeconds(currentTime)}
            value={currentTime}
            onChange={currentTime => this.changeCurrentTime(currentTime)}
            step={1}
          />
          <span className="currentTime">{formatSeconds(currentTime)}</span>
        </RangeWrapper>
      </form>
    );
  }
}

export default TrackInputRange;