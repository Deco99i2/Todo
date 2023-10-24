import { View,Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";

function Task(props) {
    const Navigate = useNavigate
    const Mota=new Date()
return <View>
     <View>
        <TouchableOpacity>
        <Text style={{textAlign: "center"}}>Laurent sur le lit sans aucune femme depuit
             deux semaines. 
            Now il cherche une fille neuve
        </Text>
        </TouchableOpacity>
     </View>
        <View>
            <Text>
                Mota: {Mota.toDateString()}
            </Text>
        </View>
        <View style={{margin: 15}}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate("/add")
                            }}
                            style={{
                                backgroundColor: "silver",
                                padding: 10,
                                width: 128,
                            }}>
                            <Text style={{textAlign: "center"}}>Faire</Text>
                        </TouchableOpacity>
        </View>
                    <View style={{margin: 15}}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate("/list")
                            }}
                            style={{
                                backgroundColor: "silver",
                                padding: 10,
                                width: 128,
                            }}>
                            <Text style={{textAlign: "center"}}>Retour</Text>
                        </TouchableOpacity>
                    </View> 
        
    </View>
      
}

export default Task;