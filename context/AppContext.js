import React, { createContext, useState } from "react";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";
import MLParser from "utils/MLParser";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Color, TextStyle],
    content: "<p>Edit me!</p>",
  });

  const [code, setCode] = useState();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showAdvert, setShowAdvert] = useState(false);
  const [advertCooldown, setAdvertCooldown] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const generateCode = () => {
    const html = editor.getHTML();
    setCode(MLParser(html));
  };

  const contextValues = {
    editor,
    code,
    setCode,
    showColorPicker,
    setShowColorPicker,
    showAdvert,
    setShowAdvert,
    advertCooldown,
    setAdvertCooldown,
    generateCode,
    showTutorial,
    setShowTutorial,
    showConfetti,
    setShowConfetti,
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
