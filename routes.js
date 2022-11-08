const fs = require('fs').promises;

const routes = {
    "/home": {
        method: "GET",
        controller: async (req, res) => {
            try 
            {
                const html = await fs.readFile("./public/index.html");
                return res.write(html)
            }
            catch (error)
            {
                throw error;    
            }
        }
    }
}

module.exports = {
    HandleRoutes : (req, res) =>
    {
        if(!routes.hasOwnProperty(req.url))
        {
            return res.end("Error 404. Page not found");
        }

        if(routes[req.url]["method"] !== req.method)
        {
            return res.end(`${req.method} doesn't exist on ${req.url}`);
        }
        const url = req.url;
        const fun = routes[url]["controller"];
        return fun(req, res);
    }
}