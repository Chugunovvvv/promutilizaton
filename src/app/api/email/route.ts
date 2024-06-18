import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { ILicenses } from '@/utils/licenses'
import { EmailTemplate } from '@/components/EmailTemplate/EmailTemplate'

const RESEND_TOKEN = process.env.RESEND_TOKEN

const resend = new Resend(RESEND_TOKEN)

interface SendingForm {
	name: string
	email?: string
	commentary?: string
	phone: string
	selectedWaste?: ILicenses[]
}

export async function POST(request: Request, response: Response) {
	const data: SendingForm = await request.json()
	try {
		await resend.emails.send({
			from: 'Запрос на консультацию <onboarding@resend.dev>',
			to: ['gkprom163@mail.ru'],
			subject: 'Письмо на запрос консультации',
			text: 'Письмо на запрос консультации',
			react: EmailTemplate({
				name: data?.name,
				email: data?.email,
				telephone: data?.phone,
				commentary: data?.commentary,
				selectedWaste: data?.selectedWaste,
			}),
		})

		return NextResponse.json({ success: true }, { status: 200 })
	} catch (error: any) {
		return NextResponse.json(
			{ success: false, message: error.message },
			{ status: 400 }
		)
	}
}
