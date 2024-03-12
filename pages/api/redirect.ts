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
    "https://test.links.banqup.com/enrol?code%3Dd971aee631b1f11da5e51265a75fd0c6dca2bb1f28298b39f9fccb7224d24a98%26apn%3Dcom.unifiedpost.myid.test%26ibi%3Dcom.unifiedpost-payments.myid.test%26isi%3D1594778737%26fr%3D1"
  );
}
