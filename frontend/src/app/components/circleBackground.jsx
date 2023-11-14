export default function CircleBackground() {
  return (
    <div className="">
      <div className="absolute scale-[0.6] lg:scale-75 xl:scale-100 w-[260px] h-[260px] rounded-[260px] bg-purple-200 -top-32 sm:-top-24 -right-28 sm:-right-24 xl:-right-20 z-[-1]"></div>
      <div className="absolute scale-[0.6] lg:scale-75 xl:scale-100 w-[186px] h-[186px] rounded-[186px] bg-purple-100 -top-24 sm:-top-20 -right-2 sm:right-2 lg:right-6 xl:right-16 z-[-2]"></div>
      <div className="absolute scale-[0.6] lg:scale-75 xl:scale-100 w-[260px] h-[260px] rounded-[260px] bg-purple-200 -bottom-32 sm:-bottom-24 -left-28 sm:-left-24 xl:-left-20 z-[-1]"></div>
      <div className="absolute scale-[0.6] lg:scale-75 xl:scale-100 w-[186px] h-[186px] rounded-[186px] bg-purple-100 -bottom-28 -left-2 sm:left-2 lg:left-6 xl:left-16 z-[-2]"></div>
      <div className="hidden md:block absolute scale-[0.6] lg:scale-75 xl:scale-100 w-[52px] h-[52px] rounded-[52px] bg-purple-200 bottom-32 lg:bottom-36 xl:bottom-48 left-1 xl:left-5 z-[-1]"></div>
    </div>
  );
}
