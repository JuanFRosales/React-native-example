import {FlatList, Text} from 'react-native';
import {useMedia} from '../hooks/ApiHooks';
import MediaListItem from '../components/MediaListItem';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const {mediaArray} = useMedia();
  return (
    <>
      <Text>Files</Text>
      <FlatList
        data={mediaArray}
        renderItem={({item}) => <MediaListItem item={item} navigation={undefined} />}
      />
    </>
  );
};

export default Home;