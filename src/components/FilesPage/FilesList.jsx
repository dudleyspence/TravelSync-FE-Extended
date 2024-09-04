import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ItineraryContext } from "../Context/ItineraryContextProvider";
import { deleteSingleFile, downloadFile, getFiles } from "../../axios";
import deleteBin from "../../assets/deleteBin.png";
import documentIcon from "../../assets/document.png";
import emptyFile from "../../assets/emptyFile.png";

export default function FilesList({ updateFiles, setUpdateFiles }) {
  const { currentItinerary } = useContext(ItineraryContext);
  const [currentFiles, setCurrentFiles] = useState([]);

  useEffect(() => {
    getFiles(currentItinerary.id).then((data) => {
      console.log(data);
      setCurrentFiles(data);
      setUpdateFiles(false);
    });
  }, [updateFiles]);

  function handleDeleteFile(file_id) {
    deleteSingleFile(file_id).then((response) => {
      setUpdateFiles(true);
    });
  }

  function handleDownload(file_id) {
    downloadFile(file_id)
      .then((url) => {
        console.log(url);
        window.location.href = url;
      })
      .catch((error) => {
        console.error("Error downloading file");
      });
  }

  return (
    <div className="filesListContainer">
      <ul>
        {currentFiles.length === 0 ? (
          <div className="emptyFile">
            <p>You don't have any files</p>
            <img src={emptyFile} alt="No files available" />
          </div>
        ) : (
          currentFiles.map((file) => (
            <li key={file.id} className="savedFile">
              <button
                onClick={() => {
                  handleDownload(file.id);
                }}
              >
                <img src={documentIcon} alt="pdf" className="documentIcon" />
              </button>
              <p>{file.file_name}</p>

              <button
                onClick={() => {
                  handleDeleteFile(file.id);
                }}
              >
                <img src={deleteBin} className="binImg" alt="delete button" />
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
