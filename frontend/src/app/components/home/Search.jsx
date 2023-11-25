

export default function Search() {
  return (
    <section class="searchEvent flex-wrap flex justify-center items-center mt-5">
      <div class="maincards grid lg:grid-cols-4 md:grid-cols-2 gap-8 cursor-pointer hover:cursor-pointer">
        {data.map((rows) => (
          <>
            <div
              key={rows._id}
              class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 drop-shadow-[0_20px_10px_rgba(0,0,0,0.25)] hover:shadow-2xl"
            >
              <img
                class="h-40 object-cover rounded-xl"
                src="./pewdstream.jpg"
                alt=""
              />
              <div class="p-2">
                <h2 class="font-bold text-xl mb-2 ">{rows.eventName}</h2>
                {/* <h3 className="font-bold text-xs mt-1">{rows.department}</h3> */}
                <h3 class="bg-purple-200 px-1 py-1 text-xs text-white-100 rounded-md text-center w-fit">
                  {rows.department}
                </h3>

                <p class="text-sm text-gray-600">{rows.eventDescription}</p>
                {/* <p class="text-xs text-gray-600 mt-1">{rows.tnc}</p> */}
              </div>

              <div>
                <div class="flex space-x-2"></div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
