import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import colors from '../../themes/color'
export default class QuestionDetail extends Component {
    render() {
        return (
            <View>
                <View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    questionContainer : {
        borderColor: colors.primary,
    },
    horizontalLayout : {
        flexDirection: 'row',
    }
});
