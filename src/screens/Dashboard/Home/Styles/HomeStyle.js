import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userList: {
    width: '100% - 40rem',
    marginHorizontal: '20rem',
    paddingVertical: '10rem',
  },
  userDetailRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: '15rem',
    marginVertical: '5rem',
    borderRadius: '10rem',
  },
  userImg: {
    width: '50rem',
    height: '50rem',
    borderRadius: '25rem',
  },
  userDetail: {
    width: '100% - 125rem',
    paddingLeft: '15rem',
  },
  userName: {
    fontSize: '15rem',
    fontWeight: '500',
    color: '#000',
  },
  userAge: {
    fontSize: '13rem',
    color: '#444',
    textTransform: 'capitalize',
    paddingVertical: '4rem',
  },
  userEmail: {
    fontSize: '13rem',
    color: '#333',
    fontStyle: 'italic',
  },
  userPhone: {
    fontSize: '13rem',
    color: '#333',
    paddingTop: '5rem',
  },
  lastRow: {
    marginBottom: '30rem',
  },
});

export default styles;
