import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
function App() {
const [previewData, setPreviewData] = useState({});
return (
<div className="grid grid-cols-2 gap-4 p-8">
<ResumeForm setPreviewData={setPreviewData} />
<ResumePreview data={previewData} />
</div>
);
}
export default App;