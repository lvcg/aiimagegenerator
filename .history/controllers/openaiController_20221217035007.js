const { Configuration, OpenAIApi } = require("openai");

const Configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
   try{
    const response = await openai.createImage({
        prompt:'Polar bear on skates',
        n:1,
        sixe:'512'
    });
   } catch (error) {

   }
};

module.exports =  { generateImage };