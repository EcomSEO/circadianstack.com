import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|sitemap.xml|robots.txt|llms.txt|opengraph-image|twitter-image|icon|apple-icon|.*\\..*).*)",
  ],
};
