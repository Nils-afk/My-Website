const fetch = require('isomorphic-unfetch') 

let key1 = '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';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/nils-afk/repos', {
        headers: {}
    })).json(); 
  

 
        
    



        
    
try {
        res.send([..._])
    } catch {
        res.status(500);
    }
}
