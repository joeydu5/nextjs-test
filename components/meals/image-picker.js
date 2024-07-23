"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import c from "./image-picker.module.css";

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }
  function handlePickedChange(event) {
    const file = event.target.files[0];
    console.log("file", file);
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={c.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={c.controls}>
        <div className={c.preview}>
          {!pickedImage && <p>No image has been picked!</p>}
          {pickedImage && <Image src={pickedImage} alt="picked image" fill />}
        </div>
        <input
          className={c.input}
          type="file"
          id={name}
          name={name}
          accept="image/png image/jpeg"
          ref={imageInput}
          onChange={handlePickedChange}
          required
        />
        <button className={c.button} type="button" onClick={handlePickClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
