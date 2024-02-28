import { Image, Text, View } from "react-native";
import { MediaItemWithOwner } from "../types/DBTypes";
import { ResizeMode, Video } from "expo-av";

const Single = ({route}: {route: {params: MediaItemWithOwner}}) => {
  const item = route.params;
  const [fileType, fileFormat] = item.media_type.split('&#x2F;') 
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{new Date(item.created_at).toLocaleString('fi-FI')}</Text>
      <Image style={{height: 300}} source={{uri: 'http:' + item.thumbnail}} />
      <Text>Owner: {item.username}</Text>
      <Text>Media type: {item.media_type}</Text>
      <Text>Filesize: {item.filesize}kb</Text>
        {fileType === 'image' && <Image style={{height: 300}} source={{uri: 'http:' + item.filename}} />}
        {fileType === 'video' && <Video
          source={{uri: 'http:' + item.filename}}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
        />}


    </View>
  );
}