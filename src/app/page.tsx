import LogoAlteredCl from "@/components/logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen absolute w-full">
      <video autoPlay loop muted className="absolute z-[-1] w-full object-cover h-screen top-0 left-0" src="/bg-video.mp4" />
      <div className="absolute z-[-1] w-full h-screen bg-black opacity-75 top-0 left-0" />
      <div className="flex flex-col items-center justify-center w-full h-screen text-white px-8 text-center">
        <p className="sm:text-lg mb-4">
          Pronto...
        </p>
        <LogoAlteredCl className="md:h-48 h-32 animate-pulse drop-shadow-lg mb-8" />
        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          Comunidad de Altered TCG en Chile
        </h1>
        <p className="sm:text-lg">
          Comunidad, torneos, eventos y más.
        </p>
      </div>
    </div>
  );
}
