export default function CircleBackground() {
  return (
    <div className="">
      <div className="absolute w-[260px] h-[260px] rounded-[260px] bg-purple-200 -top-24 -right-20 z-[-1]"></div>
      <div className="absolute w-[186px] h-[186px] rounded-[186px] bg-purple-100 -top-20 right-16 z-[-2]"></div>
      <div className="absolute w-[260px] h-[260px] rounded-[260px] bg-purple-200 -bottom-24 -left-20 z-[-1]"></div>
      <div className="absolute w-[186px] h-[186px] rounded-[186px] bg-purple-100 -bottom-28 left-32 z-[-2]"></div>
      <div className="absolute w-[52px] h-[52px] rounded-[52px] bg-purple-200 bottom-48 left-5 z-[-1]"></div>
    </div>
  );
}
