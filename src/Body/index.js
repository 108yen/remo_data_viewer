import React from 'react';
import LineBasic from '../ApexChart/LineBasic'
import { Inline } from '../styled/body'

class Body extends React.Component {
    render() {
        return (
            <Inline>
                <LineBasic />
                <LineBasic />
                <LineBasic />
                <LineBasic />
                <LineBasic />
                <LineBasic />
            </Inline>
        )
    }
}

export default Body;