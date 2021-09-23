import NProgress from 'nprogress';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

NProgress.configure({ showSpinner: false });

const useNProgress = () => {
  const router = useRouter();

  const startProgress = useCallback(() => NProgress.start(), []);
  const doneProgress = useCallback(() => NProgress.done(), []);

  useEffect(() => {
    router.events.on('routeChangeStart', startProgress);
    router.events.on('routeChangeComplete', doneProgress);
    router.events.on('routeChangeError', doneProgress);

    return () => {
      router.events.off('routeChangeStart', startProgress);
      router.events.off('routeChangeComplete', doneProgress);
      router.events.off('routeChangeError', doneProgress);
    };
  }, [doneProgress, router, startProgress]);
};

export default useNProgress;
