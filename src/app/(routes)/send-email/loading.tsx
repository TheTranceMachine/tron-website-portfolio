import Image from "next/image";

export default function Loading() {
  return (
    <div className="wrapper flex flex-col gap-1 pt-1 px-[15px] sm:px-[41px] sm:h-96 h-32">
      <div className="flex items-center justify-center h-96 flex-col">
        <Image src="/images/spinner.svg" alt="spinner" width={100} height={100} className="h-12 w-12 sm:w-24 sm:h-24" />
        <div className="sm:text-2xl font-bold antialiased text-tron-400">Sending...</div>
      </div>
    </div>
  );
}
