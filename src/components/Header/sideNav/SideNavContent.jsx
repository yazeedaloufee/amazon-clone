import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../../store/sideNavContentSlice";
import "./SideNavContent.css";
import SideNaveRow from "./SideNaveRow";
function SideNavContent() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.sideNavContent;
  });
  useEffect(() => {
    dispatch(get());
  }, []);
  return (
    <div className="sideNavContainer">
      {state &&
        state.map((entry, index) => {
          return (
            <div key={index}>
              <div className="sideNaveContentHeader">{entry.title}</div>
              {
                  entry.entries.map((subEntry,index)=>{
                      return (!entry.type.rows?<a key={index}href='#'><div className="sidenavContent">{subEntry.title}</div></a>
                      :<SideNaveRow key={index*19}text={subEntry.title} entries={subEntry.entries}/>)
                  })
              }
            </div>
          );
        })}
    </div>
  );
}

export default SideNavContent;
