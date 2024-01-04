import { useEffect, useState } from "react";
import CallController from "../controllers/CallController";
import Call from "../models/callModel";
import { IoMdCall } from "react-icons/io";
import { FaVoicemail } from "react-icons/fa6";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";
import { motion } from "framer-motion";
import zustandStore from "../zustandStore/store";
import SideBarComp from "../components/sidebarComp";

function CallComp() {
  const [calls, setCalls] = useState<Call[]>([]);

  const { setSideBarShow, setCurrentCall } = zustandStore();
  const sideBarShow = zustandStore(state => state.sideBarShow);

  const handleCalls = async () => {
    const res = await CallController.getAllCalls();
    setCalls(res);
  };

  useEffect(() => {
    handleCalls();
  }, []);

  return (
    <div className="h-full mx-4 md:mx-12 lg:mx-24 xl:mx-48 overflow-auto ">
      <h2 className="text-3xl tracking-wider">Call History</h2>
      {calls
        .filter(item => {
          return !item.is_archived;
        })
        .map((item: Call, index: number) =>
          <motion.div
            className="card bg-base-100 border-2 m-4 overflow-auto"
            key={index}
            initial={{ opacity: 0, y: 50 }} // Initial animation properties
            animate={{ opacity: 1, y: 0 }} // Animation properties on start
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-body flex flex-row">
              <div className="flex flex-col items-center justify-center mx-4">
                {item.call_type === "answered"
                  ? <div className="rounded-full bg-transparent border-2 border-green-400 w-10 h-10 flex items-center justify-center">
                      <IoMdCall className="text-green-400 text-xl" />
                    </div>
                  : item.call_type === "missed"
                    ? <div className="rounded-full bg-transparent border-2 border-yellow-400 w-10 h-10 flex items-center justify-center">
                        <MdOutlineCallMissedOutgoing className="text-yellow-400 text-xl" />
                      </div>
                    : <div className="rounded-full bg-transparent border-2 border-blue-400 w-10 h-10 flex items-center justify-center">
                        <FaVoicemail className="text-blue-400 text-xl" />
                      </div>}
              </div>
              <div className="flex-1">
                <p className="">
                  <span className="font-bold text-xl">To:</span>
                  {item.to}
                </p>
                <p>
                  <span className="font-bold text-xl">From:</span> {item.from}
                </p>
              </div>
              <div className="">
                <button
                  className="btn btn-outline btn-secondary"
                  onClick={() => {
                    setSideBarShow(true);
                    setCurrentCall(item);
                  }}
                >
                  View More
                </button>
              </div>
            </div>
            <div className="">
              {sideBarShow === true ? <SideBarComp /> : ""}
            </div>
          </motion.div>
        )}
    </div>
  );
}

export default CallComp;
