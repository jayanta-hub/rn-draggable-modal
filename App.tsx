import React from 'react';
import {Button, SafeAreaView, ScrollView, Text} from 'react-native';
import HalfModal from './src/Component/HalfModal';

function App(): JSX.Element {
  const [isHalfModalVisible, setHalfModalVisible] = React.useState(false);
  const toggleHalfModal = () => {
    setHalfModalVisible(!isHalfModalVisible);
  };
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Button
          onPress={toggleHalfModal}
          title="Click"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <HalfModal
          modalVisible={isHalfModalVisible}
          setModalVisible={setHalfModalVisible}
          modalHeight={600}
          // dragIconStyle={{
          //   width: 80,
          //   height: 10,
          // }}
          // children={
          //<ScrollView
          // contentContainerStyle={{
          //  backgroundColor: 'red',
          // flexGrow: 1,
          //   paddingHorizontal: scale(5),
          // }}>
          //</SafeAreaView> <Text>askjndkakjdjnqjdqwnqwndwqd ndqowd wn</Text>
          // </ScrollView>
          // }
        >
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 5,
            }}>
            <Text>askjndkakjdjnqjdqwnqwndwqd ndqowd wn</Text>
          </ScrollView>
        </HalfModal>
      </SafeAreaView>
    </>
  );
}

export default App;
