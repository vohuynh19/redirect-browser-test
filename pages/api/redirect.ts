// pages/api/redirect.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const targetUrl = query.url as string;

  // Validate and sanitize the URL
  if (targetUrl) {
    setTimeout(() => {
      res.redirect(302, targetUrl);
    }, 1000);
  } else {
    res.status(400).json({ message: "URL is required" });
  }
}
