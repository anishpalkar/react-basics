// React knows this is a hook because name starts from use... (recommended not mandatory, linters force us to use "use..." convention)
// We can on use hooks inside another hooks or components, not anywhere else (rule)

import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

//Because react is aware this is a hook it can track and re-render components were we are using this custom hook's results. And the state is connected were we call this custom hook i think so, due to which react is able to re-render components after states are changed ☺️.
//Think like below code is part of RestaurantMenu only and we have just used return here and catches there. Hooks are nothing but utility and this is fetching data for each restaurant.

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //console.log(resInfo);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    // console.log(
    //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    //     .itemCards
    // );
    setResInfo(json.data.cards);
  };
  return resInfo;
  // this can be object and can be destructed. In this case we have passed array
};

export default useRestaurantMenu;

/*
Hooks are simple functions which can use other hooks and a function cannot return a value unless it is called, here if we are maintaining useState or useEffect inside custom hooks then on rendering the component first call custom hook (here useMyValue will be called), with the instance of componentA, which in turn call useState or useEffect hooks inside of it, with the same componentA instance, and return the intialized value to componentA.

const useMyValue = () => {
  const [count, setCount] = useState(0);
  // ...do something
  return [count, setCount];
};

const ComponentA = (props) => {
  const [value, setValue] = useMyValue();
};
now if are updating the value in componentA and we are calling setValue which has the reference of setCount from custom hooks then count got updated but useState will also update/ re-render the component for which it holds the instance, here componentA, and on re-rendering componentA will again call useMyValue hook which in turn call useState again and receive the updated value for count and finally return its updated value to the componentA.
*/
