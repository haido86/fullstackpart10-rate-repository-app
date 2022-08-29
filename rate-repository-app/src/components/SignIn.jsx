import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text'

const styles= StyleSheet.create({
    boxContainer:{
        backgroundColor: theme.colors.thirdly,
        display: "flex",
        padding: 10,
        },
    box: {
        alignItems:"center",
        padding: 10, 
        borderWidth:1,
        borderColor: "#808080",
        borderRadius:4,  
        margin: 5,       
        },
    color:{
        backgroundColor: theme.colors.primary,
        borderColor:theme.colors.primary
    }
}
   
)

const SignInForm=({onSubmit})=>{
    return (
        <View style={styles.boxContainer}>
            <FormikTextInput  style={styles.box } name="username" placeholder="Username" />
            <FormikTextInput style={styles.box } name="password" placeholder="Password" secureTextEntry={true} />
           
            <Pressable  style={[styles.box,styles.color]} onPress={onSubmit} >
                <Text color="textThirdly" fontWeight="bold" fontSize="subHeading" >Sign in</Text>
            </Pressable>
          
        </View>
    )
}

const SignIn=()=>{
    const onSubmit = (values) => {
        console.log(values)
      };
    
      return (
        <Formik initialValues={{ username:'', password:''}} 
                onSubmit={onSubmit}>
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      );
}


export default SignIn;