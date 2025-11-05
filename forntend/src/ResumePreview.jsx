import React from "react";
function ResumePreview({ data }) {
return (
<div className="p-4 border rounded bg-gray-50">
<h1 className="text-xl font-bold">{data.full_name}</h1>
<p>{data.email} | {data.phone}</p>
<hr />
<h2>Education</h2><p>{data.education}</p>
<h2>Experience</h2><p>{data.experience}</p>
<h2>Skills</h2><p>{data.skills}</p>
</div>
);
}
export default ResumePreview;