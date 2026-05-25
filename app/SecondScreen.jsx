import { useEffect } from "react";
import { useRouter } from "expo-router";

const SecondScreen = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/InitialScreen");
  }, [router]);

  return null;
};

export default SecondScreen;
