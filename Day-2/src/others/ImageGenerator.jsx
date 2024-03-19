import React, { useRef, useEffect } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import Konva from 'konva';

const ImageGenerator = ({ name1, name2 }) => {
  const layerRef = useRef(null);

  useEffect(() => {
    if (!layerRef.current) return; // Skip if layer hasn't been rendered yet

    const firstLetter = name1?.charAt(0)?.toUpperCase();
    const secondLetter = name2?.charAt(0)?.toUpperCase();

    if (!firstLetter || !secondLetter) return; // Handle cases where initials aren't available

    // Generate random dark colors (guaranteed dark)
    const randomColor1 = generateDarkColor();
    const randomColor2 = generateDarkColor();

    const firstText = new Konva.Text({
      x: 5,
      y: 10,
      text: firstLetter,
      fontSize: 25,
      fontFamily: 'Arial',
      fill: randomColor1,
    });

    const secondText = new Konva.Text({
      x: 25, // Adjust x position to avoid overlapping
      y: 10,
      text: secondLetter,
      fontSize: 25,
      fontFamily: 'Arial',
      fill: randomColor2,
    });

    // Add Text elements to the Layer
    layerRef.current.add(firstText, secondText);

    // Request redraw to update the stage
    layerRef.current.batchDraw();
  }, [name1, name2]); // Re-draw on name changes

  // Function to generate a random dark color in hex format
  const generateDarkColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      let digit = Math.floor(Math.random() * 8); // Limit range for darker shades
      color += letters[digit];
    }
    return color;
  };

  return (
    <Stage width={45} height={40} className='bg-blue-300 rounded-lg'>
      <Layer ref={layerRef} />
    </Stage>
  );
};

export default ImageGenerator;
