import React from 'react';
import {View, Text} from 'react-native';

export default function One({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}} onPress={() => navigation.push('Settings')}>
        Page 1
      </Text>
    </View>
  );
}
