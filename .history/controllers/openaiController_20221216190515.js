const { Configuration, OpenAIApi } = require("openai");

const Configuration = new Configuration({
    apiKey: 
})

const generateImage = async (req, res) => {
    res.status(200).json({
        success: true,
    });
};

module.exports =  { generateImage };