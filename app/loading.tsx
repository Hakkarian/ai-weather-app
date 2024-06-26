import { SunIcon } from "@heroicons/react/solid";

function Loading() {
  return (
    <div className="bg-gradient-to-br from-[#6f6103] to-[#1c406a] min-h-screen flex flex-col items-center justify-center text-slate-500">
      <SunIcon
        className="h-24 w-24 animate-bounce text-yellow-500"
        color="yellow"
      />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading City Weather Information
      </h1>
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">Hold on, relax, let us find the Weather for you! ;3</h2>
    </div>
  );
}

export default Loading;
