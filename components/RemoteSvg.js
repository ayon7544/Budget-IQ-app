import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

const svgCache = new Map();

const RemoteSvg = ({ uri, width = 40, height = 40 }) => {
  const [svgXmlData, setSvgXmlData] = useState(() => svgCache.get(uri) || null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (!uri) {
      setError(true);
      return () => {
        isMounted = false;
      };
    }

    const cached = svgCache.get(uri);
    if (cached) {
      setSvgXmlData(cached);
      setError(false);
      return () => {
        isMounted = false;
      };
    }

    fetch(uri)
      .then((response) => response.text())
      .then((text) => {
        svgCache.set(uri, text);
        if (isMounted) {
          setSvgXmlData(text);
          setError(false);
        }
      })
      .catch(() => {
        if (isMounted) setError(true);  // <-- only update if mounted
      });

    return () => {
      isMounted = false;
    };
  }, [uri]);

  if (error) {
    // Optional: You could replace with a better fallback SVG or icon here
    return <View style={{ width, height, backgroundColor: "#eee", borderRadius: 8 }} />;
  }

  if (!svgXmlData) {
    return <View style={{ width, height, backgroundColor: "#e8f5e9", borderRadius: 8 }} />;
  }

  return <SvgXml xml={svgXmlData} width={width} height={height} />;
};

export default RemoteSvg;
