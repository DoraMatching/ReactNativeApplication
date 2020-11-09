import React, {useState, Component} from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import MultiSelect from "react-native-multiple-select";
import DateTimePicker from "@react-native-community/datetimepicker";
//import DatePicker from "react-native-datepicker";
import Button from "react-native-button";
import {Field, reduxForm} from "redux-form";
import colors from "../../themes/color";
import moment from "moment";
import SearchableDropdown from "react-native-searchable-dropdown";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const items = [
  {
    id: "92iijs7yta",
    name: "Ondo",
  },
  {
    id: "a0s0a8ssbsd",
    name: "Ogun",
  },
  {
    id: "16hbajsabsd",
    name: "Calabar",
  },
  {
    id: "nahs75a5sg",
    name: "Lagos",
  },
  {
    id: "667atsas",
    name: "Maiduguri",
  },
  {
    id: "hsyasajs",
    name: "Anambra",
  },
  {
    id: "djsjudksjd",
    name: "Benue",
  },
  {
    id: "sdhyaysdj",
    name: "Kaduna",
  },
  {
    id: "suudydjsjd",
    name: "Abuja",
  },
];

const MyDateTimePicker = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log("currentDate", currentDate);
    console.log("date", date);
    props.setDateTime(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    
      <View style={styles.dateTimePicker}>
        <Button style={styles.button} onPress={showDatepicker}>
          Pick date
        </Button>
        <Button style={styles.button} onPress={showTimepicker}>
          Pick time
        </Button>
      
      {show && (
        <DateTimePicker
          testID="startDateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </View>
    
  );
};

//Validation
const required = (value) => {
  //console.log("validate username", value);
  return value ? undefined : "The field is required";
};

const dateTimeCompare = (start, end) => {
  return (start, end) =>
    start <= end ? undefined : "Endtime must be greater than Starttime";
};

//

const ClassInput = (props) => {
  const {
    meta: {touched, error, warning},
    input: {onChange, ...input},
    label,
    val,
    ...rest
  } = props;
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.textInputContainer}>
      {console.log("props", props)}
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={{color: "red", ...styles.errorText}}>
          {touched && error ? error : ""}
        </Text>
      </View>
      {val ? (
        <>
          <TextInput
            style={styles.textInput}
            onChangeText={onChange}
            {...input}
            value={val}
            {...rest}
            returnKeyType="next"
            autoCorrect={false}></TextInput>
        </>
      ) : (
        <>
          <TextInput
            style={styles.textInput}
            onChangeText={onChange}
            {...input}
            {...rest}
            returnKeyType="next"
            autoCorrect={false}></TextInput>
        </>
      )}
    </View>
  );
};

const ClassFormScreen = (props) => {
  console.log("props in screen", props);
  const [selectedItems, onSelectedItemsChange] = useState([]);
  const [multiSelect, setMultiSelectRef] = useState(null);
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const submit = (values) => {
    console.log("ClassFormScreen", values);
  };
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "flex-end"}}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <Pressable onPress={Keyboard.dismiss} style={styles.layout}>
          <View style={styles.layout}>
            <View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Topic</Text>
              </View>
              <SearchableDropdown
                onItemSelect={(item) => {
                  const items = selectedItems;
                  items.push(item);
                  onSelectedItemsChange(items);
                }}
                selectedItems={selectedItems}
                containerStyle={{marginVertical: 5}}
                onRemoveItem={(item, index) => {
                  const items = selectedItems.filter(
                    (sitem) => sitem.id !== item.id,
                  );
                  onSelectedItemsChange(items);
                }}
                itemStyle={{
                  padding: 10,
                  marginTop: 2,
                  backgroundColor: "#ddd",
                  borderColor: "#bbb",
                  borderWidth: 1,
                  borderRadius: 5,
                }}
                itemTextStyle={{color: "#222"}}
                itemsContainerStyle={{
                  maxHeight: 140,
                  position: "absolute",
                  width: "100%",
                  top: 45,
                  zIndex: 99,
                }}
                items={items}
                defaultIndex={2}
                resetValue={false}
                textInputProps={{
                  placeholder: "placeholder",
                  underlineColorAndroid: "transparent",
                  style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  },
                  //onTextChange: (text) => alert(text),
                }}
                listProps={{
                  nestedScrollEnabled: true,
                }}
              />
            </View>

            {/* <ScrollView> */}
            <Field
              name={"classname"}
              label={"Classname"}
              component={ClassInput}
              validate={required}
            />
            <Field
              name={"description"}
              props={{
                multiline: true,
                numberOfLines: 5,
              }}
              label={"Description"}
              component={ClassInput}
              validate={required}
            />

            <View style={{}}>
              <View
                style={{flexDirection: "row", justifyContent: "space-between"}}>
                <View style={{flex : 50}}>
                  <Field
                    name={"startTime"}
                    props={{
                      editable: false,
                    }}
                    label={"Start Time"}
                    component={ClassInput}
                    onChange={setDateStart}
                    value={dateStart}
                    val={moment(dateStart).format("MMM Do YYYY, h:mm:ss a")}
                    //style={{flex : 50}}
                  />
                </View>
                <View style={{flex : 50}}>
                  <Field
                    name={"endTime"}
                    props={{
                      editable: false,
                    }}
                    label={"End Time"}
                    component={ClassInput}
                    onChange={setDateEnd}
                    value={dateEnd}
                    val={moment(dateEnd).format("MMM Do YYYY, h:mm:ss a")}
                    //validate={dateTimeCompare(dateStart, dateEnd)}
                    //style={{flex : 50}}
                  />
                </View>
              </View>
              <View
                style={{flexDirection: "row", justifyContent: "flex-start"}}>
                <MyDateTimePicker setDateTime={setDateStart} style={{flex : 50}}/>
                <MyDateTimePicker setDateTime={setDateEnd} style={{flex: 50,}}/>
              </View>
            </View>

            <Field
              name={"duration"}
              label={"Duration"}
              component={ClassInput}
              validate={required}
            />

            <Button
              onPress={props.handleSubmit(submit)}
              style={[
                styles.button,
                {
                  fontSize: 18,
                  paddingVertical: 10,
                  marginVertical: 5,
                  //bottom: 10,
                },
              ]}>
              Create
            </Button>
            {/* </ScrollView> */}
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export const ClassForm = reduxForm({
  form: "class",
})(ClassFormScreen);

const styles = StyleSheet.create({
  textInputContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "transparent",
    marginVertical: 3,
  },
  labelContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  label: {
    //paddingVertical: 5,
  },
  errorText: {
    //textAlign: "right",
    flex: 80,
    textAlign: "right",
    // borderWidth: 1,
    // borderColor: "black",
  },
  textInput: {
    backgroundColor: "#f0f2f5",
    borderRadius: 5,
    marginVertical: 5,
    borderColor: "lightgray",
    borderWidth: 1,
    color: "black",
  },
  topic: {
    // borderColor: "black",
    // borderWidth: 1,

    backgroundColor: "#f0f2f5",
  },
  dateTimePicker: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 5,
  },
  button: {
    marginRight: 5,
    backgroundColor: colors.primary,
    color: "white",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  layout: {
    //flex: 1,
    // marginLeft: 30,
    // marginRight: 30,
    //flexDirection: "column",
    flex: 1,
    justifyContent: "space-around",
    marginHorizontal: 10,
    //marginVertical: 10,
  },
});
