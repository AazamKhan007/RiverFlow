const env = {
  appwrite: {
    endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || ''),
    projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || ''),
    apikey: String(process.env.APPWRITE_API_KEY || '')
  }
}

// Validate environment variables
if (!env.appwrite.endpoint) {
  console.error('Missing NEXT_PUBLIC_APPWRITE_ENDPOINT environment variable');
}
if (!env.appwrite.projectId) {
  console.error('Missing NEXT_PUBLIC_APPWRITE_PROJECT_ID environment variable');
}
if (!env.appwrite.apikey) {
  console.error('Missing APPWRITE_API_KEY environment variable');
}

export default env
