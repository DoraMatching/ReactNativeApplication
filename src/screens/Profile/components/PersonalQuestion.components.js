import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import BlogItem from '../../../components/ListItemQuestionTop'

export class PersonalQuestion extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <View style={{ flex: 1,  }}>
            <FlatList
              style={{
                marginVertical: 5,
                //backgroundColor: "white",
              }}
              data={this.props.blogs}
              renderItem={({item, index}) => {
                return <BlogItem {...item}></BlogItem>;
              }}
              keyExtractor={(item, index) => item.name}></FlatList>

        </View>
        )
    }
}

const mapStateToProps = (state) => ({
    blogs  : state.ProfileReducer.posts,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalQuestion)
