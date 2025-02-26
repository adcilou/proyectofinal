import React from "react";
import{ StyleSheet, View, ScrollView, Text, Image} from "react-native";
import { Button } from "react-native-elements";
import {NavigationHelpersContext, useNavigation} from "@react-navigation/native";

export default function UserGuest(){
    const navigation = useNavigation();
    return(
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode = "contain"
                style={styles.image}
            />
            <Text style ={styles.tittle} >Consulta tu perfil DeGourmet</Text>
            <Text style={styles.description}>
                ¿Como describirias tu mejor restaurante? Busca y visualiza los mejores
                restaurantes de una forma sencilla, vota cual te ha gustado mas y 
                comenta como ha sido tu experiencia
            </Text>
            <View style={styles.viewBtn}> 
                <Button
                title="Ver tu perfil"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btncontainer}
                onPress={() => navigation.navigate("login")}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody:{
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40,
    },
    tittle:{
        fontWeight:"bold",
        fontSize:19,
        marginBottom: 10,
        textAlign: "center"
    },
    description:{
        textAlign: "center",
        marginBottom:20,
    },
    viewBtn:{
        flex:1,
        alignItems:"center",
    }
    ,
    btnStyle:{
        backgroundColor:"#00a680"
    },
    btncontainer:{
        width: "70%"
    },
})