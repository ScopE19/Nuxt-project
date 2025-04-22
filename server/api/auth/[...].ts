import  {NuxtAuthHandler} from '#auth'
import GithubProvider from 'next-auth/providers/github'

const runtimeConfig = useRuntimeConfig()
console.log('Github Client ID:', runtimeConfig.public.GITHUB_CLIENT_ID)
console.log('Github Redirect URI:', runtimeConfig.public.GITHUB_REDIRECT_URI)


export default NuxtAuthHandler({
    pages: {
        signIn: '/'},

    providers: [
        GithubProvider.default({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
})],})