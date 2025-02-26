import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import{Input, Icon, Button} from "react-native-elements";

export default function LoginForm(){
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValue())
    console.log(formData)
    return(
        <View style={styles.formContainer}>
            <Input 
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false: true}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Button
                title="Iniciar sesión"
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
            />
        </View>
    )
}

function defaultFormValue(){
    return{
        email:"",
        password:""
    }
}

const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 30
    },
    inputForm:{
        width:"100%",
        marginTop: 20,
    },
    btnContainerLogin:{
        marginTop: 20,
        width:"95%",
    },
    btnLogin:{
       backgroundColor:"#00a680" 
    },
    iconRight:{
        color:"#c1c1c1"
    }
})