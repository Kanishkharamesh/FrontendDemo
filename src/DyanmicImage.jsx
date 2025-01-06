//How can I update an image in React whenever I type something in an input field?
import React, { useState } from "react";

function DyanmicImage() {
  const [inputValue, setInputValue] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "https://t4.ftcdn.net/jpg/07/98/66/41/360_F_798664167_aPl8TLiOnnt9kVxOJfaw7LoHHX5TdLYp.jpg",
    "https://static.vecteezy.com/system/resources/previews/026/843/137/non_2x/beautiful-flowers-with-beautiful-scenery-ai-image-generate-free-photo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIi4Z8EBnvgyx5-yHvpsIavxa9duCeD0C-x-12g9qJHfDwaNcCI4THUtbqoUOVoyw0rw&usqp=CAU",
    "https://png.pngtree.com/thumb_back/fw800/background/20240106/pngtree-coloful-nature-beautiful-scenery-image_15576032.jpg",
  ];

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Update image index based on input length
    if (newValue.trim() !== "") {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div>
      <h1>Dynamic Images on Input</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          margin: "20px 0",
          fontSize: "16px",
        }}
      />
      {inputValue.trim() && (
        <div>
          <img
            src={images[imageIndex]}
            alt={`Dynamic ${imageIndex}`}
            style={{
              display: "block",
              marginTop: "20px",
              borderRadius: "10px",
              width: "100%"
            }}
          />
        </div>
      )}
    </div>
  );
}

export default DyanmicImage;