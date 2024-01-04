import CallComp from "../components/cardsComp";
import { FiSettings } from "react-icons/fi";
import CallController from "../controllers/CallController";

function HomePage() {
  return (
    <div className="h-screen w-screen bg-white overflow-auto">
      <div className="navbar flex flex-row justify-between items-center">
        <a className="btn btn-ghost text-xl">AirCall</a>
        <div className="navbar-end">
          <button
            className="btn btn-primary btn-outline"
            onClick={() => CallController.unarchiveAllCalls()}
          >
            Unarchive Logs
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => {
              const modal = document.getElementById("my_modal_5");
              if (modal) {
                (modal as HTMLDialogElement).showModal();
              }
            }}
          >
            <FiSettings className="text-xl" />
          </button>
        </div>
      </div>
      <div className="">
        <CallComp />
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-error">Danger Zone</h3>
          <p className="py-4 flex flex-row justify-between items-center">
            <span className="font-bold">Archive all logs</span>
            <button className="btn btn-error btn-outline ">Archive logs</button>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default HomePage;
