import {StyleSheet, View, StatusBar, Text} from 'react-native';
import {NativeRouter, Route, Routes} from "react-router-native";
import Home from "./Home";
import List from "./List";
import Add from "./Add";
import Task from "./Task";

export default function App() {
    return (
        <NativeRouter>
            <View style={styles.container}>
                <Text style={{
                    fontSize:40
                }}>TAF</Text>
                <StatusBar style="auto" />
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/list"} element={<List/>}/>
                    <Route path={"/add"} element={<Add/>}/>
                    <Route path={"/task/:id"} element={<Task/>}/>
                </Routes>
            </View>
        </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
