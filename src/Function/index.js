const cfnResponse = require('cfn-custom-resource');

exports.handler = async (event, context) => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));
  
  try{
    console.log('We succeeded');
    
    cfnReponse.sendSuccess('PopulateFrontendContent',{},event);
  } catch (err){
    console.error(err);
    
    await cfnResponse.sendFailure(err.message, event);
  }

  return {};
};
