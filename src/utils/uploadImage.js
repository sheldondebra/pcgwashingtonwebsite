import axios from "axios";

export const uploadImage = async (file,setProgress) =>{
  const formData = new FormData();
  formData.append('file', file);
  formData.append("upload_preset", "pcgwashingtonDc");
  formData.append("cloud_name", "dshhcmm8p");

  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/Root/image/upload", 
    formData,{
      onUploadProgress:(processEvent) =>{
        if(setProgress){
          const percentageCompleted = Math.round(
            (processEvent.loaded * 100) / processEvent.total
          );
          setProgress(percentageCompleted)
        }
      },
    },
  );
  return data.secure_url;

}