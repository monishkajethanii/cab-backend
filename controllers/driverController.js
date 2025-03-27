const express = require('express');
const supabase = require('../config/db')
const register = async (req, res) => {
    try{
        const {id, firstname, lastname, phoneno, dob, vtype, vmodel, vyear, vplate, licenseno, license_expiry} = req.body;
        console.log('connection created');
        const {data: existingDrivers, error: existingDriversError} = await supabase
        .from('driver')
        .select('*')
        .eq('phoneno',phoneno);

        if(existingDriversError)
        {
            console.error("checking existing driver",existingDriversError)
            return res.status(500).json({message:'error, checking existing driver'})
        }
        if(existingDrivers && existingDrivers.length>0)
        {
            return res.status(400).json({message:"driver already exists"})
        }
        const {data, error} = await supabase
        .from('driver')
        .insert([
            {
                id, firstname, lastname, phoneno, dob, vtype, vmodel, vyear, vplate, licenseno, license_expiry
            }
        ])
        .select()
        if(error)
        {
            console.error("error registering driver",error)
            return res.status(500).json({message:"error registering driver"})
        }
        return res.status(200).json({
            message:"driver register successfully",
            data: data[0]
        });
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error"});
    }
}
module.exports = {register}