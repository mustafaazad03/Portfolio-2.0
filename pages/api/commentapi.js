import sanityClient from "@sanity/client";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.SANITY_API_TOKEN,
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2022-11-10",
};

const client = sanityClient(config)

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const { _id, name, comment, email } = JSON.parse(req.body)
        try {
            await client.create({
                _type: 'comment',
                blog: {
                    _type: 'reference',
                    ref: _id,
                },
                email,
                name,
                comment
            })
        } catch (error) {
            return res.status(500).json({ message: "Unable To Submit", error })
        }
        return res.status(200).json({ message: "Comment submitted Successfully!" })
    }
}