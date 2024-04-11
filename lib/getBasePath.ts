/**
 * The function `getBasePath` returns the base URL based on the environment (development or
 * production).
 * @returns The `getBasePath` function returns the base URL based on the environment. If the `NODE_ENV`
 * is set to "development", it returns "http://localhost:3000", otherwise it returns the base URL using
 * the `VERCEL_URL` environment variable with the "https://" prefix.
 */
const getBasePath = () => {
    let base_url = 
        process.env.NODE_ENV === "development" 
            ? "http://localhost:3000"
            : `https://${process.env.VERCEL_URL}`
    return base_url;
}

export default getBasePath;