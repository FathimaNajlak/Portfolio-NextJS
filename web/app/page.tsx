import { sanityClient } from "@/lib/sanity";


export default async function Home() {
  const profile = await sanityClient.fetch(`
  *[_type == "profile"][0]{
    name,
    role,
    bio
  }
`);
  return (<main>
    <h1>{profile.name}</h1>
    <h2>{profile.role}</h2>
    <p>{profile.bio}</p>
  </main>);
}
