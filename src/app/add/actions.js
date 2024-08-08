"use server"

import { revalidatePath } from "next/cache"
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3"

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
})

async function uploadFileToS3(file, fileName) {
    const fileBuffer = file;
    console.log('fileName', fileName);
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${fileName}`,
        Body: fileBuffer,
        ContentType: "image/jpg"
    }
    console.log('params.Bucket', params.Bucket);

    const command = new PutObjectCommand(params);

    try {
        const response = await s3Client.send(command);
        console.log('File uploaded successfully', response);
        return fileName;
    } catch (error) {
        console.log("some errorrrrrrr")
        console.log('error', error);
        throw error
    }
}

export async function uploadFile(prevState, formData) {
    try {
        console.log('formData yes', formData);
        const file = formData.get("file");
        console.log('file', file);

        // console.log('lastName', lastName);
        console.log("------")
        if(file.size === 0) {
            return { status: "error", message: "Please select a file."}
        }


        const buffer = Buffer.from(await file.arrayBuffer())
        console.log("uploading file to s3.........")
        await uploadFileToS3(buffer, file.name);

        revalidatePath("/")
        return { status: "success", message: "File has been uploaded."}
    } catch (error) {
        return { status: "error", message: "Oh no, failed to upload file."}
    }
}