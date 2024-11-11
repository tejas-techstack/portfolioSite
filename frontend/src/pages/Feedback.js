import React, {useState} from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const feedbackData = {name, email, message};

    try{
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok){
        alert("Submitted");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.Error("Error", error);
      alert("Error submitting");
    }
  }

  return (
      <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  )
}

export default Feedback
