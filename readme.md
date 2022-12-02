# eCommerce app on Twilio Assets

A simple sequence of eCommerce screens on Twilio Assets, with embedded Segment trackers.

![Application screenshot](https://raw.githubusercontent.com/kslamet/ecommerce-assets/main/screenshot/eCommerceFlow.png)

## Key features
 * A set of screens
 * Welcome
 * Signup
 * Home
 * Product
 * Cart
 * Checkout
 * Confirmation (links back to home)

 Note: the pages have Segment trackers that would need to be replaced with your own trackers. On each HTML page, you would need to make the following changes:
 * Replace lines 5 and 6 with your own Segment code
 * Replace contact with the phone number that you would like to send the WhatsApp messages to
 * Replace any tracker details that you would like to show up differently on Segment

## Pre-requisites
1. Install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart#install-twilio-cli)
2. Install the [serverless toolkit](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started)

## Setup

3. Clone the repository and `cd` into it:
```shell
git clone https://github.com/kslamet/ecommerce-assets.git

cd ecommerce-assets
```

4. Using Twilio CLI, deploy code to your Twilio account:
```shell
twilio serverless:deploy
# View your app boarding page at https://[my-runtime-url].twil.io/boarding.html
```

## Deploy your Content API templates
Inside ./ecommerce-assets/postman, you will find a postman collection with sample Content API templates that you can deploy and test.

Note: to save time on WhatsApp approvals, you can create the content, send an initial message from your personal WhatsApp number to your Twilio WhatsApp number to allow freeform messages.
Note 2: the only template that has restriction is CTA (because it has URLs). This would require actual approval from WhatsApp.

## Setup Segment Destination Functions
In the folder segment-function, you will find a sample function to send Content API requests. Steps to set up the Segment Destination function:
1. Create a new function, select destination, and click Build
2. On the right panel, under templates, select Twilio (this adds Twilio Account ID and Token into the Settings tab)
3. Replace the sample code on the left panel with code in send-whatsapp.js, and provide the right content SID and optionally content variables
4. Configure, give the function a coherent name and hit Create Function
5. Repeat for each content template type
6. When connecting to the javascript source, filter such that the function is only triggered when the corresponding event.name is received

## Test It!

Your app should flow nicely from boarding all the way to confirmation page, and back to home page.
If your Segment javascript is deployed properly, you will also see the track events arriving in your Segment debugger.

Once WhatsApp content and Segment Destination Functions are set up properly, you would have the events fire WhatsApp messages to your phone!

## Credits
The screens on this repository is built with free Figma provided eCommerce template screens:
https://www.figma.com/community/file/1165115498526600895 