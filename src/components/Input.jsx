import React, { useState } from "react";

function Input({ txt, setText }) {
  const [data, setData] = useState(null);
  const [img, setImg] = useState("");
  const [type, setType] = useState("");

  function onFileChange(e) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setData(e.target.result);
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  }

  async function onClick() {
    try {
      const resp = await fetch("http://localhost:5000/initial", {
        method: "POST",
        body: data,
      });

      if (!resp.ok) {
        setText(resp.statusText);
        return;
      }

      if (resp.headers.get("content-type")?.includes("image")) {
        const blob = await resp.blob();
        setImg(URL.createObjectURL(blob));
      } else {
        const json = await resp.json();
        setText(JSON.stringify(json, null, 2));
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="input-box">
      <form>
        <input type="file" onChange={(e) => onFileChange(e)} />
        {!data ? (
          <button type="button" disabled>
            Upload
          </button>
        ) : (
          <button type="button" onClick={() => onClick()}>
            Upload
          </button>
        )}
      </form>
      <img src={img} alt="" />
      <pre>{txt}</pre>
    </div>
  );
}

export default Input;
