import { createMollieClient } from '@mollie/api-client'
import { defineEventHandler, readBody, getRequestURL } from 'h3'

const config = useRuntimeConfig()
const mollie = createMollieClient({ apiKey: config.mollieApiKey })

export default defineEventHandler(async (event) => {
    const { description, amount } = await readBody<{ description: string; amount: string }>(event)

    // Build absolute redirect URL back to our app after payment
    const origin = getRequestURL(event).origin

    const payment = await mollie.payments.create({
        amount: { currency: 'EUR', value: amount }, // e.g. "10.00"
        description,
        redirectUrl: `${origin}/success`,
        // optional: where Mollie will POST payment updates
        // webhookUrl: `${origin}/api/webhook`,
        metadata: {
            // any metadata for your own bookkeeping
            orderId: '12345'
        }
    })

    return { checkoutUrl: payment.getCheckoutUrl() }
})