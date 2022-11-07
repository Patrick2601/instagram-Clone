import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Users from '../data/Users';

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Users.map(story => {
          return (
            <View style={{alignItems: 'center'}} key={story.id}>
              <Image style={styles.story} source={{uri: story.image}} />
              <Text style={styles.name}>
                {story.name.length > 8
                  ? story.name.slice(0, 8) + '...'
                  : story.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    height: 70,
    weight: 70,
    borderRadius: 43,
    paddingHorizontal: 33,
    marginLeft: 6,
    borderColor: '#FCAF45',
    borderWidth: 2.5,
  },
  name: {
    color: 'white',
  },
});
