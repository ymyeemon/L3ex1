// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {ToastAndroid, Alert, Button, TextInput, Text, TouchableOpacity, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    );
};

const App = () => {
    const [usertype, setUsertype] = useState('');
    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');
  return (
      <View>
        <StatusBar hidden={true} />

        <Text>User Type:</Text>
        <RNPickerSelect
            onValueChange={(value) => setUsertype(value)}
            items={[
              { label: 'Admin', value: 'Admin' },
              { label: 'Guest', value: 'Guest' },
            ]}
        />
          <InputBox label="User Name: " onChangeText={(text) => setUsername(text)} />
          <InputBox label="Password: " onChangeText={(text) => setPw(text)} />


        <TouchableOpacity onPress={ () => {
            const correctPassword = '123';
            let mymessage = 'Error! Wrong Password!';
            if (pw === correctPassword) {
                mymessage = `Welcome ` + usertype + ` ` + username;
            }
            ToastAndroid.show (mymessage, ToastAndroid.SHORT )
            }
        }>
          <Text>LOG IN</Text>
        </TouchableOpacity>
      </View>
  );
}

export default App;

{/*<Button onPress={ () => Alert.alert("Welcome!" + usertype + username) } title="LOG IN"></Button>*/}

{/*<Text>User Name:</Text>*/}
{/*<TextInput style={{borderWidth: 1}} onChangeText={(text) => setUsername(text)}/>*/}

{/*<Text>Password:</Text>*/}
{/*<TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw (text)}/>*/}
