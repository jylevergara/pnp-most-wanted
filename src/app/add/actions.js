"use server";

import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadFileToS3(file, fileName, fileType) {
  const fileBuffer = file;
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: fileType,
  };

  const command = new PutObjectCommand(params);

  try {
    const response = await s3Client.send(command);
    console.log("File uploaded successfully", response);
    return fileName;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

export async function uploadFile(prevState, formData) {
  try {
    // e.preventDefault();
    console.log("formData", formData);
    const rawFormData = Object.fromEntries(formData);
    console.log('rawFormData', rawFormData);

    const file = rawFormData.file;
    console.log('file', file);

    if (file.size === 0) {
      return { status: "error", message: "Please select a file." };
    }
    const fileType = file.type.split("/")[1];

    const { lastName, firstName } = rawFormData;
    const s3FileName = `${lastName.trim()}${firstName.trim()}.${fileType}`;

    const buffer = Buffer.from(await file.arrayBuffer());
    const newFileName = await uploadFileToS3(buffer, s3FileName, fileType);

    rawFormData.imageUrl = process.env.AWS_S3_BUCKET_LINK + s3FileName;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Persons`, {
      method: "POST",
      body: JSON.stringify(rawFormData),
      "content-type": "application/json",
    });

    revalidatePath("/");
    // router.refresh()
    // router.push("/")
    return { status: "success", message: "File has been uploaded." };
  } catch (error) {
    return { status: "error", message: "Oh no, failed to upload file." };
  }
}