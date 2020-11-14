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
      if (this.props.questions.length == 0)
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> No question </Text>
            </View>
        );
        return (
            <View style={{ flex: 1,  }}>
            <FlatList
              style={{
                marginVertical: 5,
                //backgroundColor: "white",
              }}
              data={this.props.questions}
              renderItem={({item, index}) => {
                return <BlogItem {...item}></BlogItem>;
              }}
              keyExtractor={(item, index) => item.name}></FlatList>

        </View>
        )
    }
}

const mapStateToProps = (state) => ({
    questions  : state.ProfileReducer.questions,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalQuestion)
