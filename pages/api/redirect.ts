// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  redirect: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.redirect(
    "https://test.links.banqup.com/payment?paymentId=2d5d676a-d266-4edb-84fd-cfe40c123ff2&successRedirect=https%3A%2F%2Fbanqupone.free.beeceptor.com%2Fsuccess-payment-redirect&failureRedirect=https%3A%2F%2Fbanqupone.free.beeceptor.com%2Ffailure-payment-redirect"
  );
}
