# Next.js 15 Environment Variable Accessibility Issue

This repository demonstrates a common issue encountered in Next.js 15 applications where environment variables defined in `.env.local` are not accessible in all pages.  Specifically, the `process.env.NEXT_PUBLIC_MY_VARIABLE` is defined but throws a ReferenceError in the `/about` page.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the error in the console.

## Solution

The provided solution demonstrates how to correctly access environment variables across pages and ensures that the environment variable is properly accessible.  This solution uses the `next/config` module to access the environment variables from the `process.env` object.