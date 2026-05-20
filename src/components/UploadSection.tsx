"use client";

import { UploadCloud } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  setGenerated: (value:boolean)=>void;
  setPreview: (value:string)=>void;
}

export default function UploadSection({
  setGenerated,
  setPreview,
}: Props) {

  const [fileName,setFileName] = useState("");
  const [loading,setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {

    const file = acceptedFiles[0];

    if(file){

      setFileName(file.name);

      const imageUrl = URL.createObjectURL(file);

      setPreview(imageUrl);

      setLoading(true);

      setTimeout(()=>{

        setLoading(false);

        setGenerated(true);

      },3000);
    }

  },[]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept:{
      "image/*":[]
    }
  });

  return (
    <section className="section relative overflow-hidden">

      <div className="absolute inset-0 opacity-20">

        <div className="absolute inset-0 cad-grid"></div>

      </div>

      <div className="glass rounded-[32px] p-16 relative z-10">

        <div
          {...getRootProps()}
          className="border-2 border-dashed border-purple-500/40 rounded-[28px] p-20 text-center cursor-pointer hover:border-green-400 transition"
        >

          <input {...getInputProps()} />

          <div className="flex justify-center">

            <div className="w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-green-400">

              <UploadCloud
                size={52}
                className="text-white"
              />

            </div>

          </div>

          <h2 className="text-5xl font-black mt-10">
            Drag & Drop CAD Files
          </h2>

          <p className="text-gray-400 mt-6 text-xl">
            Upload product images or CAD assets
            for AI rendering.
          </p>

          <button className="btn mt-10">
            Browse Files
          </button>

          {fileName && (

            <div className="mt-10">

              <p className="text-green-400 text-lg">
                Uploaded Asset
              </p>

              <p className="text-2xl font-bold mt-2">
                {fileName}
              </p>

            </div>

          )}

          {loading && (

            <div className="mt-10">

              <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">

                <div className="h-full bg-gradient-to-r from-purple-500 to-green-400 animate-pulse w-full"></div>

              </div>

              <p className="mt-5 text-purple-300 text-lg">
                AI Processing CAD Geometry...
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}