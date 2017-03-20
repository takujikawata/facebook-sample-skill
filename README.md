# facebook-skill-sample

## About
This is a sample Amazon alexa skill excercing the account linking feature of Amazon alexa.
This skill link to your facebook account and post a message to your timeline.

## How to set up the skill:
This sample uses alexa-sdk for Node.js and can run on AWS lambda function. About the sdk and the instllation instruction for the skills uses the sdk, 
please see: https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs  
This sample uses alexa-sdk and NodeJS Library for Facebook. For set them up, you go to src dirctory and run following commands for setting up the libraries.  


    npm install facebook-node --save   
    npm install alexa-sdk --save   

For the account linking setting for your alexa skill for facebook, following page would help:
http://matchboxmobile.com/blog/oauth-using-alexa/  

## Note:
- The page above didn't mention clearly how to set up "Client id" of your skill's account linking setting.  
Actually, "Client id" setting of your skill's account linking setting should be matched with the "App ID" of your facebook app's Dashboard page. 
You would copy the "App ID" displayed in the facebook dashboard page into your skill's account linking setting page and they should work just fine.
- About the "Scope" of skill's account linking setting, the item you need for this sample working is "user_posts".
- This skill uses NodeJS Library for Facebook. You can reach to any feature this library provide. See https://www.npmjs.com/package/fb for the detail.

## License:
This sample code is provided unser Apache License Version 2.0. For detail, please see: https://github.com/takujikawata/calculator-skill-sample/blob/master/LICENSE.txt
