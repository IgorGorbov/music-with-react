import React from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';

import { formatSeconds } from '../../helpers/tracks';

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

const TrackInputRange = props => {
    const changeCurrentTime = currentTime => {
        const { changeCurrentTime, onTimeUpdate } = props;

        onTimeUpdate(currentTime);
        changeCurrentTime(currentTime);
    };

    const { player } = props;
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
                    onChange={currentTime => changeCurrentTime(currentTime)}
                    step={1}
                />
                <span className="currentTime">{formatSeconds(currentTime)}</span>
            </RangeWrapper>
        </form>
    );
};

export default TrackInputRange;
