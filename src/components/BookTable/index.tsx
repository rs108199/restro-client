import DiningReservationForm from "./DiningReservationForm";

function BookTable() {
  return (
    <div className="relative">
      <img src="luxuryInterior.jpg" alt="" width={"100%"} className="" />

      <div className="absolute top-0 h-full w-full flex justify-center items-center ">
        <div className="mx-[7%] w-full max-w-360 flex justify-center">
          <div className="w-150 text-white rounded-2">
            <DiningReservationForm />
          </div>
          <div className="flex items-center justify-center md:justify-center"></div>
        </div>
      </div>
    </div>
  );
}

export default BookTable;
