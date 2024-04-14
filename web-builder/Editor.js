import React, { useEffect,useState } from "react"
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage"
import { useParams } from "react-router-dom"
import "./styles/main.scss";

const Editor = () => {
 const [editor,setEditor] = useState(null);
  const {pageId} = useParams();
  console.log('pageId :>> ',pageId);
  
  
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebpage],
      pluginsOpts: {
        gjsPresetWebpage: {},
      }
    });
setEditor(editor);
}, []);

  return (
  <div className="App">
    <div id="editor"></div>
    </div>
  )
}

export default Editor;
