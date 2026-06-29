// components/RemoteSvg.js
import { Image } from 'react-native';
import { SvgUri } from 'react-native-svg'; // safer than SvgXml + manual fetch

export default function RemoteSvg({ uri, width, height, style }) {
  const isSvg = uri?.toLowerCase().endsWith('.svg');

  if (isSvg) {
    return <SvgUri uri={uri} width={width} height={height} style={style} />;
  }

  return (
    <Image
      source={{ uri }}
      style={[{ width, height }, style]}
      resizeMode="contain"
    />
  );
}