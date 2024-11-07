import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen absolute w-full">
      <video autoPlay loop muted className="absolute z-[-1] w-full object-cover h-screen top-0 left-0" src="/bg-video.mp4" />
      <div className="absolute z-[-1] w-full h-screen bg-black opacity-75 top-0 left-0" />
      <div className="flex flex-col items-center justify-center w-full h-screen text-white gap-4">
        <Image src="/altered-logo.png" alt="Altered Logo" width={520} height={420} />
        <h1 className="text-2xl font-bold">
          Comunidad de Altered TCG en Chile.
        </h1>
        <p className="text-lg">
          Comunidad, torneos, eventos y más.
        </p>
      </div>
    </div>
  );
}
