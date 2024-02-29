import {Image, Text, TouchableOpacity} from 'react-native';
import {MediaItemWithOwner} from '../types/DBTypes';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type Props = {
  item: MediaItemWithOwner;
  navigation: NavigationProp<ParamListBase>;
};



const MediaListItem = ({item, navigation}: {item: MediaItemWithOwner; navigation: NavigationProp<ParamListBase>}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('touched', item.title);
        navigation.navigate('Single Media' , item);
      }}
    >
      <Image style={{height: 300}} source={{uri: 'http:' + item.thumbnail}} />
      <Text>{item.title}</Text>
      <Text>{new Date(item.created_at).toLocaleString('fi-FI')}</Text>
    </TouchableOpacity>
  );
};
export default MediaListItem;