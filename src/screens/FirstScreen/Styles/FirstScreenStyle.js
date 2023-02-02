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
        borderWidth: 1,
        width: 160,
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 10
    },
    selectImage: {
        borderRadius: 5,
        margin: 10,
        width: 160,
        height: 50,
        backgroundColor: '#8ac6d1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadImage: {
        borderRadius: 5,
        width: 160,
        height: 50,
        margin: 10,
        backgroundColor: '#ffb6b9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    downloadImage: {
        borderRadius: 5,
        width: 160,
        height: 50,
        margin: 10,
        backgroundColor: '#ffb9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20

    }
});


export default styles;