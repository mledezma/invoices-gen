import UploadCSVButton from "./components/uploadCSVButton";

export default function Home() {
  return (
    <div className="pt-8 container mx-auto">
      <h1 className="text-3xl text-center font-medium mb-24">Upload you CSV and get a working PDF Invoice.</h1>
      <UploadCSVButton />
    </div>
  );
}
