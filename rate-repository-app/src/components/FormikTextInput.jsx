import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    margin: 5,
    marginBottom: 10,
    color: '#d73a4a',
  },
  box: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 4,
    margin: 5,
  },
  color1: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  color2: {
    borderColor: '#d73a4a',
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={showError ? [styles.box, styles.color2] : styles.box}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
