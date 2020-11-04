import React, {useState, Component} from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Button,
  Platform
} from "react-native";
import MultiSelect from "react-native-multiple-select";
//import DateTimePicker from "@react-native-community/datetimepicker";

import {Field, reduxForm} from "redux-form";
import colors from "../../themes/color";

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

const ClassInput = ({
  label,
  meta: {touched, error, warning},
  input: {onChange, ...input},
  ...rest
}) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.textInput}
      onChangeText={onChange}
      {...input}
      {...rest}
      returnKeyType="next"
      autoCorrect={false}></TextInput>
  </View>
);

const ClassFormScreen = (props) => {
  const [selectedItems, onSelectedItemsChange] = useState([]);
  const [multiSelect, setMultiSelectRef] = useState(null);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
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
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Field
            name={"classname"}
            props={{
              multiline: true,
              numberOfLines: 2,
            }}
            label={"Classname"}
            component={ClassInput}
          />
          <Field
            name={"description"}
            label={"Description"}
            component={ClassInput}
          />
          {/* <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={setMultiSelectRef}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
        <View>
          {multiSelect.getSelectedItemsExt(selectedItems)}
        </View> */}
          {/* <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
          <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )} */}
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

// class ClassFormScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedItems: [],
//       date : new Date(),
//     };
//     this.multiSelect = null;

//     this.setMultiSelectRef = (element) => {
//       this.multiSelect = element;
//     };

//   }

//   onSetDate = (date) => {
//       this.setState({date});
//   }
//   onSelectedItemsChange = (selectedItems) => {
//     this.setState({selectedItems});
//   };

//   render() {
//     const {selectedItems} = this.state;

//     return (
//       <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <>
//             <Field
//               name={"classname"}
//               props={{
//                 multiline: true,
//                 numberOfLines: 2,
//               }}
//               label={"Classname"}
//               component={ClassInput}
//             />
//             <Field
//               name={"description"}
//               label={"Description"}
//               component={ClassInput}
//             />
//             <MultiSelect
//               hideTags
//               items={items}
//               uniqueKey="id"
//               ref={this.setMultiSelectRef}
//               onSelectedItemsChange={this.onSelectedItemsChange}
//               selectedItems={selectedItems}
//               selectText="Pick Items"
//               searchInputPlaceholderText="Search Items..."
//               onChangeInput={(text) => console.log(text)}
//               altFontFamily="ProximaNova-Light"
//               tagRemoveIconColor="#CCC"
//               tagBorderColor="#CCC"
//               tagTextColor="#CCC"
//               selectedItemTextColor="#CCC"
//               selectedItemIconColor="#CCC"
//               itemTextColor="#000"
//               displayKey="name"
//               searchInputStyle={{color: "#CCC"}}
//               submitButtonColor="#CCC"
//               submitButtonText="Submit"
//             />
//             {/* <View>
//           {this.multiSelect.getSelectedItemsExt(selectedItems)}
//         </View> */}

//             {/* <DatePicker date={this.state.date} onDateChange={this.onSetDate} mode="datetime" /> */}
//           </>
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     );
//   }
// }

export const ClassForm = reduxForm({
  form: "class",
})(ClassFormScreen);

const styles = StyleSheet.create({
  label: {},
  textInput: {},
});
