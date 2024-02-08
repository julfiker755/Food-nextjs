// import Mongoosedatabase from "@/lib/Database"
import Mongoosedatabase from "@/lib/Database"
import shopModel from "@/lib/model/Shopmodel"
import multer from "multer"
import { NextResponse } from "next/server"
// ----------
const { NextApiHandler } = require("next");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs/promises");
// -----------


// get
export async  function GET(req){
    try{
       Mongoosedatabase()
      const result=await shopModel.find()
      return NextResponse.json({status:'success',data:result})

    }catch(err){
      return NextResponse.json({status:'fail',message:err.toString()})
    }
}


// post ----------
export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/images");
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export async  function POST(req){
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/images"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/images"));
  }
  await readFile(req, true);
  return NextResponse.json({ done: "ok" });
}