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
  TouchableOpacity
} from "react-native";
import MultiSelect from "react-native-multiple-select";
import DateTimePicker from "@react-native-community/datetimepicker";
//import DatePicker from "react-native-datepicker";
import Button from "react-native-button";
import {Field, reduxForm} from "redux-form";
import colors from "../../themes/color";
import moment from "moment";

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
    <>
      <View style={styles.dateTimePicker}>
        <Button style={styles.button} onPress={showDatepicker}>
          Pick date
        </Button>
        <Button style={styles.button} onPress={showTimepicker}>
          Pick time
        </Button>
      </View>
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
    </>
  );
};


//Validation
const required = (value) => {
  //console.log("validate username", value);
  return value ? undefined : "The field is required";
};

const dateTimeCompare = (start, end) => {
  return (start, end) => start <= end ? undefined : "Endtime must be greater than Starttime"
}

//  

const ClassInput = (
  props,
) => {
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
    <KeyboardAvoidingView
      behavior="padding"
      style={{flex: 1, paddingHorizontal: 10}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
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
          <View style={{marginVertical: 5}}>
            {multiSelect
              ? multiSelect.getSelectedItemsExt(selectedItems)
              : null}
          </View>
          <MultiSelect
            style={{marginVertical: 5}}
            hideTags
            items={items}
            uniqueKey="id"
            ref={setMultiSelectRef}
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="    Pick Topics"
            searchInputPlaceholderText="Search Topics..."
            onChangeInput={(text) => console.log(text)}
            altFontFamily="Roboto"
            tagRemoveIconColor="#667"
            tagBorderColor="#667"
            tagTextColor="#667"
            selectedItemTextColor="#667"
            selectedItemIconColor="#667"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: "#667"}}
            submitButtonColor={colors.primary}
            submitButtonText="Select"
            styleDropdownMenu={styles.topic}
            styleSelectorContainer={styles.topic}
            styleListContainer={styles.topic}
          />

          <Field
            name={"startTime"}
            props={{
              editable: false,
              
            }}
            label={"Start Time"}
            component={ClassInput}
            onChange={setDateStart}
            value = {dateStart}
            val={moment(dateStart).format("MMMM Do YYYY, h:mm:ss a")}
          />

          <MyDateTimePicker setDateTime={setDateStart} />

          <Field
            name={"endTime"}
            props={{
              editable: false,
            }}
            label={"End Time"}
            component={ClassInput}
            onChange={setDateEnd}
            value = {dateEnd}
            val={moment(dateEnd).format("MMMM Do YYYY, h:mm:ss a")}
            validate={dateTimeCompare(dateStart, dateEnd)}
          />

          <MyDateTimePicker setDateTime={setDateEnd} />

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
              {fontSize: 18, paddingVertical: 10, marginVertical: 5},
            ]}
            >
            Create
          </Button>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  },
  labelContainer: {
    flexDirection: "row",
    paddingVertical: 5,
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
});
