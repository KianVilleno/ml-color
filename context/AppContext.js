import React, { createContext, useState } from "react";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Color, TextStyle],
    content: "<p>Hello World! 🌎️</p>",
  });
  const [code, setCode] = useState();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const contextValues = {
    editor,
    code,
    setCode,
    showColorPicker,
    setShowColorPicker,
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
