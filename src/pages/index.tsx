
import dynamic from "next/dynamic";

const MuPDFViewer = dynamic(
  () => import('../viewer/viewer'),
  { ssr: false }
);

export default function Home() {
  return <MuPDFViewer />
}
