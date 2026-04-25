import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { SvgXml } from "react-native-svg";

const svgCache = new Map();

const RemoteSvg = ({ uri, width = 40, height = 40 }) => {
  const [svgXmlData, setSvgXmlData] = useState(uri ? svgCache.get(uri) || null : null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (!uri) {
      setSvgXmlData(null);
      setError(true);
      return () => {
        isMounted = false;
      };
    }

    const cached = svgCache.get(uri);
    if (cached) {
      setSvgXmlData(cached);
      return () => {
        isMounted = false;
      };
    }

    fetch(uri)
      .then((response) => response.text())
      .then((text) => {
        if (isMounted) {
          svgCache.set(uri, text);
          setSvgXmlData(text);
        }
      })
      .catch(() => {
        if (isMounted) setError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [uri]);

  if (error) {
    // Optional: You could replace with a better fallback SVG or icon here
    return <View style={{ width, height, backgroundColor: "#eee" }} />;
  }

  if (!svgXmlData) {
    return <ActivityIndicator size="small" color="#20a074" />;
  }

  return <SvgXml xml={svgXmlData} width={width} height={height} />;
};

export default RemoteSvg;
