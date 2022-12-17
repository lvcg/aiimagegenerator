const { Configuration, OpenAIApi } = require("openai");

const Configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(Configuration);

const generateImage = async (req, res) => {
   try{
    const response = await openai.createImage({
        prompt:'Polar bear on skates',
        n:1,
        size:'512x512'
    });

    const imageUrl =response.data.data.[0].url
   } catch (error) {

   }
};

module.exports =  { generateImage };