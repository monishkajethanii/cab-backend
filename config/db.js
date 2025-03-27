// from docs
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://kvlsrxakquniffuiiezz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2bHNyeGFrcXVuaWZmdWlpZXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwOTQ2NjgsImV4cCI6MjA1ODY3MDY2OH0.svcdYkVSag49J3fbtbXpFLUaBdoLB5eDFpBlmb-QVog"
const supabase = createClient(supabaseUrl, supabaseKey)

// connection banane ke liye
const checkConnection = async () => {
    try
    {
        const {data, error} = await supabase.from('driver').select('*');
        if(error)
        {
            console.log('error in connection',error);
            throw error;
        }
        if(data)
        {
            console.log('connection ban gyi');
            return true;
        }
        return true;
    }
    catch(err)
    {
        console.log(err)
    }
}
checkConnection();
module.exports = supabase;