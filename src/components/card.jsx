import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"




function Card({data}) {
  // console.log(data)
  return (
    <>
      <motion.div drag  whileDrag={{scale : 1.1}} dragElastic={0.2} className="relative w-52 h-60 flex-shrink-0 rounded-[45px] bg-zinc-900/90 text-white p-8 py-10 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">
          {data.desc}
        </p>
        <div className="footer absolute bottom-0 w-full  left-0">
          <div className="flex items-center justify-between px-8 py-3 mb-3">
            <h5>{data.fileSize}</h5>
            <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? <IoMdClose/> : <MdOutlineFileDownload size=".7em" color="#fff" />}
            </span>
          </div>

          { 
          data.tag.isOpen && (
          <div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-4 flex items-center justify-center`}>
          <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>

          </div>)
          }
        </div>
      </motion.div>
    </>
  );
        }

export default Card;
