import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";

const prisma = new PrismaClient();
export const createTaskJobs: RequestHandler = async (req,res,next) => {
    const createTask = await prisma.taskJobs.create({
        data:{...req.body},
    });
    res.status(200).json(createTask);
};

export const getTaskJobs:RequestHandler = async (req,res,next) =>{
    const getAll = await prisma.taskJobs.findMany({});
    res.status(200).json(getAll);
};



export const getTaskJobsByName:RequestHandler = async (req,res,next) =>{
    const {title} = req.body.title
    const getByName = await prisma.taskJobs.findUnique({
        where:{
            title,
        },
    });
    res.status(200).json(getByName);
};


