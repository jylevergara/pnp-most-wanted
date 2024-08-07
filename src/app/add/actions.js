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

async function uploadFileToS3(file, fileName, fileType) {
    const fileBuffer = file;
    console.log('fileBuffer', fileBuffer);
    console.log('fileType', fileType);
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${fileName}`,
        Body: fileBuffer,
        ContentType: fileType,
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

        console.log("------")
        if(file.size === 0) {
            return { status: "error", message: "Please select a file."}
        }
        const fileType = file.type.split("/")[1];

        const { lastName, firstName } = Object.fromEntries(formData);
        const s3FileName = `${lastName}${firstName}.${fileType}`;



        const buffer = Buffer.from(await file.arrayBuffer())
        await uploadFileToS3(buffer, s3FileName, fileType);

        revalidatePath("/")
        return { status: "success", message: "File has been uploaded."}
    } catch (error) {
        return { status: "error", message: "Oh no, failed to upload file."}
    }
}