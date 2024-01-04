import { CgClose } from "react-icons/cg";
import zustandStore from "../zustandStore/store";
import { FaBoxArchive } from "react-icons/fa6";
import {motion} from "framer-motion"
import CallController from "../controllers/CallController";

function SideBarComp() {
  const { setSideBarShow } = zustandStore();
  const currentLog = zustandStore(state => state.currentLog);

  return (
    <motion.div className="fixed top-0 right-0 h-full w-full bg-base-200 text-black z-50 rounded-xl p-8 md:w-1/3" initial={{ x: 250 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.2 }}>
      <div className="flex flex-row justify-between">
        <button
          className="btn btn-outline"
          onClick={() => setSideBarShow(false)}
        >
          <CgClose className="text-2xl" />
        </button>
        <h2 className="text-2xl font-bold">Call Details</h2>
      </div>
      {/* content goes here */}
      <div className="p-4 mt-20 h-72 grid grid-cols-2 justify-evenly text-xl">
        <p>
          To:
          <span className="mx-10">{currentLog?.to}</span>
        </p>
        <p>
          From:
          <span className="mx-10">{currentLog?.from}</span>
        </p>
        <p>
          Duration:
          <span className="mx-10">{currentLog?.duration}</span>
        </p>
        <p>
          Type:
          <span className="mx-10">{currentLog?.call_type}</span>
        </p>
        <p>
          Direction:
          <span className="mx-10">{currentLog?.direction}</span>
        </p>
        <p>
          Via:
          <span className="mx-10">{currentLog?.via}</span>
        </p>
      </div>
      <div className="divider">Danger</div>
      <button className="btn btn-error btn-outline w-full" onClick={() => {
        CallController.archiveSingleCall(currentLog!.id);
        setSideBarShow(false);
      }}>
        <FaBoxArchive />Archive
      </button>
    </motion.div>
  );
}

export default SideBarComp;
