import React from 'react';
import {View, Text} from 'react-native';

export default function Two({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}} onPress={() => navigation.goBack()}>
        Page 2
      </Text>
    </View>
  );
}
