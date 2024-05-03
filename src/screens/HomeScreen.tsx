import {View, Text, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation } : any){

    function navToGalerry(){
        navigation.navigate('Gallery');
    }
    return(
        <View style={{flex:1, backgroundColor:'red'}}>
            <Text>Home works!</Text>
            <Button 
                title='Go To Galerry'
                onPress={navToGalerry}
            />
        </View>
    )
}