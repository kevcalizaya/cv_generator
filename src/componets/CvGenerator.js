import React, { useState } from "react";
import CvEditor from "./CvEditor.js";
import CvPreview from "./CvPreview.js";

export default function CvGenerator() {
  const [data, setData] = useState(null);
  return (
    <div className="cv-generator">
      <CvEditor setData={setData} />
      <CvPreview />
    </div>
  );
}
