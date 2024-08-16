import React, { useEffect, useState } from "react";
import {
  country_arr,
  s_a,
  domains,
  platform_arr,
} from "../Informations/information";
import Alert from "./Alert";
import "../css/contentInfo.css";
import { readTextFile,readDocxFile } from "../../../../ReusableComponents/FileHandle";
import HeroButton from '../../../../ReusableComponents/HeroButton'
export const ContentInfo = ({
  setCurrentStep,
  contentinfo,
  setUserContentInfo,
}) => {
  const [isSelected, setIsSelected] = useState([]);
  const [isAlert,setIsAlert]=useState(false)


 
  useEffect(() => {
    let arr = [];
    for (let index = 0; index < platform_arr.length; index++) {
      if (!contentinfo.platform.includes(platform_arr[index])) {
        arr.push(platform_arr[index]);
      }
    }
    setIsSelected(arr);
 
  }, []);


const handlFileChange=async (e)=>{
    const file = e.target.files[0];

    if (!file) return;

    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (fileExtension === 'txt') {
     
      setUserContentInfo((prev)=>({
        ...contentinfo,
        file:file.name
      }))
      readTextFile(file,contentinfo,setUserContentInfo);
    } else if (fileExtension === 'docx') {
       setUserContentInfo((prev)=>({
        ...contentinfo,
        file:file.name
      }))
      await readDocxFile(file,contentinfo,setUserContentInfo);
    } else {
      alert('Unsupported file format. Please upload a .txt or .docx file.');
    }
  };

  const submit = (e) => {
    e.preventDefault();
    // console.log(platform_arr,"platform_Arr")
    // console.log(domain,"domain")
    if(contentinfo.domain==-1 ||  contentinfo.platform.length==4){
setIsAlert((prev)=>!prev)
setTimeout(() => {
    setIsAlert((prev)=>!prev)
}, 2000);
return ;
}
let arr=contentinfo.platform
let submitedPlatForm=[]
for (let index = 0; index < platform_arr.length; index++) {
  if(!arr.includes(platform_arr[index])){
submitedPlatForm.push(platform_arr[index])
  }
  
}

setUserContentInfo((prev)=>({...contentinfo,platform:submitedPlatForm,isSubMitted:true}))
setCurrentStep(3)

   
  };

  return (
    <>
      <div className="contentinfo">
        <h4 className="TitleTag">ContentInfo:    { isAlert? <Alert text="ALL Details Are Not Field!"/>:""}</h4>
     
        <div className="contentForm">
          <form className="form" onSubmit={(e) => submit(e)}>
            <div className="innerInfo no-margin">
              <div className="inputinfo ">
                <label htmlFor="">Domain:</label>
                <select
                  name="domain"
                  value={contentinfo.domain}
                  onChange={(e) => {
                    setUserContentInfo((prev) => ({
                      ...contentinfo,
                      domain: e.target.value,
                    }));
                  }}
                  required
                >
                  <option value={-1}>Select Your Domain</option>
                  {domains.map((element) => {
                    return (
                      <option value={element} key={element}>
                        {element}
                      </option>
                    );
                  })}
                </select>
              </div>
                  <div className="inputinfo no-margin">
                <label htmlFor="">Platform:</label>
                <select
                  name="platform"
                  onChange={(e) => {
                    let updated_platform = contentinfo.platform;
                    updated_platform = updated_platform.filter(
                      (element) => element != e.target.value
                    );
                    let arr = isSelected;
                    arr.push(e.target.value);
                    setIsSelected(arr);
                    setUserContentInfo((prev) => ({
                      ...contentinfo,
                      platform: updated_platform || [],
                    }));
                  }}
                  required
                >
                  <option value={-1}>Select Your PlatForm</option>
                  {contentinfo.platform.map((element) => {
                    return (
                      <option value={element} key={element}>
                        {element}
                      </option>
                    );
                  })}
                </select>
                <div className="selected">
                  {isSelected
                    ? isSelected.map((element) => {
                        return (
                          <div
                            className="selectedItem"
                            key={element + "123"}
                            onClick={(e) => {
                              let updated_platform = isSelected;
                              updated_platform = updated_platform.filter(
                                (ele) => ele != element
                              );
                              setIsSelected(updated_platform);
                              let arr = contentinfo.platform;
                              arr.push(element);
                              setUserContentInfo((prev) => ({
                                ...ContentInfo,
                                platform: arr || [],
                              }));
                            }}
                          >
                            {element} <span className="close">X</span>
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>
            </div>
            <div className="webInfo">
          <div className="inputinfo">
                <label htmlFor="">Reference Urls:</label>

            <input type="url" placeholder="Enter The Website Url 1" value={contentinfo.webUrl_1} onChange={(e)=>setUserContentInfo((prev)=>({...contentinfo,webUrl_1:e.target.value}))} name="" id="" required/>
          </div>
            </div>
            <div className="webInfo">

            <div className="inputinfo">
<input type="url" value={contentinfo.webUrl_2} onChange={(e)=>setUserContentInfo((prev)=>({...contentinfo,webUrl_2:e.target.value}))} placeholder="Enter The Website Url 2" name="" id=""  required/>
            </div>
            </div>
            <div className="webInfo">

            <div className="inputinfo">
<input type="url" placeholder="Enter The Website Url 3" value={contentinfo.webUrl_3} onChange={(e)=>setUserContentInfo((prev)=>({...contentinfo,webUrl_3:e.target.value}))} name="" id=""  required/>
            </div>
            </div>
            <div className="webInfo">

            <div className="inputinfo">
<input type="url" placeholder="Enter The Website Url 4" value={contentinfo.webUrl_4} onChange={(e)=>setUserContentInfo((prev)=>({...contentinfo,webUrl_4:e.target.value}))} name="" id=""  />
            </div>
            </div>
            <div className="innerInfo ten-bottom-margin">

            <div className="inputinfo">
<input type="url" placeholder="Enter The Website Url 5" value={contentinfo.webUrl_5} onChange={(e)=>setUserContentInfo((prev)=>({...contentinfo,webUrl_5:e.target.value}))} name="" id="" />
            </div>
            </div>
<div className="innerInfo">
  <div className="inputinfo">
    <label htmlFor="">Script Style:</label>
    <input type="file" name="files" id="" accept=".txt,.docx" onChange={handlFileChange}/>
  </div>
</div>
            
            
            <button type="submit" className="next_submit btn btn-primary" >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
