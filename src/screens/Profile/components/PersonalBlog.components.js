import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import BlogItem from '../../../components/ListItemBlogTop'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class PersonalBlog extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        console.log("myblog: ", this.props.blogs);
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalBlog)
