  const readTextFile = (file,contentInfo,setFileContent) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileContent((prev)=>({
        ...contentInfo,
        Script_Style:e.target.result,
       
        }
        ));
    };
    reader.readAsText(file);
  };

  const readDocxFile = async (file,contentInfo,setFileContent) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
       setFileContent((prev)=>({
        ...contentInfo,
        Script_Style:result.value,
        
        }
        ));
      
    } catch (error) {
      alert('Error reading .docx file.');
    }
  };

  export {readDocxFile,readTextFile};