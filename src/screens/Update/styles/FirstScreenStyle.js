import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex: 1,
        margin: 20
    },
    input: {
        borderColor: 'black',
        width: 160,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 10
    }
});


export default styles;