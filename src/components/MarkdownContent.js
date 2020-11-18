import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Markdown from 'react-native-markdown-renderer';

export default class MarkdownContent extends Component {
    render() {
        return (
            <Markdown>
                {this.props.content}
            </Markdown>
        )
    }
}
