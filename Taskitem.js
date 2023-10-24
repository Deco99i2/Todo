import { View } from "react-native";

function Taskitem(props) {
return <View>
    <text>Taskitem</text>
    <View>
        <text>
            {props.description}
        </text>
    </View>
</View>    
}

export default Taskitem;