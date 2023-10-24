import { View, TouchableOpacity,Text, TextInput } from "react-native";
import {useNavigate} from "react-router-native"


function Add(props) {
    const navigate = useNavigate()
    return <View>
        <View>
            <TextInput style={{
                backgroundColor: 'white',
                border: 1,
                height: 200,
                width: 158
                }}/>
        </View>
        <View>
        <View style={{margin: 15}}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate("/task/"+123456
                                )
                            }}
                            style={{
                                backgroundColor: "silver",
                                padding: 10,
                                width: 128,
                            }}>
                            <Text style={{textAlign: "center"}}>Enrégistrer</Text>
                        </TouchableOpacity>
                    </View> 
        </View>
        <View style={{margin: 15}}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate("/home")
                            }}
                            style={{
                                backgroundColor: "silver",
                                padding: 10,
                                width: 128,
                            }}>
                            <Text style={{textAlign: "center"}}>Annuler</Text>
                        </TouchableOpacity>
                    </View> 
      

        
    </View>
}
export default Add;