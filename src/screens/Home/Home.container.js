import { connect } from "react-redux";
import  Home  from "./Home.screens";
import actions from "./Home.actions";

shuffleData = (data) => {
    let results = [];

    Object.keys(data).forEach(resource => {
      const currentData = data[resource]; // array
      currentData.forEach((prop) => {
        const _data = { ...prop, type: resource };
        results.push(_data);
      })
    })

    return results.sort(() => Math.random() - 0.5);
  };

const mapStateToProps = (state) => {
    return {
        // blogs : state.BlogReducer ,
        // blogItems : !state.BlogItemReducer ? [] : state.BlogItemReducer,
        // questions: state.QuestionReducer,
        // questionItems : !state.QuestionItemReducer ? [] : state.QuestionItemReducer,
        data : state.HomeReducer,
        dataItem : !state.HomeItemReducer ? [] : state.HomeItemReducer,
    }
   
};
const mapDispatchToProps = (dispatch) => {
    return {
        // onFetchBlogs : (params) => {
        //     // console.log("in onFetchBlogs");
        //     dispatch(actions.getBlogsAction(params))
        // },
        // onFetchQuestions : (params) => {
        //     dispatch(actions.getQuestionsAction(params))
        // },
        onFetchBlogsQuestions : (params) => {
            dispatch(actions.getBlogsQuestionsAction(params))
        }
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);

export default HomeContainer;