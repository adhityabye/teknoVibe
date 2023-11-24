export default function Search() {
    return (
      <main id="tentang">
        <div class="maincards flex space-x-8 ">
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
                  <h2 class="font-bold text-lg mb-2 ">{rows.eventName}</h2>
  
                  <p class="text-sm text-gray-600">{rows.eventDescription}</p>
                </div>
  
                <div>
                  <div class="flex space-x-2"></div>
                </div>
              </div>
            </>
          ))}
        </div>
      </main>
    );
  }
  