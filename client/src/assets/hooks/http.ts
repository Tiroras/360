import {useCallback, useState} from "react";


const useHttp = () => {
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    try {
      if(body){
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(body);
      }
      const res =  await fetch(url, {method, body, headers});
      const data = await res.json();
      if(!res.ok) {
        throw new Error(data.message || "Что-то пошло не так");
      }
      return data
    } catch (e) {
      setError(e.message);
      throw e;
    }
  }, [])
  const clearError = () => setError(null);
  return {request, error, clearError}
}

export default useHttp;