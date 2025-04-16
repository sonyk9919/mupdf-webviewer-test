import { initMuPDFWebViewer } from "mupdf-webviewer";
import { useEffect } from "react";

const Viewer = () => {

    useEffect(() => {
        initMuPDFWebViewer('#viewer', 'sample.pdf', { licenseKey: '5z9yalNzmu1f+ta2ta2a6ja4' });
    }, []);

    return <div id="viewer" style={{ height: '95vh' }}></div>
}

export default Viewer;
