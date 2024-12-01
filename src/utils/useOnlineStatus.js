import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //for all one time operations like API call (one time data fetching) or WebAPIs like event listeners we only need our code to be executed just once and not on every render, hence best to use it in useEffect with [] so it only gets called once on initial render.
  useEffect(() => {
    //checking working in console event listeners
    window.addEventListener("offline", offlineFun);
    window.addEventListener("online", onlineFun);

    return () => {
      window.removeEventListener("offline", offlineFun);
      window.removeEventListener("online", onlineFun);
    };
  }, []);

  const offlineFun = () => {
    setOnlineStatus(false);
  };

  const onlineFun = () => {
    setOnlineStatus(true);
  };

  return onlineStatus;
};

export default useOnlineStatus;
