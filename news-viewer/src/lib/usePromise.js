import { useState, useEffect } from 'react';
 
export default function usePromise(promiseCreator, deps) { // Promise의 대기 중, 완료 결과, 실패 결과에 대한 상태를 관리, usePromise의 의존 배열 deps를 파라미터로 받아옴.
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps); // deps: useEffect의 의존 배열.
 
  return [loading, resolved, error];
}