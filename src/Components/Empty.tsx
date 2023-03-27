import react from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'



export const Empty = ({setShowCrypto}: any) => {
    return(
        <View style={styles.Empty__container}>
            <Image style={styles.Empty__icon} source={require("../imgs/cara-triste.png")} />
            <Text style={styles.Empty__text}>No crypto currency</Text>
            <TouchableOpacity style={styles.Button__container} onPress={()=>setShowCrypto(true)}>
                <Text style={styles.Button__add}>+ Add a Cryptocurrency</Text>
            </TouchableOpacity>  
        </View>
    )
}

const styles = StyleSheet.create({
    Empty__container:{
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    Empty__icon:{
        width:100,
        height:100
    },
    Empty__text:{
        fontSize:30,
        fontWeight: '700'
    },
    Button__container: {
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:20,
        marginBottom:20
      },
    
      Button__add: {
        fontFamily: "Inter",
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: '#385775',
      }
})