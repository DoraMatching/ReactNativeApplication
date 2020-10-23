import React, { Component } from 'react';
import { Text, View } from 'react-native';


import TestSvg from '../../images/home-outline.svg';

export default class BlogDetail extends Component {
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1,}}>
                <Text> BlogDetail </Text>
                <TestSvg  width="200" height="200" stroke={"blueviolet"} />
            </View>
        )
    }
}
