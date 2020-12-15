import AsyncStorage from "@react-native-community/async-storage";

function* storeData(value) {
  try {
    yield AsyncStorage.setItem("USER_TOKEN", value);
  } catch (e) {
    // saving error
  }
}

function* getData() {
  try {
    const value = yield AsyncStorage.getItem("USER_TOKEN");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
}

function* removeData(catchCallBack) {
  try {
    const value = yield AsyncStorage.removeItem("USER_TOKEN",catchCallBack);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
}

export const storage = {
  storeData,
  getData,
  removeData
};
