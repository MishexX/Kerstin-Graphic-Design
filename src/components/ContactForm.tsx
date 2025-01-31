import { Button } from '@heroui/react'
import React, { useState } from 'react'

const ContactForm = () => {

 

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        companyName: "",
        contentRequirements: "",
      });
      const [doneSubmit, setDoneSubmit] = useState(false);
      const [failedSubmit, setfailedSubmit] = useState(false);
      
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      
      const [loading, setloading] = useState(false)
      
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        try {
        setloading(true)
          // Save the data to Firestore
        //   await addDoc(collection(db, "proposals"), formData);
      
          // Set doneSubmit to true
          setDoneSubmit(true);
      
          // Reset the form
          setFormData({
            fullName: "",
            email: "",
            companyName: "",
            contentRequirements: "",
          });
       setloading(false)
      //  alert("all perfect")
          // Revert doneSubmit back to false after 3 seconds
          setDoneSubmit(true);
          setTimeout(() => {
            setDoneSubmit(false);
          }, 6000);
        } catch (error) {
         setloading(false)
        //  alert("did not WORK OUT")
        setfailedSubmit(true)
        setTimeout(() => {
          setfailedSubmit(false);
        }, 6000);
          console.error("Error saving proposal:", error);
        }
      };
      
      // Check if any input is empty to disable the button
      const isFormInvalid =
        !formData.fullName || !formData.email || !formData.companyName || !formData.contentRequirements;
      // funcitonality 



  return (
    
    <div className="bg-[#16181F] border-white/10 border flex flex-col items-center h-fit p-8 rounded-lg shadow-md">
    <p className="text-lg mb-4 max-w-lg text-center text-[#BBB7C5]">
      {`Tell us your requirement`}
    </p>
    <form   onSubmit={handleSubmit} className="space-y-4  flex flex-col   w-full">
      <input
        type="text"
         name="fullName"
        placeholder="Full name"
        value={formData.fullName}
        onChange={handleChange}
         autoComplete='off'

        className="  w-full max-w-lg mx-auto p-3  rounded-md placeholder:text-sm bg-black text-white border border-gray-600 focus:outline-none focus:border-[#7FD858]"
      />
      <input
        type="email"
        autoComplete='off'
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="  w-full max-w-lg mx-auto p-3  rounded-md placeholder:text-sm bg-black text-white border border-gray-600 focus:outline-none focus:border-[#7FD858]"
      />
      <input
        type="text"
         autoComplete='off'
        placeholder="Company name"
           name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        className="  w-full max-w-lg mx-auto p-3  rounded-md placeholder:text-sm bg-black text-white border border-gray-600 focus:outline-none focus:border-[#7FD858]"
      />
      <textarea
       autoComplete='off'
           name="contentRequirements"
        placeholder="I need a logo for my business"
        value={formData.contentRequirements}
        onChange={handleChange}
        className="  w-full max-w-lg mx-auto p-3  rounded-md placeholder:text-sm bg-black text-white border border-gray-600 focus:outline-none focus:border-[#7FD858]"
      />
      {/* <button
        type="submit"
        className="w-full bg-yellow-400 text-black p-3 rounded font-semibold hover:bg-yellow-500"
      >
        Request a Proposal
      </button> */}


{
doneSubmit &&
<p className="text-green-500 text-sm font-poppinsreg ">
Your proposal request has been successfully submitted! We will get back to you within 24 hours.
</p>


}



{
failedSubmit &&

<p className="text-red-500 text-sm font-poppinsreg">
Something went wrong. Please try again.
</p>

}






<Button isLoading={loading} isDisabled={isFormInvalid || loading} className=" max-w-lg mx-auto w-full  py-4 px-6 rounded-full font-poppinsreg  transition duration-300    bg-black text-white" type="submit">
         {loading ? "Submitting" : "Submit"} 
      </Button>
     
{/* <button 
disabled={isFormInvalid || loading}
type="submit"

className={`  ${isFormInvalid ? "bg-gray-500" : "bg-[#7FD858] hover:bg-[#7bcd58]"}  text-black py-4 px-6 rounded-full font-poppinsreg  transition duration-300`}>



    {loading ? (
<div className=' flex items-center gap-3'>
<svg className="animate-spin h-5 text-white border bg-transparent  border-white rounded-full w-5 mr-3 ..." viewBox="0 0 24 24">

</svg>
  Loading...
</div>
) : (
"Request a proposal"
)}


      </button> */}
    </form>
  </div>


  )
}

export default ContactForm