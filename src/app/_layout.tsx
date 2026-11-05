import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


type Property = { id: string; title: string; city: string; price: number };

const properties: Property[] = [
  { id: "1", title: "2BHK Apartment", city: "Pune", price: 4500000 },
  { id: "2", title: "3BHK Villa", city: "Mumbai", price: 12000000 },
];



export default function Index() {
  return (
    <SafeAreaView className="
    flex:1">
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
      <TouchableOpacity onPress={()=>alert("Warning")} 
      style={{
        backgroundColor: "#0c23d7",
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        alignItems:"center",
      }}
      >
        <Text
         style={{
          color:"#9f9b9b"
          }}>
          Search</Text>
      </TouchableOpacity>
      </View>

      <FlatList 
      data={properties} 
      keyExtractor={(item) => item.id}
      contentContainerStyle={{padding:16}}
      renderItem={({item})=>(
        <View
        style={{
          backgroundColor: "#fafafc",
          padding: 12,
          borderRadius: 10,
          marginTop: 10,
          
      }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
          <Text style={{ color: "#696970" }}>{item.city}</Text>
          <Text style={{ color: "#3540da" }}>{item.price}</Text>
        </View>
      )}
      />

    </SafeAreaView>
  );
}
