import { View } from "react-native";
import TaskiTem from "./Taskitem" ;
function List(props) {
    const tasks = [
        {id: 1, description: "lola derick"},
        {id: 2, description: "toni victor"},

         {id: 3, description: "bake renaldo"}
    ]
return <View>
    <text>List</text>
    <View>
        {tasks.map(t =>
            <view
            style={{
                backgroundColor: 'lightgreen',
                margin: 10
            }}>
                <TaskiTem description={t.description} />

            </view>)}
    </View>
</View>    
}

export default List; 