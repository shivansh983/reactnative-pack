import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style= {{flex: 1 , backgroundColor:"#fff"}}>
      <View style={{padding:16}}>
        <Text>text</Text>

        <TextInput placeholder="Search City.."
        placeholderTextColor="#999"
        style ={{
          borderWidth:1,
          borderColor:"#ddd",
          borderRadius: 8,
          padding: 10,
          marginTop:12,
        }}
        />
      <TouchableOpacity onPress={()=>alert("Warning")} style={{
        backgroundColor: "#0c23d7",
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        alignItems:"center",
      }}
      >
        <Text style={{color:"#9f9b9b"}}>
          Search</Text>
      </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
