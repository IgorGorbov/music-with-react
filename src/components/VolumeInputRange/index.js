import React from 'react';

import styled from 'styled-components';
import InputRange from 'react-input-range';

import {formatVolume} from "../../utils/index";

import './index.scss'


const RangeWrapper = styled.div`
  .input-range__label--min, .input-range__label--max {
    display: none;
  };
    .input-range__track--active,
    .input-range__slider {
        background: #000;
        border-color: #000;
    };
`;

class VolumeInputRange extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
        };
    }

    onVolumeChange(volume) {
        const { onVolumeChange, changeVolume } = this.props;
        const muted = false;
        onVolumeChange(muted, volume);
        changeVolume(volume);
    }

    render() {
        const { player } = this.props;
        const { volume } = player;
        return (
            <form className="form">
                <RangeWrapper>
                <InputRange
                    slider={'red'}
                    maxValue={1}
                    minValue={0}
                    value={volume}
                    onChange={volume => this.onVolumeChange(volume)}
                    formatLabel={volume => formatVolume(volume)}
                    step={0.01}
                />
                </RangeWrapper>
            </form>
        );
    }
}

export default VolumeInputRange;