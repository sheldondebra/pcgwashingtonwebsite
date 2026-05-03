import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { db } from "../utils/firebase";
import { toast } from "react-toastify";

const SendMessage = ({title, btnLabel, type}) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [loading , setLoading]=useState(false)
  const [error, setError] = useState('')
  const [success, setSucess] =useState('')

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
const handleSubmit = async (e) =>{
  e.preventDefault()
  setLoading(true)

  if(!form.name || !form.email || !form.phone || !form.message ){
    setError('Please fill al required fields')
    setLoading(false)
    return
  }

  try{

    const colledctionName = type === "donation" ? "donations" : "contacts"

    await addDoc(collection(db,colledctionName),{
      ...form,
      type,
      createdAt: new Date(),
    });

    const res = await fetch('/api/contact',{
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(
        {
          ...form,
          type,
        }
      )
    });

    const data = await res.json();

    if(data.success){
      setSucess('Message sent Successfully')
      toast('Message sent Successfully')

      setForm({
        name: '',
        email:'',
        phone:'',
        message:''
      })

    }else{
      setError('Failed to send Message')
      toast('Failed to Send Message')
    }

  }catch(err){
    setError(err.message)
    console.log(err.message)
    toast(`Sending Message Unsuccessful ${err.message}`)
  }finally{
    setLoading(false)
  }

}

  return (
    <div>
      <div className="bg-white rounded-2xl shadow px-10 py-14 w-full ">
        <h1 className="text-3xl font-light capitalize mb-4">{title}</h1>
        {error && (
          <p className=" bg-red-100 text-red-900 py-2 px-6 my-4">{error}</p>
        )}
        {success && (
          <p className=" bg-green-100 text-green-900 py-2 px-6 my-4">{success}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              placeholder="Name"
              name="name"
              type="text"
              onChange={handleChange}
              value={form.name}
              className="border-b border-gray-300 w-full px-4 py-3 focus:outline-0 active:border-red-500 "
            />
          </div>
          <div className="mt-5">
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="border-b border-gray-300 w-full px-4 py-3 focus:outline-0 active:border-red-500 "
            />
          </div>
          <div className="mt-5">
            <input
              placeholder="Phone Number"
              name="phone"
              type="tel"
              className="border-b border-gray-300 w-full px-4 py-3 focus:outline-0 active:border-red-500 "
              onChange={handleChange}
              value={form.phone}
            />
          </div>
          <div className="mt-5">
            <textarea
              name="message"
              value={form.message}
              className="border-b border-gray-300 w-full px-4 py-3 focus:outline-0 active:border-red-500 "
              placeholder={
                type == "donation"
                  ? "Enter your donation message or inquiry"
                  : "Enter your Message "
              }
              onChange={handleChange}
            ></textarea>
          </div>
          <p className="text-gray-500 mt-7 text-sm">
            By submitting this form, you agree to share your information with us
            so we can respond to your inquiry promptly and appropriately.
          </p>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 bg-red-700 text-white px-5 py-2 rounded-4xl flex items-center gap-3 hover:bg-red-500 transition-colors duration-200"
          >
            <BsFillSendFill />
            {loading ? "Sending..." : btnLabel}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMessage;
