/**
 * @param {SpecTrack} event The track event
 * @param {Object.<string, any>} settings Custom settings
 * @return void
 */
 async function onTrack(event, settings) {
	if (event.event != '') {
		// Learn more at: https://www.twilio.com/docs/whatsapp
		await sendText(
			{
				To: 'whatsapp:' + event.properties.contact,
				From: 'MGxxxxx',
				ContentSid: 'HXxxxxx'
			},
			settings
		);
	}
}

/**
 * Sends SMS or WhatsApp message with Twilio
 *
 * https://www.twilio.com/docs/sms
 * https://www.twilio.com/docs/whatsapp
 *
 */
async function sendText(params, settings) {
	const endpoint = `https://api.twilio.com/2010-04-01/Accounts/${settings.twilioAccountId}/Messages.json`;
	await fetch(endpoint, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${btoa(
				settings.twilioAccountId + ':' + settings.twilioToken
			)}`,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		},
		body: toFormParams(params)
	});
}

function toFormParams(params) {
	return Object.entries(params)
		.map(([key, value]) => {
			const paramName = encodeURIComponent(key);
			const param = encodeURIComponent(value);
			return `${paramName}=${param}`;
		})
		.join('&');
}
