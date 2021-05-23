import { useMemo } from 'react';
// import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';

// function useRouterQueryParams() {
//   // call it inside useEffect ?? but it might need before mounted.
//     return new URLSearchParams(useLocation().search);
// }

function useRouterQueryParams() {
  const location = useRouter();
  const queryParams = useMemo(() => new URLSearchParams(location.query), [location]);
  return queryParams;
  // return null;
}

export default useRouterQueryParams;