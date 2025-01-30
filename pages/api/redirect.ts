import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const targetUrl = query.url as string;
  const processingDelay = parseInt(query.processingDelay as string) * 1000;
  const redirectDelay = parseInt(query.redirectDelay as string);
  if (!targetUrl) {
    res.status(400).json({ message: "URL is required" });
    return;
  }
  setTimeout(() => {
    if (redirectDelay > 0) {
      res.redirect(
        302,
        `/redirect?link=${encodeURIComponent(
          targetUrl
        )}&timeout=${redirectDelay}`
      );
    } else {
      res.redirect(302, targetUrl);
    }
  }, processingDelay);
}
