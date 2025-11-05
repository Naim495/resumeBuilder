import React, { useState } from "react";
import axios from "axios";
function ResumeForm({ setPreviewData }) {
const [formData, setFormData] = useState({
full_name: "",
email: "",
phone: "",
education: "",
experience: "",
skills: "",
});
const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
setPreviewData({ ...formData, [e.target.name]: e.target.value
});
};
const handleSubmit = async (e) => {
e.preventDefault();
await axios.post("http://127.0.0.1:8000/api/resumes/",
formData);
alert("Resume saved successfully!");
};
return (
<form onSubmit={handleSubmit} className="p-4 flex flex-col
gap-2">
{Object.keys(formData).map((key) => (
<input
key={key}
name={key}
placeholder={key.replace("_", " ")}
value={formData[key]}
onChange={handleChange}
className="border p-2 rounded"
/>
))}
<button type="submit" className="bg-blue-600 text-white p-2
rounded">
Save Resume
</button>
</form>
);
}
export default ResumeForm;