import _ from 'lodash';
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button, Alert
} from 'react-native';
import {
  ExpandableCalendar,
  Timeline,
  CalendarProvider
} from 'react-native-calendars';
import moment from 'moment';
import colors from '../../themes/color';


const alert = ({title, summary, start, end}) =>
Alert.alert(
  title,
  `Start time : ${moment(start).format("MMM Do YYYY, h:mm:ss a")} \nEnd time : ${moment(end).format("MMM Do YYYY, h:mm:ss a")} \n${summary} minutes \n `,
  [
    // {
    //   text: "Cancel",
    //   onPress: () => console.log("Cancel Pressed"),
    //   style: "cancel"
    // },
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ],
  { cancelable: false }
);

export default class Schedule extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentDate: moment().format("YYYY-MM-DD"),
    };
    this.timeLine = null;

    this.setTimeLineRef = (element) => {
      this.timeLine = element;
    };
  }
  
  // events = [];
  componentDidMount(){
    console.log(this.state.currentDate);
    const startTime = moment(`${this.state.currentDate} 00:00:00`).format();
    const endTime = moment(`${this.state.currentDate} 23:59:59`).format();
    console.log("currentDate in moment in constructor",startTime, endTime);
    this.props.onFetchPersonalSchedule({id : this.props.userID, token : this.props.token, roles : this.props.roles, startTime, endTime});
  }
  onDateChanged = (date) => {
    // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
    this.setState({currentDate: date});
    //console.log("Date")
    const startTime = moment(`${this.state.currentDate} 00:00:00`).format();
    const endTime = moment(`${this.state.currentDate} 23:59:59`).format();
    console.log("currentDate in moment",startTime, endTime);
    this.props.onFetchPersonalSchedule({id : this.props.userID, token : this.props.token, roles : this.props.roles, startTime, endTime});
  };

  onMonthChange = (/* month, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
  };

  renderEmptyItem() {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned</Text>
      </View>
    );
  }

  renderItem = ({item}) => {
    if (_.isEmpty(item)) {
      return this.renderEmptyItem();
    }

    return (
      <TouchableOpacity
        style={styles.item} onPress={() => {const {title, duration} = item;alert({title, duration})}}>
        <View>
          <Text style={styles.itemHourText}>{item.hour}</Text>
          <Text style={styles.itemDurationText}>{item.duration}</Text>
        </View>
        <Text style={styles.itemTitleText}>{item.title}</Text>
        <View style={styles.itemButtonContainer}>
          <Button title={'Info'}/>
        </View>
      </TouchableOpacity>
    );
  };

  getTheme = () => {
    const themeColor = '#0059ff';
    const lightThemeColor = '#e6efff';
    const disabledColor = '#a6acb1';
    const black = '#20303c';
    const white = '#ffffff';

    return {
      // arrows
      arrowColor: black,
      arrowStyle: {padding: 0},
      // month
      monthTextColor: black,
      textMonthFontSize: 16,
      textMonthFontFamily: 'HelveticaNeue',
      textMonthFontWeight: 'bold',
      // day names
      textSectionTitleColor: black,
      textDayHeaderFontSize: 12,
      textDayHeaderFontFamily: 'HelveticaNeue',
      textDayHeaderFontWeight: 'normal',
      // today
      todayBackgroundColor: lightThemeColor,
      todayTextColor: themeColor,
      // dates
      dayTextColor: themeColor,
      textDayFontSize: 18,
      textDayFontFamily: 'HelveticaNeue',
      textDayFontWeight: '500',
      textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
      // selected date
      selectedDayBackgroundColor: themeColor,
      selectedDayTextColor: white,
      // disabled date
      textDisabledColor: disabledColor,
      // dot (marked date)
      dotColor: themeColor,
      selectedDotColor: white,
      disabledDotColor: disabledColor,
      dotStyle: {marginTop: -2}
    };
  };

  render() {
     console.log("schedule", this.events);
    // console.log("props in schedule", this.props);
    return (
      <CalendarProvider
      // date={ITEMS[0].title}
        date={this.state.currentDate}
        onDateChanged={this.onDateChanged}
        onMonthChange={this.onMonthChange}
        theme={{todayButtonTextColor: '#0059ff'}}
        showTodayButton
        disabledOpacity={0.6}
        // todayBottomMargin={16}
      >
        <ExpandableCalendar
          // horizontal={false}
          // hideArrows
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          firstDay={1}
          // markedDates={this.getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
          // markedDates={() => {}} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
          theme={this.getTheme()}
          //leftArrowImageSource={require('../img/previous.png')}
          //rightArrowImageSource={require('../img/next.png')}
          // calendarStyle={styles.calendar}
          // headerStyle={styles.calendar} // for horizontal only
          // disableWeekScroll
        />
        <Timeline
          format24h={true}
          eventTapped={e => alert(e)
          }
          events={this.props.schedule.filter(event => moment(event.start).isSame(this.state.currentDate, 'day'))}
          // scrollToFirst={true}
          // start={0}
          // end={24}
          ref={this.setTimeLineRef}
        />
        {
          console.log("calendar", this.timeLine)
          
        }
      </CalendarProvider>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  section: {
    backgroundColor: '#f0f4f7',
    color: '#79838a'
  },
  item: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e8ecf0',
    flexDirection: 'row'
  },
  itemHourText: {
    color: 'black'
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4
  },
  itemTitleText: {
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8ecf0'
  },
  emptyItemText: {
    color: '#79838a',
    fontSize: 14
  }
});
