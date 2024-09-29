import {
    StyleSheet,
  } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    background: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#000',
      opacity: 0.3,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 30,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.55,
      shadowRadius: 14,
      elevation: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
  
    draggableContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: '100%',
    },
    draggableIcon: {
      width: 40,
      height: 6,
      borderRadius: 3,
    },
    draggableDotsIcon: {
      width: 6.5,
      height: 6.5,
      borderRadius: 3,
    },
    wrapper: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });
  export default styles;