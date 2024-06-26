var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
const CONNECT_URL = process.env.MONGODBURL || "mongodb+srv://<username>:<password>@cluster0-owf5m.mongodb.net/cmscart?retryWrites=true&w=majority";
mongoose.connect(CONNECT_URL,{ useUnifiedTopology: true, useNewUrlParser: true  })

// Page schema 
const PageSchema=new Schema({

        title:{
            type:String,
            required:true,
            trim: true
        },
        slug:{
            type:String,
            trim: true
        }, 
         content:{
            type:String,
            required:true,
            trim: true
        },
        sorting:{
            type:Number,
            trim: true,
            default: 100
        }

});
module.exports = PageSchema;

// var Page=mongoose.exports=mongoose.model('Page',PageSchema);