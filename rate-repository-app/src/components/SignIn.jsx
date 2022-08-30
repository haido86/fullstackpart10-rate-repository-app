import { Formik } from 'formik';
import * as yup from 'yup';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: theme.colors.thirdly,
    display: 'flex',
    padding: 10,
  },
  box: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
    margin: 5,
    backgroundColor: theme.colors.primary,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.boxContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />

      <Pressable style={styles.box} onPress={onSubmit}>
        <Text color="textThirdly" fontWeight="bold" fontSize="subHeading">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
