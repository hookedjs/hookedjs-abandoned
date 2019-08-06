import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { LogoIcon } from '../svgs';
import { Helmet } from '../lib/Helmet';
import { useRouter } from '../lib/Routing';

export const HomeRoute = () => {
  const { history } = useRouter();
  return (
    <View>
      <Helmet title="Home" />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingVertical: 60,
          paddingHorizontal: 30
        }}
      >
        <LogoIcon width={200} height={200} fill="#2D3C56" />
        <Text h4 style={styles.text}>
          Welcome to EUS
        </Text>
        <Text style={styles.text}>This is a Expo + react-native universal app starter.</Text>
        <Button onPress={() => history.push('/page')} title="Goto Inner Page" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 24
  }
});
