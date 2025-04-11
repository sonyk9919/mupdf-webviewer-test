
import { useEffect } from "react"

export default function Home() {
  
  useEffect(() => {
    setTimeout(() => {
      // @ts-expect-error 12321312
      initMuPDFWebViewer('#viewer', 'https://static-test.hq.epapyrus.com/doc/sample.pdf', { licenseKey: '5z9yalNzmu1f+ta2ta2a6ja4' });
    }, 1000);
  }, []);

  return <div id="viewer" style={{ height: '900px' }}></div>
}
