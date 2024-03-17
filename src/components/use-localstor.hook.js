/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
    const [data, satData] = useState();
    useEffect(()=>{
        const res = JSON.parse(localStorage.getItem(key));
        if (res) {
            satData(res);
        }
      }, []);

      // eslint-disable-next-line no-unused-vars
      const saveData = (newdata) => {
        localStorage.setItem(key, JSON.stringify(newdata));
        satData(newdata);
      };

    function mapItems(data) {
          if(!data){return[];}
          return data;}

return [mapItems(data), saveData];

}