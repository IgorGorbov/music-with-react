import React from 'react';

import styled from 'styled-components';
import InputRange from 'react-input-range';

import { formatVolume } from '../../helpers/tracks';

const RangeWrapper = styled.div`
  .input-range__label--min,
  .input-range__label--max,
  .input-range__label--value {
    display: none;
  }
  .input-range__track--active,
  .input-range__slider {
    background: #5087ed;
    border-color: #5087ed;
  }
`;

const VolumeInputRange = props => {
  const onVolumeChange = volume => {
    const { onVolumeChange, changeVolume } = props;
    const muted = false;
    onVolumeChange(muted, volume);
    changeVolume(volume);
  };

    const { player } = props;
    const { volume, muted } = player;
    return (
      <form className="form">
        <RangeWrapper>
          <InputRange
            slider={'red'}
            maxValue={1}
            minValue={0}
            value={muted ? 0 : volume}
            onChange={volume => onVolumeChange(volume)}
            formatLabel={volume => formatVolume(volume)}
            step={0.01}
          />
        </RangeWrapper>
      </form>
    );
};

export default VolumeInputRange;
