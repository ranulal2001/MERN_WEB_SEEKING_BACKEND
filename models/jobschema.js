import mongoose from "mongoose";

const jobSchema=  new mongoose.Schema({
    title:{
        type:String,
        required:[true, "please provide job title"],
        minlength:[3,"job title must contain at least 3 charactor"],
        maxlength:[350, "job description cannot exceed 350 charactor "],
    },
    category:{
        type:String,
        required:[true, "Job category is required!"],

    },
    country:{
        type:String,
        required:[true, "Job country is required!"],

    },
    city:{
        type:String,
        required:[true, "Job city is required!"],

    },
    location:{
        type:String,
        required:[true, "please provide exact location!"],
        minlength:[50,"Job location must contain at least 50 charactor! "]
    },
    fixedSalary:{
        type:Number,
        minlength:[4,"fixedSalary must contain at least 4 digt!"],
        maxlength:[12,"salary can't be grater than 12 digit!"]
    },
    salaryFrom: {
        type: Number,
        minLength: [4, "Salary must contain at least 4 digits"],
        maxLength: [9, "Salary cannot exceed 9 digits"],
      },
      salaryTo: {
        type: Number,
        minLength: [4, "Salary must contain at least 4 digits"],
        maxLength: [9, "Salary cannot exceed 9 digits"],
      },
      expired: {
        type: Boolean,
        default: false,
      },
      jobPostedOn: {
        type: Date,
        default: Date.now,
      },
      postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    });
    export const Job = mongoose.model("Job", jobSchema);