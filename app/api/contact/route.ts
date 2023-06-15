import sendgrid from '@sendgrid/mail';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
  const parsedRequest = await req.json();

  try {
    await sendgrid.send({
      to: 'hello@gabriel-lellouche.com', // Your email where you'll receive emails
      from: {
        email: 'info@gabriel-lellouche.com',
        name: 'My Personal Site',
      },
      subject: "You've got mail!",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
          <meta charset="utf-8">
        
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
          <link rel="stylesheet" href="css/styles.css?v=1.0">
        
        </head>
        
        <body>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                </div>
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>You've got a new mail from ${parsedRequest.name}, their email is: ✉️ ${parsedRequest.email} </h3>
                <div style="font-size: 16px;">
                <p>${parsedRequest.message}</p>
                </div>
           
                </div>
        </body>
        </html>`,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
  console.log('email sent!');
  return NextResponse.json({ error: '' });
}
